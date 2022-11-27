import styled from 'styled-components'

interface Props {
  topDistance: string
}

export const AppliedOptions = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 20rem;
  right: 16rem;
  padding: 1rem;
  position: absolute;
  background: #ffff;
  border-radius: 0.5rem;
  color: black;
  top: ${({ topDistance }) => `${topDistance}rem`};

`

export const ResultBox = styled.button<Props>`
  height: 60px;
  padding: 3rem;
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
  align-items: center;
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
