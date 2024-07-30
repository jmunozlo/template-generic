import { useAuth } from 'reactfire'
import { Button } from './atoms/Button'

export const Header = () => {
  const auth = useAuth()
  return (
    <>
      <header>
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
      </header>
    </>
  )
}
