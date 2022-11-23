import styled from 'styled-components'

interface ResultBoxProps {
  topDistance: string
}

export const ResultBox = styled.button<ResultBoxProps>`
  padding: 1.2rem;
  position: absolute;
  background: #ffff;
  border-radius: 0.5rem;
  font-family: 'Grenze';
  color: black;
  font-weight: bold;
  left: 15%;
  font-size: 2rem;
  top: ${({ topDistance }) => `${topDistance}rem`};
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  align-items: center;
`
