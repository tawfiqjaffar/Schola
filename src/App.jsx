import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import NavigationBar from './components/common/NavigationBar';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavigationBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
