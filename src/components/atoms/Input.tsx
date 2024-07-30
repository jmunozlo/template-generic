import { forwardRef, type InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

const InputWrapper = styled.div<{
  fullWidth?: boolean
}>`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    `
const StyledLabel = styled.label`
margin-bottom: 0.5rem;
font-weight: bold;
`

const StyledInput = styled.input<{ hasError?: boolean }>`
padding: 0.5rem;
border: 1px solid ${(props) => (props.hasError ? 'red' : '#ccc')};
border-radius: 0.25rem;
font-size: 1rem;

&:focus {
    outline: none;
    border-color:${(props) => (props.hasError ? 'red' : '#007bff')}; 
    box-shadow: 0 0 0 0.125rem ${(props) => (props.hasError ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 123, 255, 0.25)')};
  }
`

const ErrorMessage = styled.div`
color: red;
font-size: 0.875rem;
margin-top: 0.25rem;
`

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth, ...props }, ref) => {
    return (
      <InputWrapper fullWidth={fullWidth}>
        {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
        <StyledInput ref={ref} hasError={!!error} {...props} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    )
  }
)

Input.displayName = 'Input'
