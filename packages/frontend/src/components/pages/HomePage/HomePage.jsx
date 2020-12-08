import React from 'react';
import { Container } from '@material-ui/core';
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
    width: '200px',
  },
  papernotifs: {
    height: '310px',
    width: '420px',
  },
  papercalendar: {
    height: '340px',
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
  const classes = useStyles();

  const IdPhoto = clsx(classes.paperphoto, classes.background);

  const Personal = clsx(classes.paperinfos, classes.background);

  const Notifications = clsx(classes.papernotifs, classes.background);

  const Calendar = clsx(classes.papercalendar, classes.background);

  const Moyennes = clsx(classes.papergrades, classes.background);

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <BlueBackground Bheight="350" Bwidth="260" Fheight="350" Fwidth="260">
            <Paper className={IdPhoto}>
              <img src={require('./avatar.png')} />
            </Paper>
          </BlueBackground>
          <BlueBackground Bheight="350" Bwidth="260" Fheight="350" Fwidth="260">
            <Paper className={Personal}>Infos_etudiant</Paper>
          </BlueBackground>
          <BlueBackground Bheight="350" Bwidth="490" Fheight="350" Fwidth="490">
            <Paper className={Notifications}>wsh les bougres</Paper>
          </BlueBackground>
          <BlueBackground Bheight="350" Bwidth="690" Fheight="350" Fwidth="680">
            <Paper className={Calendar}> Encore là les bourguignons ?</Paper>
          </BlueBackground>
          <BlueBackground Bheight="350" Bwidth="400" Fheight="350" Fwidth="400">
            <Paper className={Moyennes}>Va falloir y aller les nuggets</Paper>
          </BlueBackground>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
