import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import clsx from 'clsx';
import BlueBackground from '../../common/BlueBackground';
import trombi from './avatar.png';
import Chart from '../../common/Chart';
import { getMyAbsence } from '../../../api/methods/user';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    textAlign: 'center',
  },
  paper: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
  },
  fixedHeight: {
    height: '240px',
  },
  paperphoto: {
    height: '270px',
    width: '200px',
  },
  paperinfos: {
    height: '270px',
    width: '220px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  papernotifs: {
    height: '310px',
    width: '420px',
  },
  papercalendar: {
    height: '300px',
    width: '600px',
  },
  papergrades: {
    height: '330px',
    width: '330px',
  },
  background: {
    background: 'white',
  },
}));

const Home = () => {
  const [nbNotif, setNbNotif] = useState(0);
  const [lastAbs, setLastAbs] = useState('');
  const classes = useStyles();

  const IdPhoto = clsx(classes.paperphoto, classes.background);

  const Personal = clsx(classes.paperinfos, classes.background);

  const Notifications = clsx(classes.papernotifs, classes.background);

  const Calendar = clsx(classes.papercalendar, classes.background);

  const Moyennes = clsx(classes.papergrades, classes.background);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    async function getAbsenceStudent() {
      // eslint-disable-next-line no-underscore-dangle
      const res = await getMyAbsence(Cookies.get('accessToken'), user._id);
      let msg = `le ${res.data[res.data.length - 1].date} à `;
      msg = msg.concat(`${res.data[res.data.length - 1].hour} heure.`);
      setNbNotif(res.data.length);
      setLastAbs(msg);
    }
    getAbsenceStudent();
  }, []);

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <BlueBackground Bheight="315" Bwidth="260" Fheight="315" Fwidth="260">
            <Paper className={IdPhoto}>
              <img alt="trombi" src={trombi} />
            </Paper>
          </BlueBackground>
          <BlueBackground Bheight="315" Bwidth="260" Fheight="315" Fwidth="260" style={{ marginLeft: '80px' }}>
            <Paper className={Personal}>
              <h3>Mes infos</h3>
              {`${user.firstName} ${user.lastName}`}
              <br />
              <br />
              {user.school ? user.school : 'École non renseignée'}
              <br />
              <br />
              {`${user.role} `}
              <br />
              <br />
              {user.email}
            </Paper>
          </BlueBackground>
          <BlueBackground Bheight="315" Bwidth="490" Fheight="315" Fwidth="490" style={{ marginLeft: '80px' }}>
            <Paper className={Notifications}>
              Notifications
              <p>
                Vous avez été absent
                {' '}
                {nbNotif}
                {' '}
                fois cette année.
              </p>
              <p>
                Votre dernière absence est
                {' '}
                {lastAbs}
              </p>
            </Paper>
          </BlueBackground>
          <BlueBackground Bheight="320" Bwidth="690" Fheight="320" Fwidth="680" style={{ marginTop: '60px' }}>
            <Paper className={Calendar}> Calendrier</Paper>
          </BlueBackground>
          <BlueBackground Bheight="350" Bwidth="400" Fheight="350" Fwidth="400" style={{ marginLeft: '100px', marginTop: '40px' }}>
            <Paper className={Moyennes}>
              <Chart />
            </Paper>
          </BlueBackground>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
