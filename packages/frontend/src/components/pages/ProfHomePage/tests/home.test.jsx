import React from 'react';

import renderer from 'react-test-renderer';

import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../Dashboard';
import theme from '../../../../theme';

describe('Dashboard', () => {
  it('should render Profesor Dashboard', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});