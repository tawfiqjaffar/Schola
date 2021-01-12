import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Cookies from 'js-cookie';
import background from './ImgDevoir/backgroundFourni.jpg';
import cahier from './ImgDevoir/Cahier.png';
import titre from './ImgDevoir/Tittre.png';
import './ImgDevoir/mysass.sass';

/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */

const useStyles = makeStyles(() => ({
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

const Devoir = () => {
  const classes = useStyles();
  console.log(background);

  const [date, setDate] = useState('');
  const [matiere, setMatiere] = useState('');
  const [devoir, setDevoir] = useState('');
  const [subjectList, setSubjectList] = useState([]);
  const [teacherId, setTeacherId] = useState('');

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    console.log(accessToken);
    console.log(teacherId);

    axios({
      method: 'GET',
      url: 'http://localhost:8080/api/subject',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((response) => {
        const { data } = response.data;
        console.log(data);
        setSubjectList(data.data);
      });

    axios({
      method: 'GET',
      url: 'http://localhost:8080/api/user/me',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((response) => {
        const { data } = response.data;
        console.log(data);
        setTeacherId(data.data._id);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, matiere, devoir);
  };

  return (
    <Container className={classes.root}>
      <img className={classes.backgroundImage} alt="" src={background} />
      <div>
        <img className={classes.Titre} alt="" src={titre} />
        <img className={classes.Centered} alt="" src={cahier} />
      </div>
      <div className={classes.Form}>
        <form onSubmit={handleSubmit} className={classes.Form}>
          <div>
            <label>Date</label>
            <input type="date" value={date} onChange={(e) => { setDate(e.target.value); }} />
          </div>
          <div>
            <label>Matière</label>
            <select value={matiere} onChange={(e) => { setMatiere(e.target.value); }}>
              {subjectList.map((e) => <option key={e._id} value={e._id}>{e.subjectName}</option>)}
            </select>
          </div>
          <div>
            <label>Classe</label>
            <input type="input" />
          </div>
          <div>
            <label>Devoir</label>
            <textarea className={classes.TextArea} type="name" value={devoir} onChange={(e) => { setDevoir(e.target.value); }} />
          </div>
          <button className={classes.Button} type="submit">Valider</button>
        </form>
      </div>
    </Container>
  );
};

export default Devoir;
