import React from 'react';
import uuid from 'react-uuid';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@material-ui/core';
import { BookTwoTone } from '@material-ui/icons';
import theme from '../../../../../../theme';
import CardItem from '../CardItem';


describe('CardItem', () => {
  it('should render CardItem and match snapshot', () => {
    const data = [
      {
        icon: BookTwoTone,
        title: 'Test',
        description: 'test description',
      },
    ];
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        {data.map((el) => (
          <CardItem
            key={uuid()}
            icon={el.icon}
            title={el.title}
            description={el.description}
          />
        ))}
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
