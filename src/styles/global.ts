import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #29292E;
    --secondary: #1B4332;

    --green: #2D6A4F;
    --red: #EA4335;

    --gray-100: #fefefe;
    --gray-200: #F4F0FF;
    --gray-300: #DBDCDD;
    --gray-400: #A8A8B3;
    --gray-500: #737380;

    --input-primary: #FFF;
    --input-secondary: #fefefe;

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
    background: ${props => props.theme.colors.background};
    color: var(--black);
    position: relative;
    height: 100%;
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