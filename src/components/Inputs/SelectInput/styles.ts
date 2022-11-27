import styled from 'styled-components'

interface InputProps {
  tiny: boolean
  max?: number
  topDistance?: string
}

export const InputContainer = styled.div<InputProps>`
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  background: linear-gradient(270deg, #232c17 0%, rgba(35, 44, 23, 0) 100%);
  gap: 0.5rem;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: ${({ topDistance }) => `${topDistance}rem`};
  border-radius: 0.5rem;
  left: 3%;
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
  font-size: ${({ tiny }) => (tiny ? '1rem' : '1.5rem')};
`

export const SelectInput = styled.select<InputProps>`
  font-family: 'Grenze';
  color: white;
  background-color: transparent;
  padding: 0.2rem 0.8rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  font-size: ${({ tiny }) => (tiny ? '0.8rem' : '1rem')};
  cursor: pointer;

  &:focus {
    background-color: white;
    color: var(--green);
  }

  & > option {
    transition: none;
    font-size: ${({ tiny }) => (tiny ? '1rem' : '1.2rem')};
    font-family: 'Grenze';
  }
`
