import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #29292E;
    --shadow: #050206;
    --purple: #835AFD;
    --danger: #E73F5D;
    --red: #EA4335;

    --gray-100: #fefefe;
    --gray-200: #F4F0FF;
    --gray-dark: #737380;
    --gray-medium: #A8A8B3;
    --gray-light: #DBDCDD;

    --pink-dark: #E559F9;
    --pink-light: #D67EE2;

    --background: #F8F8F8;
    --white: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--background);
    color: var(--black);
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`