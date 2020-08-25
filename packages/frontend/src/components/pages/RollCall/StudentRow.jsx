import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './RollCall.css';

function changeStatut(color, setColor) {
  console.log('COLOR CHECK');
  if (color === '#77dd77') setColor('#FDFD98');
  if (color === '#FDFD98') setColor('#FF9E0F');
  if (color === '#FF9E0F') setColor('#FE6B64');
  if (color === '#FE6B64') setColor('#77dd77');
}

const StatutRow = (props) => {
  const { student, statut } = props;
  const [color, setColor] = useState('#77dd77');
  // const { name } = student;
  return (
    <div
      className="card"
      style={{ backgroundColor: color }}
      onClick={() => {
        console.log(color);
        changeStatut(color, setColor);
      }}
    >
      <div className="card_title title-white">
        <p>{student}</p>
      </div>
    </div>
  );
};

StatutRow.propTypes = {
  student: PropTypes.string.isRequired,
  statut: PropTypes.string.isRequired,
};

export default StatutRow;
