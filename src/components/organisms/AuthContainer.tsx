import React from 'react'
import styled from 'styled-components'
import { Button } from '@/components/atoms/Button'
import { useAuth } from '@/core/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background-color: white;

  @media (min-width: 768px) {
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    flex: 1;
  }
`

const WelcomeMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

interface AuthContainerProps {
  children: React.ReactNode
}

export const AuthContainer: React.FC<AuthContainerProps> = ({ children }) => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const out = () => {
    signOut()
    navigate('/')
  }
  if (user) {
    return (
      <Container>
        <WelcomeMessage>Bienvenido, {user.displayName }</WelcomeMessage>
        <Button onClick={out}>Cerrar Sesión</Button>
      </Container>
    )
  }

  return <Container>{children}</Container>
}
