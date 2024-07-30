import { useState } from 'react'
import styled from 'styled-components'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/core/hooks/useAuth'
import Swal from 'sweetalert2'





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
      Swal.fire({
        title: 'Error!',
        text: 'Error al iniciar sesión. Por favor, verifica tus credenciales.',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle()
      navigate('/dashboard')
    } catch (err) {
      await Swal.fire({
        title: 'Error!',
        text: 'Error al iniciar sesión con Google.',
        icon: 'error',
        confirmButtonText: 'Cool'
      })

    }
  }

  return (
    <Form>
      <Input
        type="email"
        label="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />
      <Input
        fullWidth
        type="password"
        label="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button onClick={() => handleEmailLogin(email, password)} type="submit">Iniciar Sesión</Button>

      <Button onClick={handleGoogleLogin}>
        Iniciar con Google
      </Button>
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
