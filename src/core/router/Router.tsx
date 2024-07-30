import { PrivateLayout } from '@/pages/layouts/PrivateLayout'
import { RootLayout } from '@/pages/layouts/RootLayout'
import { LoginPage } from '@/pages/LoginPage'
import { createBrowserRouter } from 'react-router-dom'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: 'dashboard',
        element: <PrivateLayout />,
      },
    ],
  },
])
