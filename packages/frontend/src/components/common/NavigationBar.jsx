import React from 'react';
import {
  AppBar,
  Button,
  Link,
  makeStyles,
  Toolbar,
  Typography,
  ListItemText,
  Menu,
  MenuItem,
  IconButton,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
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
  const { isLogged, redirection, disconnect } = props;
  console.log(isLogged);
  if (!isLogged) {
    return <LoginRegister redirection={redirection} />;
  }
  return <Logout disconnect={disconnect} redirection={redirection} />;
}

const StyledMenu = withStyles()((props) => (
  <Menu
    elevation={3}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#2a8081',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function Logout(props) {
  const { disconnect, redirection } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem
          onClick={() => {
            redirection('/home');
          }}
        >
          <ListItemText primary="Home" />
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            redirection('/schedule');
          }}
        >
          <ListItemText primary="Emploi du temps" />
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            redirection('/canteen');
          }}
        >
          <ListItemText primary="Cantine" />
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            redirection('/quizz');
          }}
        >
          <ListItemText primary="Quizz" />
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            redirection('/rollcall');
          }}
        >
          <ListItemText primary="RollCall" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => disconnect()}>
          <ListItemText primary="Disconnect" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

function LoginRegister(props) {
  const { redirection } = props;
  const classes = useStyles();
  return (
    <div>
      <Button
        className={[classes.menuButton, classes.buttonLogin].join(' ')}
        variant="contained"
        onClick={() => redirection('/login')}
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
  const redirectTo = (path) => {
    history.push(path);
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
          disconnect={redirectToLandingPage}
          redirection={redirectTo}
        />
      </Toolbar>
    </AppBar>
  );
}

LoginRegister.propTypes = {
  redirection: PropTypes.func.isRequired,
};

Logout.propTypes = {
  disconnect: PropTypes.func.isRequired,
  redirection: PropTypes.func.isRequired,
};

LoginLogoutDisplay.propTypes = {
  disconnect: PropTypes.func.isRequired,
  redirection: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};
