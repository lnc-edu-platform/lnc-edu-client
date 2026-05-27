import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/Auth/Authlayout';
import style from './SignupPage.module.css';
const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

const MAJORS = [
  '심화컴퓨팅/플랫폼SW',
  '글로벌SW',
  '인공지능컴퓨팅',
  '첨단컴퓨팅',
  '정보컴퓨터교육',
  '기타',
];

const SignupPage = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: 이름·학번·전공·전화 / 2: 아이디·비밀번호

  // 1단계 필드 (프론트 전용)
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [major, setMajor] = useState('');
  const [phone, setPhone] = useState('');

  // 2단계 필드 (API 전송)
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [showPwConfirm, setShowPwConfirm] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // ── 1단계 → 2단계 ──────────────────────────
  const handleNext = (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!name.trim()) { setErrorMsg('이름을 입력해주세요.'); return; }
    if (!studentId.trim()) { setErrorMsg('학번을 입력해주세요.'); return; }
    setStep(2);
  };

  // ── 2단계 제출 → API ────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!loginId.trim()) { setErrorMsg('아이디를 입력해주세요.'); return; }
    if (password.length < 10) { setErrorMsg('비밀번호는 최소 10자 이상이어야 합니다.'); return; }
    if (password !== passwordConfirm) { setErrorMsg('비밀번호가 일치하지 않습니다.'); return; }

    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loginId, password, name, studentId }),
      });

      const json = await res.json();

      if (!res.ok) {
        if (res.status === 400) {
          setErrorMsg('이미 사용 중인 아이디 또는 학번입니다.');
        } else {
          setErrorMsg('회원가입 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
        return;
      }

      navigate('/login');
    } catch (err) {
      // 서버 연결 실패 → localStorage에 임시 저장
      console.warn('[Signup] 서버 연결 실패 → localStorage에 임시 저장');

      const existingUsers = JSON.parse(localStorage.getItem('mockUsers') ?? '[]');

      // 아이디 또는 학번 중복 체크
      const isDuplicate = existingUsers.some(
        (u) => u.loginId === loginId || u.studentId === studentId
      );
      if (isDuplicate) {
        setErrorMsg('이미 사용 중인 아이디 또는 학번입니다.');
        setIsLoading(false);
        return;
      }

      const newUser = {
        loginId,
        password, // 목업 전용 — 실제 서버 연동 시 제거
        name,
        studentId,
        role: 'USER',
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem('mockUsers', JSON.stringify([...existingUsers, newUser]));
      console.info('[Signup] 임시 저장 완료:', newUser.loginId);
      navigate('/login');
    } finally {
      setIsLoading(false);
    }
  };

  // ── 1단계: 이름·학번·전공·전화번호 ──────────
  const renderStep1 = () => (
    <form className={style.inputGroup} onSubmit={handleNext}>
      <div className={style.fieldWrapper}>
        <label className={style.fieldLabel}>
          이름 <span className={style.required}>*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
          className={style.input}
          required
        />
      </div>

      <div className={style.fieldWrapper}>
        <label className={style.fieldLabel}>
          학번 <span className={style.required}>*</span>
        </label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="학번 입력 (ex. 2025012345)"
          className={style.input}
          required
        />
      </div>

      <div className={style.fieldWrapper}>
        <label className={style.fieldLabel}>
          전공 <span className={style.required}>*</span>
        </label>
        <div className={style.radioGrid}>
          {MAJORS.map((m) => (
            <label key={m} className={style.radioLabel}>
              <input
                type="radio"
                name="major"
                value={m}
                checked={major === m}
                onChange={(e) => setMajor(e.target.value)}
                className={style.radioInput}
              />
              {m}
            </label>
          ))}
        </div>
      </div>

      <div className={style.fieldWrapper}>
        <label className={style.fieldLabel}>
          전화번호 <span className={style.required}>*</span>
        </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="전화번호 입력 (ex. 010-1234-5678)"
          className={style.input}
        />
      </div>

      {errorMsg && <p className={style.errorText}>{errorMsg}</p>}

      <button type="submit" className={style.submitButton}>
        다음
      </button>
    </form>
  );

  // ── 2단계: 아이디·비밀번호 ──────────────────
  const renderStep2 = () => (
    <form className={style.inputGroup} onSubmit={handleSubmit}>
      <div className={style.fieldWrapper}>
        <label className={style.fieldLabel}>
          아이디 <span className={style.required}>*</span>
        </label>
        <input
          type="text"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          placeholder="아이디 입력"
          className={style.input}
          required
        />
        <span className={style.helperText}>사용 가능한 아이디입니다</span>
      </div>

      <div className={style.fieldWrapper}>
        <label className={style.fieldLabel}>
          비밀번호 <span className={style.required}>*</span>
        </label>
        <div className={style.passwordWrapper}>
          <input
            type={showPw ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호 입력"
            className={style.input}
            required
          />
          <button type="button" className={style.eyeBtn} onClick={() => setShowPw((v) => !v)}>
            {showPw ? '👁' : '🙈'}
          </button>
        </div>
        <span className={style.helperText}>최소 10자 이상</span>
      </div>

      <div className={style.fieldWrapper}>
        <label className={style.fieldLabel}>
          비밀번호 확인 <span className={style.required}>*</span>
        </label>
        <div className={style.passwordWrapper}>
          <input
            type={showPwConfirm ? 'text' : 'password'}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="비밀번호 입력"
            className={style.input}
            required
          />
          <button type="button" className={style.eyeBtn} onClick={() => setShowPwConfirm((v) => !v)}>
            {showPwConfirm ? '👁' : '🙈'}
          </button>
        </div>
        {passwordConfirm && password !== passwordConfirm && (
          <span className={style.errorText}>비밀번호가 일치하지 않습니다</span>
        )}
      </div>

      {errorMsg && <p className={style.errorText}>{errorMsg}</p>}

      <div className={style.buttonRow}>
        <button
          type="button"
          className={style.backButton}
          onClick={() => { setStep(1); setErrorMsg(''); }}
        >
          이전
        </button>
        <button type="submit" className={style.submitButton} disabled={isLoading}>
          {isLoading ? '가입 중...' : '회원가입'}
        </button>
      </div>
    </form>
  );

  return (
    <AuthLayout title="회원가입">
      {step === 1 ? renderStep1() : renderStep2()}
      </AuthLayout>
  );
};

export default SignupPage;