import { useState } from 'react'
import styled from 'styled-components'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/core/hooks/useAuth'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signInWithEmail, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleEmailLogin = async (email: string, password: string) => {
    try {
      await signInWithEmail(email, password)
      navigate('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle()
      navigate('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input
        style={{ width: ' 100%' }}
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
      <Button onClick={() => handleEmailLogin(email, password)} type="submit">
        Iniciar Sesión
      </Button>

      <Button onClick={handleGoogleLogin}>Iniciar con Google</Button>
    </Form>
  )
}

const Form = styled.form`
display: flex;
flex: 1;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 1rem; 

`
