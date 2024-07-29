import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
