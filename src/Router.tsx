import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { AboutPage } from './pages/About.page';
import { DashboardPage } from './pages/Dashboard.page';
import { GamesPage } from './pages/Games.page';
import { NothingFoundPage } from './pages/404.page';
import { LoginPage } from './pages/Login.page';
import { ViewGamePage } from './pages/ViewGame.page';
import { PlayGamePage } from './pages/PlayGame.page';

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
    path: '/games',
    element: <GamesPage />,
  },
  {
    path: '/game/view/*',
    element: <ViewGamePage />,
  },
  {
    path: '/game/play/*',
    element: <PlayGamePage />,
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