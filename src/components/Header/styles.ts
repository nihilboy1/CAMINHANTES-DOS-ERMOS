import styled from 'styled-components'

export const Header = styled.header`
  background-color: var(--green);
  padding: 0.8rem;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: -15px;
  min-width: 300px;

  border-bottom-right-radius: 4rem;
  border-bottom-left-radius: 4rem;
  transform: translate(-50%, 0%);
`
export const Title = styled.h1`
  background: linear-gradient(
    180deg,
    #ffffff 32.81%,
    rgba(255, 255, 255, 0) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 7px 4px 4px rgba(0, 0, 0, 0.25);

  font-family: 'Grenze';
  font-size: 3rem;

  @media (max-width: 720px) {
    & {
      font-size: 2.4rem;
    }
  }
`
export const Subtitle = styled.p`
  font-family: 'Supermercado One', cursive;
  color: white;
  text-decoration: underline;
  font-size: 1rem;



  
`
