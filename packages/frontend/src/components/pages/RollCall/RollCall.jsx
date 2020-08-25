import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import StatutRow from './StudentRow';
import './RollCall.css';

function createData(name, statut) {
  return { name, statut };
}

const student = [
  createData('A', 'présent'),
  createData('B', 'présent'),
  createData('C', 'absent'),
  createData('D', 'présent'),
  createData('E', 'présent'),
  createData('F', 'présent'),
  createData('G', 'absent'),
  createData('H', 'présent'),
  createData('I', 'présent'),
  createData('J', 'présent'),
  createData('K', 'absent'),
  createData('L', 'présent'),
  createData('M', 'présent'),
  createData('N', 'présent'),
  createData('O', 'absent'),
  createData('P', 'présent'),
  createData('Q', 'présent'),
  createData('R', 'présent'),
  createData('S', 'absent'),
  createData('T', 'présent'),
  createData('U', 'présent'),
  createData('V', 'présent'),
  createData('W', 'absent'),
  createData('X', 'présent'),
  createData('Y', 'présent'),
  createData('Z', 'présent'),
];

class RollCallPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchCheck: false,
    };
  }

  render() {
    const { switchCheck } = this.state;
    return (
      <div>
        <Switch
          checked={switchCheck}
          // onChange={handleChange}
          name="Appel Basic"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <div className="card-list">
          {student.map((row) => (
            <StatutRow student={row.name} statut={row.statut} />
          ))}
        </div>
      </div>
    );
  }
}

export default RollCallPage;
