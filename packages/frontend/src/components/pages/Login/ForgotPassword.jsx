import React, { useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {
  postResetPasswordRequest,
  postResetPassword,
} from '../../../api/methods/user';

const ForgotPassword = (props) => {
  const { onChange, email, code, newPassword } = props;
  const [Received, isReceived] = useState(false);
  const [open, isOpen] = useState(false);
  const [success, isSuccess] = useState(true);
  const [finished, isFinished] = useState(false);

  async function onSubmit() {
    const res = await postResetPasswordRequest(email);
    if (res.code === 200) {
      isSuccess(true);
      isOpen(true);
      isReceived(true);
    } else {
      isSuccess(false);
      isOpen(true);
    }
  }
  async function onSubmitNewPassword() {
    const res = await postResetPassword(email, newPassword, code);
    if (res.code === 200) {
      isSuccess(true);
      isOpen(true);
      isReceived(true);
      isFinished(true);
    } else {
      isSuccess(false);
      isOpen(true);
    }
  }
  if (finished) return <Redirect to="/" />;
  if (Received) {
    return (
      <ValidatorForm onSubmit={onSubmitNewPassword} className="all_center">
        <TextValidator
          name="code"
          id="standard-required"
          label="Code"
          variant="outlined"
          InputLabelProps={{
            style: { color: '#333' },
          }}
          className="padbot-20"
          value={code}
          onChange={onChange}
        />
        <br />
        <TextValidator
          id="outlined-password-input"
          label="Nouveau mot de passe"
          type="password"
          name="newPassword"
          autoComplete="current-password"
          InputLabelProps={{
            style: { color: '#333' },
          }}
          variant="outlined"
          value={newPassword}
          onChange={onChange}
          validators={['required']}
          errorMessages={['Veuillez remplir ce champ']}
        />
        <br />
        <Button variant="contained" className="margtop-20" type="submit">
          Terminez
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => {
            isOpen(false);
          }}
        >
          <Alert
            onClose={() => {
              isOpen(false);
            }}
            severity={success ? 'success' : 'error'}
          >
            {success ? 'Code reçu' : 'Code incorrect'}
          </Alert>
        </Snackbar>
      </ValidatorForm>
    );
  }
  return (
    <ValidatorForm onSubmit={onSubmit} className="all_center">
      <TextValidator
        name="email"
        id="standard-required"
        label="Email"
        variant="outlined"
        InputLabelProps={{
          style: { color: '#333' },
        }}
        className="padbot-20"
        value={email}
        onChange={onChange}
        validators={['required', 'isEmail']}
        errorMessages={[
          'Veuillez remplir ce champ',
          "L'email rentré n'est pas valide.",
        ]}
      />
      <br />
      <Button variant="contained" className="margtop-20" type="submit">
        Recevoir code
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          isOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            isOpen(false);
          }}
          severity={success ? 'success' : 'error'}
        >
          {success ? 'Code envoyé' : 'Compte inexistant'}
        </Alert>
      </Snackbar>
    </ValidatorForm>
  );
};

ForgotPassword.propTypes = {
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
};

export default ForgotPassword;
