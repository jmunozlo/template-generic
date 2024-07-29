import { AuthProvider, useFirebaseApp } from 'reactfire'

import { RouterProvider } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { router } from '@/core/routers/router'

const App = () => {
  const app = useFirebaseApp()
  const auth = getAuth(app)

  return (
    <AuthProvider sdk={auth}>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
