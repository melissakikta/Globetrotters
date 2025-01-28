import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.tsx';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import EnglandPage from './pages/England';
import FrancePage from './pages/France';
import GermanyPage from './pages/Germany';  
import PolandPage from './pages/Poland';
import SpainPage from './pages/Spain';
import CurrencyExchangePage from './pages/Exchange';
import Bucketlist from './pages/BucketList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/England',
        element: <EnglandPage />,
      },
      {
        path: '/France',
        element: <FrancePage />,
      },
      {
        path: '/Germany',
        element: <GermanyPage />,
      },
      {
        path: '/Poland',
        element: <PolandPage />,
      },
      {
        path: '/Spain',
        element: <SpainPage />,
      },
      {
        path: '/Exchange',
        element: <CurrencyExchangePage />,
      },
      {
        path: '/Bucketlist',
        element: <Bucketlist />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}