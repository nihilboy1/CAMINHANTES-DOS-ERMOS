import styled from 'styled-components'

interface InputProps {
  limitValue: number
  value: number
}

interface InputContainerProps {
  topDistance?: string
}

export const InputContainer = styled.div<InputContainerProps>`
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  background: linear-gradient(270deg, #232c17 0%, rgba(35, 44, 23, 0) 100%);
  gap: 0.5rem;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: ${({ topDistance }) => `${topDistance}rem`};
  left: 3%;
  border-radius: 0.5rem;
  border: 1px solid transparent;


  &:hover {
    border: 1px solid white;
  }
`

export const LabelInput = styled.label<InputProps>`
  display: flex;
  justify-content: center;
  font-family: 'Grenze';
  color: white;
  font-size: 1.5rem;
`

export const TextInputComponent = styled.input<InputProps>`
  text-align: center;
  font-family: 'Grenze';
  color: white;
  background-color: transparent;
  padding: 0.2rem;
  width: 5rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  appearance: none;
  font-size: 1.2rem;

  ::placeholder {
    font-size: 1rem;
  }

  &:focus {
    background-color: white;
    color: #2a341c;
  }
`
