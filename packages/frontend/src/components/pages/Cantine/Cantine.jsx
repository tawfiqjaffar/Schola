import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './Cantine.css';

const MealList = {
  lundi: {
    entree: '',
    plat: '',
    dessert: '',
  },
  mardi: {
    entree: '',
    plat: '',
    dessert: '',
  },
  mercredi: {
    entree: '',
    plat: '',
    dessert: '',
  },
  jeudi: {
    entree: '',
    plat: '',
    dessert: '',
  },
  vendredi: {
    entree: '',
    plat: '',
    dessert: '',
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Cantine = () => {
  const [spacing] = useState(3);
  const classes = useStyles();
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [starter, setStarter] = useState('');
  const [meal, setMeal] = useState('');
  const [dessert, setDessert] = useState('');
  const handleChangeStarter = (event) => {
    setStarter(event.target.value);
  };
  const handleChangeMeal = (event) => {
    setMeal(event.target.value);
  };
  const handleChangeDessert = (event) => {
    setDessert(event.target.value);
  };
  const handleChangeHour = (event) => {
    setHour(event.target.value);
  };
  const handleChangeDay = (event) => {
    setDay(event.target.value);
  };

  const Apply = () => {
    MealList.mercredi.plat = meal;
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}>
        <Grid container justify="center">
          <Grid item>
            <Paper className="hourCard">
              <p>Horaire de Cantine</p>
              <form className={classes.form} noValidate autoComplete="off">
                <FormControl>
                  <InputLabel>Heure d&apos;ouverture</InputLabel>
                  <NativeSelect value={hour} onChange={handleChangeHour}>
                    <option aria-label="None" value="" />
                    <option value={10}>11h</option>
                    <option value={20}>12h</option>
                    <option value={30}>13h</option>
                  </NativeSelect>
                </FormControl>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Grid container justify="center" spacing={spacing}>
          {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'].map((value) => (
            <Grid key={value} item>
              <Paper className="dayCard">
                <p>{value}</p>
                <p>{MealList.mercredi.plat}</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Paper elevation={3} className="paramCard">
            <form className={classes.form} noValidate autoComplete="off">
              <FormControl>
                <InputLabel>Jours</InputLabel>
                <NativeSelect value={day} onChange={handleChangeDay}>
                  <option aria-label="None" value="" />
                  <option value={40}>Lundi</option>
                  <option value={50}>Mardi</option>
                  <option value={60}>Mercredi</option>
                  <option value={70}>Jeudi</option>
                  <option value={80}>Vendre</option>
                </NativeSelect>
              </FormControl>
              <TextField
                id="filled-basic"
                label="Entrée"
                variant="filled"
                onChange={handleChangeStarter}
              />
              <TextField
                id="filled-basic"
                label="Plat"
                variant="filled"
                onChange={handleChangeMeal}
              />
              <TextField
                id="filled-basic"
                label="Dessert"
                variant="filled"
                onChange={handleChangeDessert}
              />
              <Button
                variant="outlined"
                startIcon={<CloudUploadIcon />}
                onClick={() => Apply()}
              >
                Appliquer
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cantine;
