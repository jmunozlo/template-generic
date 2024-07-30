import styled from 'styled-components'
import { LoginForm } from '@/components/molecules/LoginForm'

export const AuthContainer = () => {
  return (
    <Container>
      <ImageContainer />
      <LoginForm />
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex: 1;
flex-direction: row;
background-color: white;
`
const ImageContainer = styled.div`
flex: 2;
background-image: url('src/assets/gradient.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
min-height: 100vh; 
`
