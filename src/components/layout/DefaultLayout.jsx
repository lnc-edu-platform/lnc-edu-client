import { Link, NavLink, Outlet } from 'react-router-dom';
import {
  Footer,
  FooterContent,
  Header,
  HeaderContent,
  Layout,
  Logo,
  Main,
  Nav,
} from './DefaultLayout.styles.js';

export function DefaultLayout() {
  return (
    <Layout>
      <Header>
        <HeaderContent>
          <Logo to="/">Edu Platform</Logo>
          <Nav aria-label="Primary navigation">
            <NavLink to="/">홈</NavLink>
            <NavLink to="/login">로그인</NavLink>
          </Nav>
        </HeaderContent>
      </Header>

      <Main>
        <Outlet />
      </Main>

      <Footer>
        <FooterContent>
          <span>Edu Platform</span>
          <Link to="/login">로그인</Link>
        </FooterContent>
      </Footer>
    </Layout>
  );
}
