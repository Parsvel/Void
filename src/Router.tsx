import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { AboutPage } from './pages/About.page';
import { DashboardPage } from './pages/Dashboard.page';
import { NothingFoundPage } from './pages/404.page';
import { LoginPage } from './pages/Login.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/home',
    element: <DashboardPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NothingFoundPage />,
  },
]);

export function Router() {
  return (
      <RouterProvider router={router} />
  )
}