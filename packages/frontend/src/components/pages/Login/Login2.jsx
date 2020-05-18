import React from 'react';
import { TextField } from '@material-ui/core';
import './LoginPage.css';

const Login = () => (
  <div className="container">
    <div className="top" />
    <div className="bottom" />
    <div className="center">
      <p className="bold">Bienvenue sur SCHOLA</p>
      <TextField
        id="standard-required"
        label="Username"
        variant="outlined"
        InputLabelProps={{
          style: { color: '#333' },
        }}
        className="username"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        InputLabelProps={{
          style: { color: '#333' },
        }}
        variant="outlined"
      />
    </div>
  </div>
);

export default Login;
