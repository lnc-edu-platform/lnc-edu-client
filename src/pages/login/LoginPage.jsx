import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import AuthLayout from '../../components/Auth/Authlayout.jsx';
import { loginStyle } from './LoginPage.styles.js';
import { useToast } from '../../context/ToastContext.jsx';

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const showToast = useToast();

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!loginId.trim() || !password.trim()) {
      setErrorMsg('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loginId, password }),
      });

      const json = await res.json();

      if (!res.ok) {
        if (res.status === 401) {
          setErrorMsg('아이디 또는 비밀번호가 올바르지 않습니다.');
        } else if (res.status === 400) {
          setErrorMsg('아이디와 비밀번호를 모두 입력해주세요.');
        } else {
          setErrorMsg(
            '로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
          );
        }
        return;
      }
      console.log('로그인 응답:', json);
      console.log('data:', json.data);
      login(json.data);
      showToast(`${json.data.user.name}님, 환영합니다!`, 'success');
      navigate('/');
    } catch {
      // 서버 연결 실패 → localStorage 목업 유저로 로그인 시도
      console.warn('[Login] 서버 연결 실패 → 목업 유저 확인');
      const mockUsers = JSON.parse(localStorage.getItem('mockUsers') ?? '[]');
      const found = mockUsers.find(
        (u) => u.loginId === loginId && u.password === password,
      );
      if (found) {
        login({
          isMock: true,
          user: {
            loginId: found.loginId,
            name: found.name,
            studentId: found.studentId,
            role: found.role,
          },
        });
           showToast(`${found.name}님, 환영합니다!`, 'success'); // ← json.data.user.name → found.name
        navigate('/');
      } else {
        showToast(`아이디 또는 비밀번호가 틀렸습니다.`, 'error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <AuthLayout title="로그인">
        <form style={loginStyle.form} onSubmit={handleSubmit}>
          <div style={loginStyle.inputGroup}>
            <input
              type="text"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              placeholder="아이디 입력"
              style={loginStyle.input}
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호 입력"
              style={loginStyle.input}
              required
            />
            {errorMsg && (
              <p style={{ fontSize: '13px', color: '#e03131', margin: 0 }}>
                {errorMsg}
              </p>
            )}
            <button
              type="submit"
              style={loginStyle.inputbutton}
              disabled={isLoading}
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </button>
          </div>
        </form>
      </AuthLayout>

      <div style={loginStyle.join}>
        처음이신가요?{' '}
        <span onClick={() => navigate('/signup')} style={loginStyle.joinSpan}>
          회원가입
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
