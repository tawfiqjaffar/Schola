import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function login(data) {
  const { email, password } = data;

  return (dispatch) => {
    return axios
      .post('http://localhost:8080/api/auth/login', { email, password })
      .then((res) => {
        const { accessToken } = res.data.data;
        localStorage.setItem('jwtToken', accessToken);
        // setAuthorizationToken(accesToken);
        dispatch(setCurrentUser(jwtDecode(accessToken)));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
