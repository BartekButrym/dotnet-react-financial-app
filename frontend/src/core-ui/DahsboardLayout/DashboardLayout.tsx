import { Navigate, Outlet } from 'react-router';
import { useAuth } from '@hooks/useAuth';

export const DashboardLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
