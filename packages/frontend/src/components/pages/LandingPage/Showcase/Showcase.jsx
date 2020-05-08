import React from 'react';
import Caroussel from 'react-material-ui-carousel';
import ShowcaseItem from './ShowcaseItem';
import iosMockup from
  '../../../../assets/scholaios_iphonexspacegrey_portrait.png';
import iosLandMockup from
  '../../../../assets/scholaios_iphonexspacegrey_landscape.png';
import macbookMockup from '../../../../assets/macbook.png';

const items = [
  iosMockup,
  iosLandMockup,
  macbookMockup,
];

const Showcase = () => (
  <Caroussel indicators={false} animation="fade">
    { items.map((el) => (
      <ShowcaseItem asset={el} />
    ))}
  </Caroussel>
);

export default Showcase;