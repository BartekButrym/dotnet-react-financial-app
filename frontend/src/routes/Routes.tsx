import { createBrowserRouter, Navigate } from 'react-router';
import { RootLayout } from '@core-ui/RootLayout/RootLayout';
import { DashboardLayout } from '@core-ui/DahsboardLayout/DashboardLayout';
import { Home } from '@views/Home/Home';
import { Login } from '@views/Auth/Login/Login';
import { Signup } from '@views/Auth/Signup/Signup';
import { SearchPage } from '@views/Search/Search';
import { Company } from '@views/Company/Company';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="search" /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'company/:ticker', element: <Company /> },
    ],
  },
  { path: '*', element: <div>Not found</div> },
]);
