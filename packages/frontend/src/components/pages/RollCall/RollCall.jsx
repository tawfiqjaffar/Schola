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
      ],
      class: '',
    };
    this.changeStatut = this.changeStatut.bind(this);
    this.getDataStudent = this.getDataStudent.bind(this);
    this.getDataClassName = this.getDataClassName.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.getDataStudent();
  }

  async getDataClassName() {

  }

  async getDataStudent() {
    const res = await getClassStudent(Cookies.get('accessToken'), '5faa1bccad70be34ddafebeb');
    let student = [];
    console.log(res);
    res.data.map((el) => {
      student.push({name: el.firstName + ' ' + el.lastName, statut: 0});
    })
    this.setState({ student: student });
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
