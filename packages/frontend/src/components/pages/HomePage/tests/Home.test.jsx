import React from 'react';

import renderer from 'react-test-renderer';

import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Home from '../HomePage';
import theme from '../../../../theme';

describe('Home', () => {
  it('should render Home Page', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
