/* eslint-disable react-refresh/only-export-components */
// ─────────────────────────────────────────────
// AuthContext.jsx
// - accessToken (1시간) / refreshToken (30일) 분리 관리
// - accessToken 만료 시 refreshToken으로 자동 갱신
// - /api/users/me 로 유저 정보 초기 로드
// ─────────────────────────────────────────────
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    () => localStorage.getItem('accessToken') ?? null,
  );
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // 초기 유저 정보 로딩
  const refreshTimerRef = useRef(null);
  const silentRefreshRef = useRef(null);

  // ── 로그아웃 ──────────────────────────────────
  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAccessToken(null);
    setUser(null);
    if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);
  }, []);

  // ── accessToken 자동 갱신 예약 ──────────────
  // 만료 1분 전(3540초)에 갱신 시도
  const scheduleRefresh = useCallback((delayMs = 3540 * 1000) => {
    if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);
    refreshTimerRef.current = setTimeout(async () => {
      await silentRefreshRef.current?.();
    }, delayMs);
  }, []);

  // ── refreshToken으로 accessToken 갱신 ────────
  const silentRefresh = useCallback(async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      logout();
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/api/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
      });
      if (!res.ok) throw new Error('refresh 실패');
      const json = await res.json();
      const newAccessToken = json.data.accessToken;
      localStorage.setItem('accessToken', newAccessToken);
      setAccessToken(newAccessToken);
      scheduleRefresh(); // 갱신 후 다시 예약
    } catch {
      console.warn('[Auth] 토큰 갱신 실패 → 로그아웃');
      logout();
    }
  }, [logout, scheduleRefresh]);

  useEffect(() => {
    silentRefreshRef.current = silentRefresh;
  }, [silentRefresh]);

  // ── /api/users/me 로 유저 정보 조회 ──────────
  const fetchMe = useCallback(
    async (token) => {
      try {
        const res = await fetch(`${BASE_URL}/api/users/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setUser(json.data); // { loginId, name, studentId, role }
      } catch (err) {
        console.warn('[Auth] 내 정보 조회 실패:', err.message);
        // accessToken이 만료됐을 가능성 → 갱신 시도
        await silentRefresh();
      }
    },
    [silentRefresh],
  );

  // ── 앱 초기 마운트: 저장된 토큰으로 유저 복원 ─
  useEffect(() => {
    const init = async () => {
      if (accessToken) {
        await fetchMe(accessToken);
        scheduleRefresh(); // 갱신 타이머 시작
      }
      setIsLoading(false);
    };
    init();
    return () => {
      if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);
    };
  }, [accessToken, fetchMe, scheduleRefresh]);

  // ── 로그인 ────────────────────────────────────
  // 실제 서버: data = { accessToken, refreshToken, user }
  // 목업 모드: data = { isMock: true, user }
  const login = useCallback(
    (data) => {
      if (data.isMock) {
        // 서버 없을 때 — 가짜 토큰으로 세션 유지
        const mockToken = 'mock-token-' + Date.now();
        localStorage.setItem('accessToken', mockToken);
        setAccessToken(mockToken);
        setUser(data.user);
        return;
      }
      // 실제 서버 응답
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      setAccessToken(data.accessToken);
      setUser(data.user);
      scheduleRefresh();
    },
    [scheduleRefresh],
  );

  const isLoggedIn = !!accessToken && !!user;

  // role 편의 헬퍼
  const role = user?.role ?? 'GUEST';
  const isAdmin = role === 'ADMIN';
  const isMember = role === 'MEMBER' || role === 'ADMIN';

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        isLoggedIn,
        isLoading,
        role,
        isAdmin,
        isMember,
        login,
        logout,
        fetchMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ── 커스텀 훅 ─────────────────────────────────
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx)
    throw new Error('useAuth는 AuthProvider 안에서만 사용할 수 있어요.');
  return ctx;
};
