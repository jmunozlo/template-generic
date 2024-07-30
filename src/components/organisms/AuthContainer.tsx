import { useState } from 'react'
import styled from 'styled-components'
import { LoginForm } from '@/components/molecules/LoginForm'
import { useAuth } from '@/core/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
display: flex;
flex: 1;
flex-direction: row;
background-color: white;


`


export const AuthContainer = () => {
  const [error, setError] = useState('')
  const { signInWithEmail, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleEmailLogin = async (email: string, password: string) => {
    try {
      await signInWithEmail(email, password)
      navigate('/dashboard')
    } catch (err) {
      setError('Error al iniciar sesión. Por favor, verifica tus credenciales.')
    }
  }

  return (
    <Container>
      <ImageContainer />
      <LoginForm />
    </Container>
  )

}


const ImageContainer = styled.div`
flex: 2;
background-image: url('src/assets/gradient.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
min-height: 100vh;

 
`
