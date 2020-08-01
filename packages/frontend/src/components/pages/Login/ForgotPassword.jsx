import React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';

const ForgotPassword = (props) => {
  const { onChange, email } = props;
  function onSubmit() {}
  return (
    <ValidatorForm onSubmit={onSubmit}>
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
    </ValidatorForm>
  );
};

ForgotPassword.propTypes = {
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ForgotPassword;
