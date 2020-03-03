import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App component', () => {
  it('should render app and match snapshot', () => {
    const component = renderer.create(
      <App />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
