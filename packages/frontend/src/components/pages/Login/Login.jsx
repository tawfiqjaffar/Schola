import React from 'react';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Redirect } from 'react-router-dom';
import LoginRequest from '../../../api/methods/auth';
import './LoginPage.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const res = await LoginRequest(email, password);
    if (res.code === 200) {
      this.setState({ redirect: true });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { redirect, email, password } = this.state;
    if (redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <ValidatorForm onSubmit={this.onSubmit}>
        <div className="container">
          <div className="top" />
          <div className="bottom" />
          <div className="center">
            <p className="bold">Bienvenue sur SCHOLA</p>
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
              onChange={this.onChange}
              validators={['required', 'isEmail']}
              errorMessages={[
                'Veuillez remplir ce champ',
                "L'email rentré n'est pas valide.",
              ]}
            />
            <TextValidator
              id="outlined-password-input"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              InputLabelProps={{
                style: { color: '#333' },
              }}
              variant="outlined"
              value={password}
              onChange={this.onChange}
              validators={['required']}
              errorMessages={['Veuillez remplir ce champ']}
            />
            <br />
            <Button variant="contained" className="margtop-20" type="submit">
              Connexion
            </Button>
          </div>
        </div>
      </ValidatorForm>
    );
  }
}

export default Login;
