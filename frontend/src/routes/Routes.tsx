import { createBrowserRouter } from 'react-router';
import { Home } from '../views/Home';
import { Dashboard } from '../views/Dashboard';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'dashboard', children: [{ path: '*', element: <Dashboard /> }] },
]);
