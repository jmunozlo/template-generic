import { Header } from '@/components/molecules/Header'
import { Navigate, Outlet } from 'react-router-dom'
import { useSigninCheck } from 'reactfire'

export const PrivateLayout = () => {
  const { status, data: signInCheckResult } = useSigninCheck()
  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (signInCheckResult.signedIn) {
    return (
      <>
        <Header />
        <Outlet />
      </>
    )
  }

  return <Navigate to="/" />
}