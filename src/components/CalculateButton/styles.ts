import styled from 'styled-components'

interface CalculateButtonProps {
  topDistance: string
}

export const CalculateButton = styled.button<CalculateButtonProps>`
  padding: 1rem;
  position: absolute;
  background: #ffff;
  border-radius: 0.5rem;
  font-family: 'Grenze';
  color: black;
  font-weight: bold;
  left: 3%;
  font-size: 2rem;
  opacity: 0.5;
  top: ${({ topDistance }) => `${topDistance}rem`};
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    opacity: 1;
    border-radius: 0.8rem;
  }
`
