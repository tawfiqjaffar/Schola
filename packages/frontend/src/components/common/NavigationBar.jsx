import React from 'react';
import {
  AppBar,
  Button,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {},
  homeButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(1),
  },
  logoContainer: {},
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.contrastText,
  },
  menuButton: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  buttonRegister: {
    backgroundColor: theme.palette.secondary.main,
  },
  buttonLogin: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

export default function NavigationBar() {
  const classes = useStyles();
  const history = useHistory();
  const redirectToLogin = () => {
    history.push('/login');
  };
  const redirectToLandingPage = () => {
    history.push('/');
    sessionStorage.removeItem('token');
  };

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Link href="/">
          <img src={logo} className={classes.logo} alt="Schola logo" />
        </Link>
        <Typography className={classes.title} variant="h5">
          Schola
        </Typography>
        {!sessionStorage.getItem('token') && (
          <Button
            className={[classes.menuButton, classes.buttonLogin].join(' ')}
            variant="contained"
            onClick={redirectToLogin}
          >
            <Typography>Log in</Typography>
          </Button>
        )}
        {!sessionStorage.getItem('token') && (
          <Button
            className={[classes.menuButton, classes.buttonRegister].join(' ')}
            variant="contained"
          >
            <Typography>Register</Typography>
          </Button>
        )}
        {sessionStorage.getItem('token') && (
          <Button
            className={[classes.menuButton, classes.buttonRegister].join(' ')}
            variant="contained"
            onClick={redirectToLandingPage}
          >
            <Typography>Log out</Typography>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
