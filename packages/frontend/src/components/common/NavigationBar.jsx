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

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Link href="/">
          <img src={logo} className={classes.logo} alt="Schola logo" />
        </Link>
        <Typography className={classes.title} variant="h5">
          Schola
        </Typography>
        <Button
          className={[classes.menuButton, classes.buttonLogin].join(' ')}
          variant="contained"
          onClick={redirectToLogin}
        >
          <Typography>Log in</Typography>
        </Button>
        <Button
          className={[classes.menuButton, classes.buttonRegister].join(' ')}
          variant="contained"
        >
          <Typography>Register</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
