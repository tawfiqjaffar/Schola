import React from 'react';
import PropTypes from 'prop-types';

const BlueBackground = (props) => {
  const { width, height, backRota, frontRota, children } = props;
  const theme = {
    back: {
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: '#9ed1cc',
      transform: `rotate(${backRota}deg)`,
    },
    front: {
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: '#70c6c7',
      transform: `rotate(${frontRota}deg)`,
    },
  };

  return (
    <div style={theme.back}>
      <div style={theme.front}>
        {children}
      </div>
    </div>
  );
};

export default BlueBackground;

BlueBackground.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  backRota: PropTypes.string,
  frontRota: PropTypes.string,
};

BlueBackground.defaultProps = {
  width: '200',
  height: '280',
  backRota: '3',
  frontRota: '-10',
};
