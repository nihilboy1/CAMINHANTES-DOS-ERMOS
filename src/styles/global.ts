import { createGlobalStyle } from 'styled-components'
import pageBackground from '../assets/background.png'


export const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  outline: none;
  box-sizing: border-box;
  font: 400 16px sans-serif;
  transition: 0.4s;
  flex-direction: column;
  border: none;
}

:root {
  --white: #ffffff;
  --black: #0e150e;
  --green: #2A341C
}

body,
html {
  background-color: var(--green) ;
  transition: none;
  border: none;
}

#root{
  transition: none;
  width: 100vw;
  min-height: 100vh;
  padding: 1.5rem 0.5rem 0.15rem 0.5rem;
  background-image: url(${pageBackground});
  background-position: center;

}



button {
  cursor: pointer;
  background-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 1380px) {
  html {
    font-size: 90%;
  }
}

@media (max-width: 1080px) {
  html {
    font-size: 80%;
  }
}
`
