import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import NavigationBar from './components/common/NavigationBar';
import Router from './components/common/Router';
import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
