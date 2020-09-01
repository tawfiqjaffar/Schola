import React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';
import { Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { postResetPassword } from '../../../api/methods/user';

const SendCode = (props) => {
  const {
    onChange,
    isFinished,
    isOpen,
    open,
    isSuccess,
    success,
    isReceived,
    email,
    code,
    newPassword,
  } = props;
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

  return (
    <div>
      <ValidatorForm onSubmit={onSubmitNewPassword} className="all_center">
        <TextValidator
          name="code"
          id="standard-required"
          label="Code"
          variant="outlined"
          InputLabelProps={{
            style: { color: '#333' },
          }}
          className="input-passw"
          value={code}
          onChange={onChange}
        />
        <br />
        <TextValidator
          className="input-passw"
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
        <Button
          variant="contained"
          className="margtop-20 btn-centered"
          type="submit"
        >
          Terminer
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => {
            isOpen(false);
          }}
        >
          <Alert
            className="alert-pos"
            onClose={() => {
              isOpen(false);
            }}
            severity={success ? 'success' : 'error'}
          >
            {success ? 'Code reçu' : 'Code incorrect'}
          </Alert>
        </Snackbar>
      </ValidatorForm>
    </div>
  );
};

SendCode.propTypes = {
  onChange: PropTypes.func.isRequired,
  isFinished: PropTypes.func.isRequired,
  isOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  isSuccess: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  isReceived: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
};

export default SendCode;
