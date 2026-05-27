import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderFrame = styled.header`
  border-bottom: 1px solid var(--border);
  background: var(--surface);
`;

export const HeaderContent = styled.div`
  width: 100%;
  padding: 24px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

export const LogoImage = styled.img`
  width: 44px;
  height: auto;
  display: block;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;

  a {
    color: var(--text-h);
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
  }

  a.active,
  a:hover {
    color: var(--primary);
  }

  @media (max-width: 900px) {
    gap: 16px;
    overflow-x: auto;
  }
`;

export const AuthButton = styled(NavLink)`
  min-width: 98px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border: 1px solid transparent;
  border-radius: 3px;
  color: #fff !important;
  background: var(--primary);
  font: inherit;
  font-size: 13px !important;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: var(--primary-hover);
  }
`;
