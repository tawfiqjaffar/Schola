import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import NavigationBar from './components/common/NavigationBar';
import Router from './components/common/Router';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
