import { createBrowserRouter } from 'react-router';
import { Home } from '@views/Home/Home';
import { SearchPage } from '@views/Search/Search';
import { Company } from '@views/Company/Company';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'company/:ticker', element: <Company /> },
    ],
  },
  { path: '*', element: <div>Not found</div> },
]);
