import { Outlet } from 'react-router-dom';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';
import { Layout, Main } from './DefaultLayout.styles.js';

export function DefaultLayout() {
  return (
    <Layout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Layout>
  );
}
