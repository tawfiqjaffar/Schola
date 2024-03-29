import React, { useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import SendCode from './SendCode';
import { postResetPasswordRequest } from '../../../api/methods/user';
import backgroundPageTurner from '../../../assets/backgroundPageTurner.svg';

const ForgotPassword = (props) => {
  const { mail } = props;
  const [Received, isReceived] = useState(false);
  const [open, isOpen] = useState(false);
  const [success, isSuccess] = useState(true);
  const [finished, isFinished] = useState(false);
  const [email, setEmail] = useState(mail);

  const onSubmit = async () => {
    const res = await postResetPasswordRequest(email);
    if (res.code === 200) {
      isSuccess(true);
      isOpen(true);
      isReceived(true);
    } else {
      isSuccess(false);
      isOpen(true);
    }
  };
  if (finished) return <Redirect to="/" />;
  if (Received) {
    return (
      <div>
        <img src={backgroundPageTurner} alt="background" className="bg-cover" />
        <SendCode
          isFinished={isFinished}
          isOpen={isOpen}
          open={open}
          isSuccess={isSuccess}
          success={success}
          isReceived={isReceived}
          email={email}
        />
      </div>
    );
  }
  return (
    <div>
      <img src={backgroundPageTurner} alt="background" className="bg-cover" />
      <ValidatorForm onSubmit={onSubmit} className="all_center">
        <TextValidator
          name="email"
          id="standard-required"
          label="Email"
          variant="outlined"
          InputLabelProps={{
            style: { color: '#333' },
          }}
          className="input-passw"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
          validators={['required', 'isEmail']}
          errorMessages={[
            'Veuillez remplir ce champ',
            "L'email rentré n'est pas valide.",
          ]}
        />
        <br />
        <Button
          variant="contained"
          className="margtop-20 btn-centered"
          type="submit"
        >
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
            className="alert-pos"
            onClose={() => {
              isOpen(false);
            }}
            severity={success ? 'success' : 'error'}
          >
            {success ? 'Code envoyé' : 'Compte inexistant'}
          </Alert>
        </Snackbar>
      </ValidatorForm>
    </div>
  );
};

ForgotPassword.propTypes = {
  mail: PropTypes.string.isRequired,
};

export default ForgotPassword;
