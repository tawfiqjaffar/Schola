import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Router from './components/common/Router';
import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
