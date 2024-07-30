import { AuthProvider, useFirebaseApp } from 'reactfire'

import { RouterProvider } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { Router } from '@/core/router/Router'

const App = () => {
  const app = useFirebaseApp()
  const auth = getAuth(app)

  return (
    <AuthProvider sdk={auth}>
      <RouterProvider router={Router} />
    </AuthProvider>
  )
}

export default App
