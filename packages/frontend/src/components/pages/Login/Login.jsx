import React from 'react';
import { TextField, Button } from '@material-ui/core';
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

  onSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();
    if (LoginRequest(email, password).code === 200) {
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
      <div className="container">
        <div className="top" />
        <div className="bottom" />
        <div className="center">
          <p className="bold">Bienvenue sur SCHOLA</p>
          <TextField
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
          />
          <TextField
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
          />
          <Button
            onClick={this.onSubmit}
            variant="contained"
            className="margtop-20"
          >
            Connexion
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
