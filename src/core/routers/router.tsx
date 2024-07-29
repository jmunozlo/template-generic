import { PrivateLayout } from '@/pages/layouts/private-layout'
import { RootLayout } from '@/pages/layouts/root-layout'
import { LoginPage } from '@/pages/LoginPage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: 'about',
        element: <div>About</div>,
      },
      {
        path: 'dashboard',
        element: <PrivateLayout />,
      },
      {
        path: 'settings',
        element: <div>Settings</div>,
      },
    ],
  },
])
