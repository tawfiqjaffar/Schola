import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import Spinner from 'react-loader-spinner';
import { Alert } from '@material-ui/lab';
import { Button, Snackbar } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import postLoginUser from '../../../api/methods/auth';
import { getMe } from '../../../api/methods/user';
import ForgotPassword from './ForgotPassword';
import { logIn, setUser } from '../../../redux/actions/UserActions';
import './LoginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [forgetPassword, setforgetPassword] = useState(false);
  const dispatch = useDispatch();

  const getMeReq = async () => {
    const res = await getMe(Cookies.get('accessToken'));
    if (res.data !== null) {
      dispatch(logIn());
      dispatch(setUser(res.data));
      window.location.href = '/home';
    }
  };

  const loginReq = async () => {
    setLoading(true);
    const res = await postLoginUser(email, password);
    if (res.data !== null) {
      setLoading(false);
      setSuccess(true);
      setOpen(true);
      Cookies.set('accessToken', res.data.accessToken, {
        sameSite: 'strict',
      });
      await getMeReq();
    }
  };

  useEffect(() => {
    const getMyInfo = async () => {
      await getMeReq();
    };
    if (Cookies.get('accessToken')) {
      getMyInfo();
    }
  }, []);

  if (forgetPassword) {
    return (
      <ForgotPassword
        mail={email}
      />
    );
  }

  return (
    <ValidatorForm>
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
            onChange={(e) => { setEmail(e.target.value); }}
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
            value={password}
            autoComplete="current-password"
            InputLabelProps={{
              style: { color: '#333' },
            }}
            variant="outlined"
            onChange={(e) => { setPassword(e.target.value); }}
            validators={['required']}
            errorMessages={['Veuillez remplir ce champ']}
          />
          <br />
          <Button
            variant="contained"
            className="margtop-20"
            type="button"
            onClick={async () => { await loginReq(); }}
          >
            Connexion
          </Button>
          <div
            role="button"
            type="button"
            onClick={() => { setforgetPassword(true); }}
            aria-hidden="true"
          >
            mot de passe oublié ?
          </div>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Alert
            onClose={() => {
              setOpen(false);
            }}
            severity={success ? 'success' : 'error'}
          >
            {success ? 'Authentifié' : 'Mot de passe incorrect'}
          </Alert>
        </Snackbar>
      </div>
    </ValidatorForm>
  );
};

export default Login;
