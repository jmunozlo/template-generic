import { PrivateLayout } from '@/pages/layouts/private-layout'
import { LoginPage } from '@/pages/LoginPage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    children: [
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
