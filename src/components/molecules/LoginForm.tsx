import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void
  error?: string
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ErrorMessage = styled.p`
  color: red;
  margin-top: 1rem;
`

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(email, password)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        label="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        label="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Iniciar Sesión</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  )
}
