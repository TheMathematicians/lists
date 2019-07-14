import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.primary};
    min-height: 100vh
  }

  #root {
    min-height: 100%;
  }
`;

