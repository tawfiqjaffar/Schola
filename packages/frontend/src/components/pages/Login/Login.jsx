import React from 'react';
import { Container, Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CustomTextFieldFilled from '../../common/CustomTextFieldFilled';

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
  passwordContainer: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
  submitButton: {
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    color: 'white',
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container alignItems="center" justify="center" spacing={1}>
          <Grid item xs={12} sm={6}>
            <CustomTextFieldFilled label="Enter your email address" />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.passwordContainer}
        >
          <Grid item xs={12} sm={6}>
            <CustomTextFieldFilled
              label="Enter your password"
              type="password"
            />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.passwordContainer}
        >
          <Grid item xs={12} sm={3} md={1}>
            <Button
              variant="contained"
              size="large"
              className={classes.submitButton}
              fullWidth
            >
              Go
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Login;
