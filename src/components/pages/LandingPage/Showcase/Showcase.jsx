import React from 'react';
import Caroussel from 'react-material-ui-carousel';
import items from './items';
import ShowcaseItem from './ShowcaseItem';

const Showcase = () => (
  <Caroussel indicators={false} animation="fade">
    { items.map((el) => (
      <ShowcaseItem name={el.name} description={el.description} />
    ))}
  </Caroussel>
);

export default Showcase;
