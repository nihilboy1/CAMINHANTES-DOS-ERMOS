import styled from 'styled-components'

interface Props {
  topDistance: string
  travelResult: string
}



export const ResultBox = styled.button<Props>`
  height: ${({ travelResult }) => (travelResult != '*' ? '6rem' : '')};
  padding: 0.5rem 3rem;
  position: absolute;
  background: #ffff;
  border-radius: 0.5rem;
  color: black;
  left: 3%;
  top: ${({ topDistance }) => `${topDistance}rem`};
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 5rem;

  span,
  p {
    font-size: 1.6rem;
    font-family: 'Grenze';
  }

  span {
    font-weight: bold;
  }
`
