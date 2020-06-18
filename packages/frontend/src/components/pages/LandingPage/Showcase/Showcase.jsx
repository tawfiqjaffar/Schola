import React from 'react';
import Caroussel from 'react-material-ui-carousel';
import ShowcaseItem from './ShowcaseItem';
import iosMockup from '../../../../assets/scholaios_iphonexspacegrey_portrait.png';
import iosLandMockup from '../../../../assets/scholaios_iphonexspacegrey_landscape.png';
import macbookMockup from '../../../../assets/macbook.png';

const items = [
  { image: iosMockup, label: 'iosMockup' },
  { image: iosLandMockup, label: 'iosLandMockup' },
  { image: macbookMockup, label: 'macbookMockup' },
];

const Showcase = () => (
  <Caroussel indicators={false} animation="fade" autoPlay={false}>
    {items.map((el) => (
      <ShowcaseItem key={el.label} asset={el.image} />
    ))}
  </Caroussel>
);

export default Showcase;
