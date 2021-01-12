import React from 'react';
import clsx from 'clsx';
import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import BlueBackground from '../../common/BlueBackground';

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
    background: 'white'
  },
  fixedHeight: {
    height: '240px',
  },
  paperphoto: {
    height: '270px',
    width: '200px'
  },
  paperinfos: {
    height: '270px',
    width: '200px'
  },
  papernotifs: {
    height: '310px',
    width: '420px'
  },
  papercalendar: {
    height: '340px',
    width: '600px'
  },
  papergrades: {
    height: '330px',
    width: '330px'
  },
  background: {
    background: 'white',
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const IdPhoto = clsx(
    classes.paperphoto,
    classes.background
  );

  const Personal = clsx(
    classes.paperinfos,
    classes.background
  );

  const Notifications = clsx(
    classes.papernotifs,
    classes.background
  );

  const Calendar = clsx(
    classes.papercalendar,
    classes.background
  );

  const Moyennes = clsx(
    classes.papergrades,
    classes.background
  );

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>

          <BlueBackground Bheight="315" Bwidth="260" Fheight="315" Fwidth="260">
            <Paper className={IdPhoto}>
              <h3>Mes infos</h3>
              <h4>Nom prénom</h4>
              <h4>Classe:</h4>
              <h4>Nombre d'élèves:</h4>
              <h4>Élève responsable de la classe:</h4>
            </Paper>
          </BlueBackground>

          <BlueBackground Bheight="315" Bwidth="260" Fheight="315" Fwidth="260" style={{ marginLeft: '80px' }}>
            <Paper className={Personal}>
              <h3>Bloc-note</h3>
            </Paper>
          </BlueBackground>

          <BlueBackground Bheight="315" Bwidth="490" Fheight="315" Fwidth="490" style={{ marginLeft: '80px' }}>
            <Paper className={Notifications}>
              <h3>Messagerie</h3>
            </Paper>
          </BlueBackground>

          <BlueBackground Bheight="340" Bwidth="690" Fheight="340" Fwidth="680" style={{ marginTop: '60px' }}>
            <Paper className={Calendar}>
              <h3>Création évenments</h3>
            </Paper>
          </BlueBackground>

          <BlueBackground Bheight="350" Bwidth="400" Fheight="350" Fwidth="400" style={{ marginLeft: '100px', marginTop: '40px' }}>
            <Paper className={Moyennes}>
              <h3>Création exercices</h3>
            </Paper>
          </BlueBackground>

        </Grid>
      </Paper>
    </Container>
  );
};
export default Dashboard;
