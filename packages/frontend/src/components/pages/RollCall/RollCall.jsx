/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { useState, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import StatutRow from './StudentRow';
import Legend from '../../../assets/RollCallLegend.PNG';
import getClassStudent from '../../../api/methods/class';
import { postAddAbsence } from '../../../api/methods/user';
import './RollCall.css';

const RollCallPage = () => {
  const user = useSelector((state) => state.user);
  const [classId] = useState(user.classId);
  const [student, setStudent] = useState([]);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const result = await getClassStudent(Cookies.get('accessToken'), classId);
      const stud = [];
      result.data.map((el) => {
        stud.push({ name: `${el.firstName} ${el.lastName}`,
          id: el._id,
          statut: 0 });
        return stud;
      });
      setStudent(stud);
    }
    fetchData();
  }, []);

  function SendAbsence(list) {
    const today = new Date();
    let date = `${today.getDate()} ${today.getMonth() + 1}`;
    date = date.concat(` ${today.getFullYear()}`);
    const hour = today.getHours();
    list.map((el) => {
      if (el.statut === 3) postAddAbsence(date, hour, 'absence', false, el.id);
      return true;
    });
    setRedirect(true);
  }

  function changeStatut(index, statut) {
    const newList = student;
    newList[index].statut = statut;
    setStudent(newList);
  }
  if (redirect) return (<Redirect to="/home" />);

  return (
    <div>
      <div className="PageTitle">
        {`Appel pour la ${user.classId}`}
      </div>
      <Grid container>
        <Grid container xs={11} className="container-rollcall">
          <Grid item xs={9}>
            <div className="card-list">
              {student.map((row, index) => (
                <StatutRow
                  key={row.name}
                  student={row.name}
                  statut={row.statut}
                  changeStatut={changeStatut}
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
              onClick={() => SendAbsence(student)}
            >
              Envoyer
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RollCallPage;
