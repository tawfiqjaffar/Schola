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
  },
  fixedHeight: {
    height: '240px',
  },
  background: {
    background: 'white',
  },
}));

const Home = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(
    classes.paper,
    classes.fixedHeight,
    classes.background
  );

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <BlueBackground backRota='-6' width="300" frontRota='10'>
              <Paper className={fixedHeightPaper}>Profil_img</Paper>
            </BlueBackground>
          </Grid>
          <Grid item xs={12} md={4} lg={6}>
            <Paper className={fixedHeightPaper}>Infos_etudiant</Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>graph_moyennes</Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={9}>
            <Paper className={fixedHeightPaper}>?</Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>notifications</Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
