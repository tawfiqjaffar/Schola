import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
  Button,
} from '@material-ui/core';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const MenuCreator = (props) => {
  const {
    day,
    handleChangeDay,
    handleChangeStarter,
    handleChangeMeal,
    handleChangeDessert,
    Apply,
  } = props;

  return (
    <form className="hourForm" noValidate autoComplete="off">
      <FormControl>
        <InputLabel>Jours</InputLabel>
        <NativeSelect value={day} onChange={handleChangeDay}>
          <option aria-label="None" value="" />
          <option value="Lundi">Lundi</option>
          <option value="Mardi">Mardi</option>
          <option value="Mercredi">Mercredi</option>
          <option value="Jeudi">Jeudi</option>
          <option value="Vendredi">Vendredi</option>
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
  );
};

MenuCreator.propTypes = {
  day: PropTypes.string.isRequired,
  handleChangeDay: PropTypes.func.isRequired,
  handleChangeStarter: PropTypes.func.isRequired,
  handleChangeMeal: PropTypes.func.isRequired,
  handleChangeDessert: PropTypes.func.isRequired,
  Apply: PropTypes.func.isRequired,
};

export default MenuCreator;
