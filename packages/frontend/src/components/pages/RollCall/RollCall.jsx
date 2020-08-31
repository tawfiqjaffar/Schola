import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import StatutRow from './StudentRow';
import './RollCall.css';

function createData(name, statut) {
  return { name, statut };
}

const student = [
  createData('Aurélien Cotentin', 0),
  createData('Bruno Beausir', 0),
  createData("Claude M'Barali", 3),
  createData('Didier Drogba', 0),
  createData('Elie Yaffa', 0),
  createData('Fabrice Ayékoué', 0),
  createData('Gandhi Djouna', 3),
  createData("Housni M'Kouboi", 2),
  createData('Inès loucif', 0),
  createData('Julien Marie', 0),
  createData('Ken Samaras', 3),
  createData('Laouni Mouhid', 0),
  createData('Mohamed Sylla', 1),
  createData('Nabil Andrieu', 0),
  createData('Okou Armand Olivier Gnakouri', 3),
  createData('Philippe Fragione', 0),
  createData('Quentin Dupieux', 0),
  createData('Régis Fayette-Mikano', 0),
  createData("Sérigne M'Baye", 3),
  createData('Tarik Andrieu', 0),
  createData('Ulrick eneme', 0),
  createData('Valentin Le Du', 0),
  createData('Wanani Gradi Mariadi', 3),
  createData('Xavi Simons', 0),
  createData('Youssef Soukouna', 0),
  createData('Zinédine Zidane', 0),
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
