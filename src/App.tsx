import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/Theme';


const Wrapper = styled.div`
  color: ${props => props.theme.colors.secondary};
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        Testing Styled Components

        <GlobalStyle />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
