import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContainer } from '@/components/organisms/AuthContainer'
import { LoginForm } from '@/components/molecules/LoginForm'
import { Button } from '@/components/atoms/Button'
import { useAuth } from '@/core/hooks/useAuth'

export const LoginPage: React.FC = () => {
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

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle()
      navigate('/dashboard')
    } catch (err) {
      setError('Error al iniciar sesión con Google.')
    }
  }

  return (
    <PageContainer>
      <ImageContainer />
      <AuthContainer>
        <h1>Iniciar Sesión</h1>
        <LoginForm onSubmit={handleEmailLogin} error={error} />
        <GoogleButton onClick={handleGoogleLogin}>
          Iniciar Sesión con Google
        </GoogleButton>
        </AuthContainer> 
      </PageContainer>
  )
}

const PageContainer = styled.div`
display: flex;
height: 100vh;
@media (min-width: 768px) {
    flex-direction: row;
  }
`

const ImageContainer = styled.div`
flex: 0;
background-image: url('src/assets/auth.svg');
background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 30vh;

  @media (min-width: 768px) {
    flex: 2;
    min-height: 100vh;
  }
`

const GoogleButton = styled(Button)`
background-color: #4285F4;
color: white;
margin-top: 1rem;
width: 100%;
`
