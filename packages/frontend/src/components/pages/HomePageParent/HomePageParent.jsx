import React from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import BlueBackground from '../../common/BlueBackground';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  rectangle: {
    display: 'inline-block',
    position: 'relative',
    height: '200px',
    width: '200px',
    backgroundColor: 'yellow',
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

const HomePageParent = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <BlueBackground BRota="6" FRota="-7" Bwidth="500" Fwidth="450" Fheight="280" Fcolor="#70C6C7" Bcolor="#9ED2CD" style={{ margin: '100px', position: 'relative' }}>
        <div className={classes.rectangle}/>
      </BlueBackground>
      <BlueBackground>
        <img src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" width="140px" height="140px" alt="oui" />
      </BlueBackground>
    </Container>


  );
};

export default HomePageParent;
