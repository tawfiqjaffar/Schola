import { LOGGED_IN, LOGGED_OUT, USER } from '../constants/UserConstants';

export const logIn = () => ({ type: LOGGED_IN });

export const logOut = () => ({ type: LOGGED_OUT });

export const setUser = (user) => ({ type: USER, payload: user });

export const getUser = (user) => ({ type: USER, payload: user });
