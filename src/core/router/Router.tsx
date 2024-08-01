import { AgendaPage } from '@/pages/AgendaPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { PrivateLayout } from '@/pages/layouts/PrivateLayout'
import { RootLayout } from '@/pages/layouts/RootLayout'
import { LoginPage } from '@/pages/LoginPage'
import { RegisterPage } from '@/pages/RegisterPage'
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
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/',
        element: <PrivateLayout />,
        children: [
          {
            path: 'dashboard',
            element: <DashboardPage />,
          },
          {
            path: 'agenda',
            element: <AgendaPage />,
          },
        ],
      },
    ],
  },
])
