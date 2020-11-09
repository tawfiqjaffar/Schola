import React from 'react';
import PropTypes from 'prop-types';

const BlueBackground = (props) => {
  const { Fwidth, Fheight, Bwidth, Bheight, BRota, FRota, Bcolor, Fcolor, children } = props;
  const resetRota = (Number(FRota) + Number(BRota)) * -1;
  const theme = {
    back: {
      width: `${Bwidth}px`,
      height: `${Bheight}px`,
      backgroundColor: `${Bcolor}`,
      transform: `rotate(${BRota}deg)`,
    },
    front: {
      width: `${Fwidth}px`,
      height: `${Fheight}px`,
      backgroundColor: `${Fcolor}`,
      transform: `translate(-50%, -50%) rotate(${FRota}deg)`,
      position: 'absolute',
      left: '50%',
      top: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    reset: {
      transform: `rotate(${resetRota}deg)`,
    }
  };
  return (
    <div style={theme.back}>
      <div style={theme.front}>
        <div style={theme.reset}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlueBackground;

BlueBackground.propTypes = {
  children: PropTypes.node.isRequired,
  Fwidth: PropTypes.string,
  Fheight: PropTypes.string,
  Bwidth: PropTypes.string,
  Bheight: PropTypes.string,
  BRota: PropTypes.string,
  FRota: PropTypes.string,
  Bcolor: PropTypes.string,
  Fcolor: PropTypes.string,
};

BlueBackground.defaultProps = {
  Bwidth: '200',
  Bheight: '280',
  Fwidth: '180',
  Fheight: '260',
  BRota: '3',
  FRota: '-10',
  Bcolor: '#9ed1cc',
  Fcolor: '#70c6c7',
};
