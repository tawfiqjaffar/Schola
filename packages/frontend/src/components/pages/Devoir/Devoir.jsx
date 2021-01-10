import React from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import background from './ImgDevoir/backgroundFourni.jpg';
import cahier from './ImgDevoir/Cahier.png';
import titre from './ImgDevoir/Tittre.png';
import './ImgDevoir/mysass.sass';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backgroundImage: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: -1,
    position: 'fixed',
  },
  CahierImage: {
    width: '50%',
    height: '50%',
    left: '50%',
    top: '50%',
    zIndex: -1,
    position: 'fixed',
  },
  Centered: {
    display: 'flex',
    top: '25%',
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed'
  },
  Titre: {
    display: 'flex',
    top: '15%',
    left: '35%',
    width: '25%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed'
  },
  Form: {
    top: '40%',
    left: '20%',
    position: 'fixed',
    transform: 'rotate(-1deg)'
  },
  TextArea: {
    display: 'block',
    height: '120px',
    width: '100%'
  },
  Button: {
    marginTop: '5%',
    right: '0',
    position: 'absolute'
  }

}));

const handleSubmit = function (e) {
  e.preventDefault();
  console.log("test");
};

const Devoir = () => {
  const classes = useStyles();
  console.log(background);

  return (
    <Container className={classes.root}>
      <img className={classes.backgroundImage} src={background} />
      <div>
        <img className={classes.Titre} src={ titre}/>
        <img className={classes.Centered} src={cahier} />
      </div>
      <div className={classes.Form}>
        <form onSubmit={handleSubmit} className={classes.Form}>
          <div>
            <label>Date</label>
            <input type="date"></input> 
          </div>
          <div>
            <label>Matière</label>
            <input type="input"></input> 
          </div>
          <div>
            <label>Classe</label>
            <input type="input"></input> 
          </div>
          <div>
            <label>Devoir</label>
            <textarea className={classes.TextArea} type="name"></textarea> 
          </div>
          <button className={classes.Button} type="submit">Valider</button>
        </form>
      </div>
    </Container>

  );
};

export default Devoir;
