import React from 'react';
// import { useSelector } from 'react-redux';
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
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../../assets/logo.png';
import './NavBar.css';
import navRoutes from './NavBarRoute';

const useStyles = makeStyles((theme) => ({
  root: {
  },
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
      backgroundColor: '#70c6c7',
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
      <IconButton onClick={handleClick} className="ButtonRight">
        <MenuIcon style={{ width: '50px', height: '50px' }} />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {navRoutes.map((el) =>
        // if (!el.access.includes(myRole)) {
        //   return (<div />);
        // }

          (
            <StyledMenuItem
              onClick={() => {
                redirection(el.route);
              }}
            >
              <ListItemText primary={el.label} />
            </StyledMenuItem>
          ))}
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
    <div className="ButtonRight">
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
  // const user = useSelector((state) => state.user);
  const history = useHistory();
  const redirectTo = (path) => {
    history.push(path);
  };
  const redirectToLandingPage = () => {
    history.push('/');
    Cookies.remove('accessToken');
    window.location.reload();
  };
  let isLogged = true;
  if (!Cookies.get('accessToken')) isLogged = false;

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className="Container100">
        <div className="wrapper">
          <Link href="/" className="CenterImg">
            <img src={logo} className={classes.logo} alt="Schola logo" />
          </Link>
          <Typography className="title" variant="h5">
            Schola
          </Typography>
        </div>
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
