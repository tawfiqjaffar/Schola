import React from 'react';
import {
  AppBar, Toolbar, Typography, makeStyles, Button, Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.contrastText,
    flexGrow: 1,
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
    <AppBar position="relative">
      <Toolbar>
        <Link
          className={classes.title}
          href="/"
        >
          <Typography
            variant="h4"
          >
            Schola
          </Typography>
        </Link>
        <Button
          disableElevation
          className={[classes.menuButton, classes.buttonLogin]}
          variant="contained"
        >
          <Typography>Log in</Typography>
        </Button>
        <Button
          disableElevation
          className={[classes.menuButton, classes.buttonRegister]}
          variant="contained"
        >
          <Typography>Register</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
