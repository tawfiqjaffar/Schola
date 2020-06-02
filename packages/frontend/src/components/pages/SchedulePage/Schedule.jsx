import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Schedulecomp from './ScheduleComp';

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

const Schedule = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Schedulecomp />
        </Grid>
      </Paper>
    </Container>
  );
};

export default Schedule;
