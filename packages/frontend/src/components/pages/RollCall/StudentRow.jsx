import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './RollCall.css';

function changeStat(color, setColor, changeStatut, index) {
  if (color === '#77dd77') {
    setColor('#FDFD98');
    changeStatut(index, 1);
  }
  if (color === '#FDFD98') {
    setColor('#FF9E0F');
    changeStatut(index, 2);
  }
  if (color === '#FF9E0F') {
    setColor('#FE6B64');
    changeStatut(index, 3);
  }
  if (color === '#FE6B64') {
    setColor('#77dd77');
    changeStatut(index, 0);
  }
}

const StatutRow = (props) => {
  const { student, statut, changeStatut, index } = props;
  const colorlist = ['#77dd77', '#FDFD98', '#FF9E0F', '#FE6B64'];
  const [color, setColor] = useState(colorlist[statut]);
  // const { name } = student;
  return (
    <div
      className="card"
      style={{ backgroundColor: color }}
      onClick={() => {
        changeStat(color, setColor, changeStatut, index);
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
  statut: PropTypes.number.isRequired,
  changeStatut: PropTypes.func.isRequired,
};

export default StatutRow;
