import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  TextField,
  Button,
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Popover
} from '@material-ui/core';

import QuizzForm from './quizzForm.components';

import './App.css';

function App() {
  //initiate state with hooks react 16.8 check doc
  const [status, setStatus] = useState(false)
  const [error, setError] = useState(false)

  const [value1, setValue1] = React.useState("?");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [value2, setValue2] = React.useState("?");
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const [value3, setValue3] = React.useState("?");
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const [quizzNb, setQuizzNb] = React.useState(1);

  //call api submit
  const onSubmit = (e) => {
    setStatus(false)
    setError(false)
    if (quizzNb === quizz2.length)
      alert('Well done!');
    else {
      setError('Terminer le quizz')
      setTimeout(() => {
        setError(false)
      }, 2000);
    }
  }

  const handleChange = event => {
    setValue1(event.target.value);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange2 = event => {
    setValue2(event.target.value);
  };

  const handleClick2 = event => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleChange3 = event => {
    setValue3(event.target.value);
  };

  const handleClick3 = event => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const open1 = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);

  //config array for form
  const config = [
    {
      text1: " Le sanctuaire comporte 12  ",
      text2: " d'or tres puissants. ",
      state: value1,
      choix: value1,
      value: [{
        value: 'chevaliers',
        label: 'chevaliers'
      },
      {
        value: 'chevalyeah',
        label: 'chevalyeah'
      },
      {
        value: 'chevalier',
        label: 'chevalier'
      }
      ],
      anchorEl: anchorEl,
      handleClose: (e) => handleClose(e),
      handleClick: (e) => handleClick(e),
      handleChange: (e) => handleChange(e),
      open: open1,
      error: error,
      status: status,
    },
    {
      text1: " Il comporte aussi 12 ",
      text2: " toutes plus belles les unes que les autres.",
      state: value2,
      choix: value2,
      value: [{
        value: 'maizon',
        label: 'maizon'
      },
      {
        value: 'maison',
        label: 'maison'
      },
      {
        value: 'maisons',
        label: 'maisons'
      }
      ],
      anchorEl: anchorEl2,
      handleClose: (e) => handleClose2(e),
      handleClick: (e) => handleClick2(e),
      handleChange: (e) => handleChange2(e),
      open: open2,
      error: error,
      status: status,
    }
  ]

  const config2 = [
    {
      text1: "L'homme mange un ",
      text2: " delicieux.",
      state: value3,
      choix: value3,
      value: [{
        value: 'fruyt',
        label: 'fruyt'
      },
      {
        value: 'fruits',
        label: 'fruits'
      },
      {
        value: 'fruit',
        label: 'fruit'
      }
      ],
      anchorEl: anchorEl3,
      handleClose: (e) => handleClose3(e),
      handleClick: (e) => handleClick3(e),
      handleChange: (e) => handleChange3(e),
      open: open3,
      error: error,
      status: status,
    },

  ]

  const quizz2 = [
    {
      title: 'Question 1',
      index: 1,
      config: config
    },
    {
      title: 'Question 2',
      index: 2,
      config: config2
    }
  ]

  return (
    <Grid container spacing={3} className="quizz-container">
      <Grid item md={12} xs={12} className="App">
      <h1 style={{color: 'black'}}></h1>
      </Grid>
      {/* call form with config in props */}

      {
        quizz2.map(el => (
          quizzNb === el.index &&
          <div>
            <h1>{el.title}</h1>
            <QuizzForm
              config={el.config}
            />
          </div>
        ))}
      < Grid item md={12} className="quizz-submit">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => onSubmit(e)}
        >
          Soumettre</Button>
      </Grid>
      {
        quizzNb !== 1 &&
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => setQuizzNb(quizzNb - 1)}
        >
          Question precedante</Button>
      }
      {
        quizzNb < quizz2.length &&
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => setQuizzNb(quizzNb + 1)}
        >
          Question suivante</Button>
      }

      <Grid item md={12} xs={12}>
        {
          error &&
          <wrapper className="wrapper">
            <div className="error">
              <h1 className="msg-error">{error}</h1>
            </div>
          </wrapper>
        }
        {
          status &&
          <h1>
            bon
        </h1>
        }
      </Grid>
    </Grid >
  );
}

export default App;