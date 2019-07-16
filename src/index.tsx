import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import {
  Theme,
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Signature from './routes/Signature';
import Home from './routes/Home';

import * as serviceWorker from './serviceWorker';

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#c1d7f1',
      main: '#87a4d6',
      dark: '#264c7e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c8d3d9',
      main: '#95a6b1',
      dark: '#52646d',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
    },
  },
});

const AppWrapper = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Router>
            <Home path="/" />
            <Signature path="/signature" />
          </Router>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
