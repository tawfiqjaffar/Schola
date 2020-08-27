import React, { useState } from 'react';
import {
  Paper,
  FormControl,
  InputLabel,
  NativeSelect,
} from '@material-ui/core';

const Cantine = () => {
  const [hour, setHour] = useState(11);
  const handleChangeHour = (event) => {
    setHour(event.target.value);
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
        {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'].map((value) => (
          <Paper className="dayCard">
            <p>{value}</p>
          </Paper>
        ))}
      </div>
      <div>
        <Paper className="paramCard">Createur Menu</Paper>
      </div>
    </div>
  );
};

export default Cantine;
