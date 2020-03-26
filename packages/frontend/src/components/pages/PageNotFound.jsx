import React from 'react';
import { Typography, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
  },
}));

function PageNotFound() {
  const { pathname } = window.location;
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="h1">Oh snap!</Typography>
        <Typography variant="h5">You must&apos;ve lost your way</Typography>
        <Typography>
          The page
          {pathname}
          {' '}
          does not exist
        </Typography>
      </Paper>
    </>
  );
}

export default PageNotFound;
