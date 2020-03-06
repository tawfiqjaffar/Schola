import {
  AppBar, Button, Link, makeStyles, Toolbar, Typography,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  homeButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
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

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Link
          href="/"
        >
          <HomeIcon fontSize="large" className={classes.homeButton} />
        </Link>
        <Typography
          className={classes.title}
          variant="h4"
        >
          Schola
        </Typography>
        <Button
          className={[classes.menuButton, classes.buttonLogin]}
          variant="contained"
        >
          <Typography>Log in</Typography>
        </Button>
        <Button
          className={[classes.menuButton, classes.buttonRegister]}
          variant="contained"
        >
          <Typography>Register</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
