import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './components/layout/DefaultLayout.jsx';
import { ProtectedRoute } from './components/route/ProtectedRoute.jsx';
import { HomePage } from './pages/home/HomePage.jsx';
import { LoginPage } from './pages/login/LoginPage.jsx';
import { NoticeDetailPage } from './pages/notice/NoticeDetailPage.jsx';
import { NoticePage } from './pages/notice/NoticePage.jsx';
import { PlaceholderPage } from './pages/placeholder/PlaceholderPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="notice" element={<NoticePage />} />
          <Route path="notice/:noticeId" element={<NoticeDetailPage />} />
          <Route
            path="volunteer"
            element={<PlaceholderPage title="봉사처" />}
          />
          <Route
            path="community"
            element={<PlaceholderPage title="커뮤니티" />}
          />
          <Route path="members" element={<PlaceholderPage title="구성원" />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path="mypage"
              element={<PlaceholderPage title="마이페이지" />}
            />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
