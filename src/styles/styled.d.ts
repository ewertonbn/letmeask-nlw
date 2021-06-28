import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      black: string;
      shadow: string;
      purple: string;
      danger: string;
      red: string;
      gray100: string;
      gray200: string;
      grayDark: string;
      grayMedium: string;
      grayLight: string;
      pinkDark: string;
      pinkLight: string;
      background: string;
      white: string;
    }
  }
}