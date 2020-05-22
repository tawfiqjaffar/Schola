import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';

import rootReducer from './rootReducer';
import Router from './components/common/Router';
import theme from './theme';

function App() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );

  if (localStorage.jwtToken) {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
