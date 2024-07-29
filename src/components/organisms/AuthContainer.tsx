import React from 'react'
import styled from 'styled-components'
import { Button } from '@/components/atoms/Button'
import { useAuth } from '@/core/hooks/useAuth'

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

  if (user) {
    return (
      <Container>
        <WelcomeMessage>Bienvenido, {user.email}</WelcomeMessage>
        <Button onClick={signOut}>Cerrar Sesión</Button>
      </Container>
    )
  }

  return <Container>{children}</Container>
}
