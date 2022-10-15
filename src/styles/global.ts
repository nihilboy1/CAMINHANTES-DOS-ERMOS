import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font: 400 16px sans-serif;
  transition: 0.4s;
  flex-direction: column;
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
  height: 100vh;
  padding: 1.5rem 0.5rem 0.15rem 0.5rem;
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

@media (max-width: 768px) {
  html {
    font-size: 60%;
  }
}
`
