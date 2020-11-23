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

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       redirect: false,
//       loading: false,
//       open: false,
//       success: false,
//       forgetPassword: false,
//       code: '',
//       newPassword: '',
//     };
//     this.onSubmit = this.onSubmit.bind(this);
//     this.onChange = this.onChange.bind(this);
//     this.RedirectPasswordForgot = this.RedirectPasswordForgot.bind(this);
//   }
//   async onSubmit(e) {
//     e.preventDefault();
//     const { email, password } = this.state;
//     this.setState({ loading: true });
//     const res = await postLoginUser(email, password);
//     if (res.code === 200) {
//       this.setState({
//         loading: false,
//         success: true,
//         open: true,
//         redirect: true,
//       });
//       Cookies.set('accessToken', res.data.accessToken, {
//         sameSite: 'strict',
//       });
//       dispatch(logIn());
//       dispatch(setUser(res.data.data));
//       window.location.reload();
//     } else {
//       this.setState({ loading: false, success: false, open: true });
//     }
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   RedirectPasswordForgot() {
//     this.setState({ forgetPassword: true });
//   }

//   render() {
//     const {
//       redirect,
//       email,
//       password,
//       loading,
//       open,
//       success,
//       forgetPassword,
//       code,
//       newPassword,
//     } = this.state;
//     if (Cookies.get('accessToken')) {
//       this.setState({ redirect: true });
//     }
//     if (redirect) {
//       return <Redirect to="/home" />;
//     }
//     if (forgetPassword) {
//       return (
//         <ForgotPassword
//           onChange={this.onChange}
//           email={email}
//           code={code}
//           newPassword={newPassword}
//           redirect={redirect}
//         />
//       );
//     }
//     return (
//       <ValidatorForm onSubmit={this.onSubmit}>
//         <div className="container">
//           <div className="top" />
//           <div className="bottom" />
//           <div className="center">
//             {loading && <Spinner type="Puff" />}

//             <p className="bold">Bienvenue sur SCHOLA</p>
//             <TextValidator
//               name="email"
//               id="standard-required"
//               label="Email"
//               variant="outlined"
//               InputLabelProps={{
//                 style: { color: '#333' },
//               }}
//               className="padbot-20"
//               value={email}
//               onChange={this.onChange}
//               validators={['required', 'isEmail']}
//               errorMessages={[
//                 'Veuillez remplir ce champ',
//                 "L'email rentré n'est pas valide.",
//               ]}
//             />
//             <TextValidator
//               id="outlined-password-input"
//               label="Password"
//               type="password"
//               name="password"
//               autoComplete="current-password"
//               InputLabelProps={{
//                 style: { color: '#333' },
//               }}
//               variant="outlined"
//               value={password}
//               onChange={this.onChange}
//               validators={['required']}
//               errorMessages={['Veuillez remplir ce champ']}
//             />
//             <br />
//             <Button variant="contained" className="margtop-20" type="submit">
//               Connexion
//             </Button>
//             <div
//               role="button"
//               onClick={this.RedirectPasswordForgot}
//               aria-hidden="true"
//             >
//               mot de passe oublié ?
//             </div>
//           </div>
//           <Snackbar
//             open={open}
//             autoHideDuration={3000}
//             onClose={() => {
//               this.setState({ open: false });
//             }}
//           >
//             <Alert
//               onClose={() => {
//                 this.setState({ open: false });
//               }}
//               severity={success ? 'success' : 'error'}
//             >
//               {success ? 'Authentifié' : 'Mot de passe incorrect'}
//             </Alert>
//           </Snackbar>
//         </div>
//       </ValidatorForm>
//     );
//   }
// }

export default Login;
