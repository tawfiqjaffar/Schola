import React from 'react';

import renderer from 'react-test-renderer';
import ScheduleTest from './Calendar';

describe('CustomTextField', () => {
  it('should render CustomTextField and match snapshot', () => {
    const component = renderer.create(
      <ScheduleTest />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
