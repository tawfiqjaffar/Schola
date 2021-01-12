import React, { Component } from 'react';
import { Button, Switch, Grid } from '@material-ui/core';
import Cookies from 'js-cookie';
import StatutRow from './StudentRow';
import Legend from '../../../assets/RollCallLegend.PNG';
import getClassStudent from '../../../api/methods/class';
import './RollCall.css';

function createData(name, statut) {
  return { name, statut };
}

class RollCallPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchCheck: false,
      student: [
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
      ],
    };
    this.changeStatut = this.changeStatut.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getData();
  }

  async getData() {
    const res = await getClassStudent(Cookies.get('accessToken'), '5faa1bccad70be34ddafebeb');
    console.log(res);
    this.setState({ student: res });
  }

  changeStatut(index, statut) {
    const { student } = this.state;
    const newList = student;
    newList[index].statut = statut;
    this.setState({ student: newList });
  }

  render() {
    const { switchCheck, student } = this.state;
    return (
      <div>
        <div className="PageTitle">Appel pour la 3eme B</div>
        {/* <Switch
          checked={switchCheck}
          // onChange={handleChange}
          name="Appel Basic"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        /> */}
        <Grid container>
          <Grid container xs={11} className="container-rollcall">
            <Grid item xs={9}>
              <div className="card-list">
                {student.map((row, index) => (
                  <StatutRow
                    key={row.name}
                    student={row.name}
                    statut={row.statut}
                    changeStatut={this.changeStatut}
                    index={index}
                  />
                ))}
              </div>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={2}>
              <div className="card-list imgSize">
                <img src={Legend} alt="Legende" />
              </div>
              <Button
                className="submitButton"
                onClick={() => console.log(student)}
              >
                Envoyer
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RollCallPage;
