import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './components/layout/DefaultLayout.jsx';
import { HomePage } from './pages/home/HomePage.jsx';
import  LoginPage  from './pages/login/LoginPage.jsx';
import  RetrospectPage  from './pages/Retrospect/Retrospect.jsx';
import RetrospectDetail from './pages/Retrospect/RetrospectDetail.jsx';
import { ToastProvider } from './context/ToastContext.jsx';
import SignupPage from './pages/signup/SignupPage.jsx';

function App() {
  return (
    <ToastProvider>
          <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path = "/retrospect" element = {<RetrospectPage />}/>
          <Route path = "/retrospect/:id" element = {<RetrospectDetail />}/>
          <Route path = "/signup" element = {<SignupPage/>}/>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>

    </ToastProvider>

  );
}


export default App;
