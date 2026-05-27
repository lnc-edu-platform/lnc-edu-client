import { Navigate, Outlet, useLocation } from 'react-router-dom';

const isLoggedIn = false;

export function ProtectedRoute() {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
