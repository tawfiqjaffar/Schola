import React from 'react';
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

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <BlueBackground BRota="8" FRota="-10" Fcolor="#ffe352" Bcolor="#fff0a5">
        <img src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" width="160px" height="160px" alt="oui" />
      </BlueBackground>
      <BlueBackground BRota="6" FRota="-7" Bwidth="500" Fwidth="450" Fheight="280" Fcolor="#ffe352" Bcolor="#fff0a5" style={{ margin: '100px' }}>
        <img src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" width="160px" height="160px" alt="oui" />
        <p>Philippe ROUDAUT</p>
      </BlueBackground>
      <BlueBackground BRota="-10" FRota="-10" Fwidth="220" Fcolor="#b2ff12" Bcolor="#a1ff85" className="test">
        <img src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" width="140px" height="140px" alt="oui" />
      </BlueBackground>
      <BlueBackground>
        <img src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" width="140px" height="140px" alt="oui" />
      </BlueBackground>
    </Container>
  );
};

export default Home;
