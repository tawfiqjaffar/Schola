import React from 'react';
import Spinner from 'react-loader-spinner';
import { Alert } from '@material-ui/lab';
import { Button, Snackbar } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Redirect } from 'react-router-dom';
import postLoginUser from '../../../api/methods/auth';
import './LoginPage.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      loading: false,
      open: false,
      success: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ loading: true });
    const res = await postLoginUser(email, password);
    if (res.code === 200) {
      this.setState({
        loading: false,
        success: true,
        open: true,
        redirect: true,
      });
      sessionStorage.setItem('token', res.data.accessToken);
    } else {
      this.setState({ loading: false, success: false, open: true });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { redirect, email, password, loading, open, success } = this.state;
    if (redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <ValidatorForm onSubmit={this.onSubmit}>
        <div className="container">
          <div className="top" />
          <div className="bottom" />
          <div className="center">
            {loading && <Spinner type="Puff" />}

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
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => {
              this.setState({ open: false });
            }}
          >
            <Alert
              onClose={() => {
                this.setState({ open: false });
              }}
              severity={success ? 'success' : 'error'}
            >
              {success ? 'Authentifié' : 'Mot de passe incorrect'}
            </Alert>
          </Snackbar>
        </div>
      </ValidatorForm>
    );
  }
}

export default Login;
