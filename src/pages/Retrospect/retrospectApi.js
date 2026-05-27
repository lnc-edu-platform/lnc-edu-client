// ─────────────────────────────────────────────
// retrospectApi.js  —  API 연동 + 목데이터 폴백
// VITE_USE_MOCK=true 이면 fetch 자체를 건너뛰고
// 콘솔 경고 없이 목데이터만 반환합니다.
// ─────────────────────────────────────────────
const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';

const authHeaders = (accessToken) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${accessToken}`,
});

// ── 목데이터 ──────────────────────────────────
export const dummyPosts = [
  {
    id: 1,
    title: '산격중 9주차 — 변수 개념을 다시 풀어쓰기',
    content:
      '지난 주 수업 끝나고 한 학생이 "변수가 뭔지 잘 모르겠어요"라고 말했어요. 다시 처음으로 돌아가서, 변수를 \'책가방\' 비유로 풀어 본 한 시간의 기록.',
    author: { name: '김지원', loginId: 'kimjw' },
    createdAt: '2026-05-12T09:00:00',
    updatedAt: '2026-05-12T09:00:00',
    category: '산격중',
    tags: ['멘토링', '산격중', '9주차'],
    likes: 12,
    imgUrl: null,
  },
  {
    id: 2,
    title: '부스 운영, 학생 130명을 만난 토요일',
    content:
      '30분 단위 로테이션이 생각보다 빡빡했어요. 운영진과 정리한 인사이트 5가지를 공유합니다.',
    author: { name: '이세빈', loginId: 'lsb' },
    createdAt: '2026-05-05T10:00:00',
    updatedAt: '2026-05-05T10:00:00',
    category: '행사',
    tags: ['대구 SW체험', '행사'],
    likes: 15,
    imgUrl: null,
  },
  {
    id: 3,
    title: '침산초등학교 4학년 스크래치 수업',
    content:
      '블록 코딩이 익숙하지 않은 아이들을 위해 눈높이에 맞춰 설명하는 법을 배웠습니다.',
    author: { name: '박서연', loginId: 'psy' },
    createdAt: '2026-04-30T11:00:00',
    updatedAt: '2026-04-30T11:00:00',
    category: '침산초',
    tags: ['멘토링', '침산초', '5주차'],
    likes: 8,
    imgUrl: null,
  },
];

// ── 날짜 포맷 헬퍼 ─────────────────────────────
export const formatDate = (isoString) => {
  if (!isoString) return '';
  const d = new Date(isoString);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(
    d.getDate(),
  ).padStart(2, '0')}`;
};

// ── API 호출 함수들 ────────────────────────────

/** 회고 전체 조회  GET /api/reflections */
export const fetchReflections = async (accessToken) => {
  if (USE_MOCK) return { data: dummyPosts, isFallback: true };
  try {
    const res = await fetch(`${BASE_URL}/api/reflections`, {
      headers: authHeaders(accessToken),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return { data: json.data, isFallback: false };
  } catch (err) {
    console.warn('[회고] API 연결 실패 → 목데이터 사용:', err.message);
    return { data: dummyPosts, isFallback: true };
  }
};

/** 회고 단건 조회  GET /api/reflections/:id */
export const fetchReflectionById = async (id, accessToken) => {
  if (USE_MOCK) {
    const found = dummyPosts.find((p) => p.id === Number(id)) ?? null;
    return { data: found, isFallback: true };
  }
  try {
    const res = await fetch(`${BASE_URL}/api/reflections/${id}`, {
      headers: authHeaders(accessToken),
    });
    if (res.status === 404)
      return { data: null, notFound: true, isFallback: false };
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return { data: json.data, isFallback: false };
  } catch (err) {
    console.warn('[회고] API 연결 실패 → 목데이터 사용:', err.message);
    const found = dummyPosts.find((p) => p.id === Number(id)) ?? null;
    return { data: found, isFallback: true };
  }
};

/** 회고 작성  POST /api/reflections */
export const createReflection = async (
  { title, content },
  accessToken,
  user,
) => {
  if (USE_MOCK) {
    const newPost = {
      id: Date.now(),
      title,
      content,
      author: { name: user?.name ?? '익명', loginId: user?.loginId ?? '' },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      category: '기타',
      tags: [],
      likes: 0,
      imgUrl: null,
    };
    dummyPosts.unshift(newPost);
    return { data: newPost, isFallback: true };
  }
  try {
    const res = await fetch(`${BASE_URL}/api/reflections`, {
      method: 'POST',
      headers: authHeaders(accessToken),
      body: JSON.stringify({ title, content }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return { data: json.data, isFallback: false };
  } catch (err) {
    console.warn('[회고] 작성 API 실패 → 목데이터에 추가:', err.message);
    const newPost = {
      id: Date.now(),
      title,
      content,
      author: { name: user?.name ?? '익명', loginId: user?.loginId ?? '' },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      category: '기타',
      tags: [],
      likes: 0,
      imgUrl: null,
    };
    dummyPosts.unshift(newPost);
    return { data: newPost, isFallback: true };
  }
};

/** 회고 수정  PUT /api/reflections/:id */
export const updateReflection = async (id, { title, content }, accessToken) => {
  if (USE_MOCK) {
    const idx = dummyPosts.findIndex((p) => p.id === Number(id));
    if (idx !== -1) dummyPosts[idx] = { ...dummyPosts[idx], title, content };
    return { data: dummyPosts[idx] ?? null, isFallback: true };
  }
  try {
    const res = await fetch(`${BASE_URL}/api/reflections/${id}`, {
      method: 'PUT',
      headers: authHeaders(accessToken),
      body: JSON.stringify({ title, content }),
    });
    if (res.status === 403)
      return { data: null, error: '수정 권한이 없습니다.', isFallback: false };
    if (res.status === 404)
      return {
        data: null,
        error: '회고를 찾을 수 없습니다.',
        isFallback: false,
      };
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return { data: json.data, isFallback: false };
  } catch (err) {
    console.warn('[회고] 수정 API 실패 → 로컬 업데이트:', err.message);
    const idx = dummyPosts.findIndex((p) => p.id === Number(id));
    if (idx !== -1) dummyPosts[idx] = { ...dummyPosts[idx], title, content };
    return { data: dummyPosts[idx] ?? null, isFallback: true };
  }
};

/** 회고 삭제  DELETE /api/reflections/:id */
export const deleteReflection = async (id, accessToken) => {
  if (USE_MOCK) {
    const idx = dummyPosts.findIndex((p) => p.id === Number(id));
    if (idx !== -1) dummyPosts.splice(idx, 1);
    return { success: true, isFallback: true };
  }
  try {
    const res = await fetch(`${BASE_URL}/api/reflections/${id}`, {
      method: 'DELETE',
      headers: authHeaders(accessToken),
    });
    if (res.status === 403)
      return {
        success: false,
        error: '삭제 권한이 없습니다.',
        isFallback: false,
      };
    if (res.status === 404)
      return {
        success: false,
        error: '회고를 찾을 수 없습니다.',
        isFallback: false,
      };
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { success: true, isFallback: false };
  } catch (err) {
    console.warn('[회고] 삭제 API 실패 → 로컬 삭제:', err.message);
    const idx = dummyPosts.findIndex((p) => p.id === Number(id));
    if (idx !== -1) dummyPosts.splice(idx, 1);
    return { success: true, isFallback: true };
  }
};
