import { NavLink, useNavigate } from 'react-router-dom';
import logoImg from '../../assets/LOGO.png';
import {
  AuthButton,
  HeaderContent,
  HeaderFrame,
  Logo,
  LogoImage,
  Nav,
} from './Header.styles.js';

import { useAuth } from '../../context/AuthContext.jsx';

export function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <HeaderFrame>
      <HeaderContent>
        <Logo to="/" aria-label="홈으로 이동">
          <LogoImage src={logoImg} alt="" />
        </Logo>
        <Nav aria-label="Primary navigation">
          <NavLink to="/notice">공지사항</NavLink>
          <NavLink to="/volunteer">봉사처</NavLink>
          <NavLink to="/community">커뮤니티</NavLink>
          <NavLink to="/members">구성원</NavLink>
          <NavLink to="/mypage">마이페이지</NavLink>
          {isLoggedIn ? (
            <AuthButton as="button" type="button" onClick={handleLogout}>
              로그아웃
            </AuthButton>
          ) : (
            <AuthButton to="/login">로그인/회원가입</AuthButton>
          )}
        </Nav>
      </HeaderContent>
    </HeaderFrame>
  );
}
