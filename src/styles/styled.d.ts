import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      background: string;
      title: string;
      text: string;
      secondary: string;
      answered: string;
      inputPrimary : string;
      inputSecondary : string;
    }
  }
}