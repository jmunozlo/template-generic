import { useAuth } from 'reactfire'
/* import { Button } from '@/components/atoms/Button' */
import styled from 'styled-components'

export const Header = () => {
  const auth = useAuth()
  console.log('auth', auth)
  return (
    <ContainerNavbar>
      <Logo />
      <Navbar>
        <Ul>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/agenda">Agenda</a>
          </li>
        </Ul>
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
      </Navbar>
    </ContainerNavbar>
  )
}

const ContainerNavbar = styled.div`
display: flex;
justify-content: center;
background-color:#5377fa;
padding: 0.5rem;
height: 3rem;
`

const Navbar = styled.div`
display: flex;
justify-content: space-between; 
align-items: center;
height:100%;
width:100%;
list-style: none;
`

const Button = styled.button`
  display: flex;
  justify-content:flex-end;
  background-color:transparent;
  border:none;
  cursor:pointer;
  color:white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  &:hover {
    background-color: #6e8cf8;
  }
`

const Logo = styled.div`
display: flex;
align-items: center;
background-image: url('src/assets/schedule.svg');
height: 2rem;
width: 2rem;
`

const Ul = styled.ul`
  display: flex;
  list-style: none;
  & li {
    color: white;
  }
  & li a {
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    height: 3rem;
    border-radius: 4px;
  }
  & li a:hover {
    background-color: #6e8cf8;
  }
`
