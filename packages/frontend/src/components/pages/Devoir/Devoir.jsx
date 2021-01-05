import React from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import BlueBackground from '../../common/BlueBackground';


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
    height: '240px',
  },
  background: {
    background: 'white',
  },
}));

const Devoir = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <BlueBackground BRota="6" FRota="-7" Bwidth="500" Fwidth="450" Fheight="280" Fcolor="#ffe352" Bcolor="#fff0a5" style={{ margin: '100px' }}>
        <img src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" width="160px" height="160px" alt="oui" />
      </BlueBackground>
    </Container>
  );
};

export default Devoir;
