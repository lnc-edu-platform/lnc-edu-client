import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './components/layout/DefaultLayout.jsx';
import { ProtectedRoute } from './components/route/ProtectedRoute.jsx';
import { HomePage } from './pages/home/HomePage.jsx';
import LoginPage from './pages/login/LoginPage.jsx';
import { NoticeDetailPage } from './pages/notice/NoticeDetailPage.jsx';
import { NoticePage } from './pages/notice/NoticePage.jsx';
import { PlaceholderPage } from './pages/placeholder/PlaceholderPage.jsx';
import RetrospectPage from './pages/Retrospect/Retrospect.jsx';
import RetrospectDetail from './pages/Retrospect/RetrospectDetail.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { ToastProvider } from './context/ToastContext.jsx';
import SignupPage from './pages/signup/SignupPage.jsx';
import VenuePage from './pages/VenuePage/VenuePage.jsx';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route index element={<HomePage />} />
              <Route path="notice" element={<NoticePage />} />
              <Route path="notice/:noticeId" element={<NoticeDetailPage />} />
              <Route path="volunteer" element={<VenuePage />} />
              <Route
                path="community"
                element={<PlaceholderPage title="커뮤니티" />}
              />
              <Route
                path="members"
                element={<PlaceholderPage title="구성원" />}
              />
              <Route element={<ProtectedRoute />}>
                <Route
                  path="mypage"
                  element={<PlaceholderPage title="마이페이지" />}
                />
              </Route>
              <Route path="/retrospect" element={<RetrospectPage />} />
              <Route path="/retrospect/:id" element={<RetrospectDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
