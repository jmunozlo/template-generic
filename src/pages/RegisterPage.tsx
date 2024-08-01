// src/pages/RegisterPage.tsx
import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/core/hooks/useAuth'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ImageContainer = styled.div`
  flex: 1;
  background-image: url('src/assets/gradient.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 30vh;

  @media (min-width: 768px) {
    flex: 3;
    min-height: 100vh;
  }
`

const RegisterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background-color: white;

  @media (min-width: 768px) {
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }
`

const Logo = styled.img`
  width: 120px;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    width: 150px;
    margin-bottom: 2rem;
  }
`

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`

const Button = styled.button`
  padding: 0.75rem;
  background-color: #9c27b0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #7b1fa2;
  }
`

const LoginLink = styled.a`
  text-align: center;
  color: #9c27b0;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const { signUpWithEmail } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    try {
      await signUpWithEmail(email, password, name)
      navigate('/dashboard')
    } catch (error) {
      console.error('Error registering user', error)
      setError('Error al registrar. Por favor, inténtalo de nuevo.')
    }
  }

  return (
    <PageContainer>
      <ImageContainer />
      <RegisterContainer>
        <Logo src="src/assets/logo.png" alt="Logo" />
        <Title>Crear Cuenta</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button type="submit">Registrarse</Button>
        </Form>
        <LoginLink href="/">¿Ya tienes una cuenta? Inicia sesión</LoginLink>
      </RegisterContainer>
    </PageContainer>
  )
}
