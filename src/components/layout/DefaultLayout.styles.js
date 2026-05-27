import styled from 'styled-components';

export const Layout = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  border-bottom: 1px solid var(--border);
  background: var(--surface);
`;

export const Main = styled.main`
  width: min(1120px, calc(100% - 100px));
  margin: 0 auto;
  flex: 1;
  padding: 56px 0;
`;

export const Footer = styled.footer`
  border-top: 1px solid var(--border);
  background: var(--surface);
`;
