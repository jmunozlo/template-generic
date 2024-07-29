import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAuth, useSigninCheck } from 'reactfire'

export const Header = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const { status, data: signInCheckResult } = useSigninCheck()

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    navigate('/dashboard')
  }

  const handleSignOut = async () => {
    await signOut(auth)
  }

  return (
    <>
      <div>Header</div>

      {status === 'loading' ? (
        <button disabled>Loading...</button>
      ) : signInCheckResult.signedIn ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In Google</button>
      )}
    </>
  )
}
