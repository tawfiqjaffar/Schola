import React from 'react';
import clsx from 'clsx';
import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
      height: "240px",
  },
}));


const Home = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
      <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <Paper className={fixedHeightPaper}>
              
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>

              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={9}>
              <Paper className={fixedHeightPaper}>
           
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>

              </Paper>
            </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
