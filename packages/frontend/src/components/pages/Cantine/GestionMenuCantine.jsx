import React, { useState } from 'react';
import {
  Paper,
  FormControl,
  InputLabel,
  NativeSelect,
} from '@material-ui/core';
import MenuCreator from './MenuCreator';

const Cantine = () => {
  const MealList = useState({
    day: [
      {
        day: 'lundi',
        entree: '',
        plat: '',
        dessert: '',
      },
      {
        day: 'mardi',
        entree: '',
        plat: '',
        dessert: '',
      },
      {
        day: 'mercredi',
        entree: '',
        plat: '',
        dessert: '',
      },
      {
        day: 'jeudi',
        entree: '',
        plat: '',
        dessert: '',
      },
      {
        day: 'vendredi',
        entree: '',
        plat: '',
        dessert: '',
      },
    ],
  });
  const [hour, setHour] = useState(11);
  const [day, setDay] = useState('Lundi');
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
    console.log('Mard = ' + MealList[0].day[day].day);
    MealList[0].day[day].entree = starter;
    MealList[0].day[day].meal = meal;
    MealList[0].day[day].dessert = dessert;
  };

  return (
    <div>
      <div className="PageTitle">Gestion du Menu</div>
      <div className="DayContainer">
        <Paper className="hourCard">
          <p className="CardTitle">Horaire de Cantine</p>
          <form className="hourForm" noValidate autoComplete="off">
            <FormControl>
              <InputLabel>Heure d&apos;ouverture</InputLabel>
              <NativeSelect value={hour} onChange={handleChangeHour}>
                <option aria-label="None" value="" />
                <option value={11}>11h</option>
                <option value={12}>12h</option>
                <option value={13}>13h</option>
              </NativeSelect>
            </FormControl>
          </form>
        </Paper>
        {MealList[0].day.map((value) => (
          <Paper key={value.day} className="dayCard">
            <p>{value.day}</p>
            <p>{value.entree}</p>
            <p>{value.meal}</p>
            <p>{value.dessert}</p>
          </Paper>
        ))}
      </div>
      <div>
        <Paper className="paramCard">
          <MenuCreator
            day={day}
            handleChangeDay={handleChangeDay}
            handleChangeStarter={handleChangeStarter}
            handleChangeMeal={handleChangeMeal}
            handleChangeDessert={handleChangeDessert}
            Apply={Apply}
          />
        </Paper>
      </div>
    </div>
  );
};

export default Cantine;
