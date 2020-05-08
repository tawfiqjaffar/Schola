import React from 'react';

import renderer from 'react-test-renderer';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from '../NavigationBar';
import theme from '../../../theme';

describe('NavigationBar', () => {
  it('should render NavigationBar and match snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavigationBar />
        </BrowserRouter>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
