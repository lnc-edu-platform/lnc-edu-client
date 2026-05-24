import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/layout/DefaultLayout.jsx';
import { HomePage } from '../pages/home/HomePage.jsx';
import { LoginPage } from '../pages/login/LoginPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
