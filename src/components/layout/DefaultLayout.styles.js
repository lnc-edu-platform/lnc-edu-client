import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  border-bottom: 1px solid var(--border);
  background: var(--surface);
`;

export const HeaderContent = styled.div`
  width: min(1120px, calc(100% - 40px));
  height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Logo = styled(Link)`
  color: var(--text-h);
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: var(--text);
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    padding: 8px 10px;
    border-radius: 6px;
  }

  a.active,
  a:hover {
    color: var(--text-h);
    background: var(--muted);
  }
`;

export const Main = styled.main`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  flex: 1;
  padding: 56px 0;
`;

export const Footer = styled.footer`
  border-top: 1px solid var(--border);
  background: var(--surface);
`;

export const FooterContent = styled.div`
  width: min(1120px, calc(100% - 40px));
  min-height: 72px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--text-soft);
  font-size: 14px;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: var(--text-h);
  }
`;
