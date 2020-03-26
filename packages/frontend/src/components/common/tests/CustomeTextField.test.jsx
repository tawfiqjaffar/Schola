import React from 'react';

import renderer from 'react-test-renderer';
import { ThemeProvider } from '@material-ui/core';
import CustomTextField from '../CustomTextField';
import theme from '../../../theme';

describe('CustomTextField', () => {
  it('should render CustomTextField and match snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <CustomTextField />
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
