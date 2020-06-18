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
import PropTypes from 'prop-types';
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

function LoginLogoutDisplay(props) {
  const { isLogged, redirect, disconnect } = props;
  console.log(isLogged);
  if (!isLogged) {
    return <LoginRegister redirect={redirect} />;
  }
  return <Logout disconnect={disconnect} />;
}

function Logout(props) {
  const { disconnect } = props;
  const classes = useStyles();
  return (
    <Button
      className={[classes.menuButton, classes.buttonRegister].join(' ')}
      variant="contained"
      onClick={disconnect}
    >
      <Typography>Log out</Typography>
    </Button>
  );
}

function LoginRegister(props) {
  const { redirect } = props;
  const classes = useStyles();
  return (
    <div>
      <Button
        className={[classes.menuButton, classes.buttonLogin].join(' ')}
        variant="contained"
        onClick={redirect}
      >
        <Typography>Log in</Typography>
      </Button>
      <Button
        className={[classes.menuButton, classes.buttonRegister].join(' ')}
        variant="contained"
      >
        <Typography>Register</Typography>
      </Button>
    </div>
  );
}

export default function NavigationBar() {
  const classes = useStyles();
  const history = useHistory();
  const redirectToLogin = () => {
    history.push('/login');
  };
  const redirectToLandingPage = () => {
    history.push('/');
    sessionStorage.removeItem('token');
    window.location.reload();
  };
  let isLogged = true;
  if (!sessionStorage.getItem('token')) isLogged = false;

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Link href="/">
          <img src={logo} className={classes.logo} alt="Schola logo" />
        </Link>
        <Typography className={classes.title} variant="h5">
          Schola
        </Typography>
        <LoginLogoutDisplay
          isLogged={isLogged}
          redirect={redirectToLogin}
          disconnect={redirectToLandingPage}
        />
      </Toolbar>
    </AppBar>
  );
}

LoginRegister.propTypes = {
  redirect: PropTypes.func.isRequired,
};

Logout.propTypes = {
  disconnect: PropTypes.func.isRequired,
};

LoginLogoutDisplay.propTypes = {
  disconnect: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};
