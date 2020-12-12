import { combineReducers } from 'redux';
import { loggedReducer, setUserReducer } from './UserReducer';

const allReducers = combineReducers({
  isLogged: loggedReducer,
  user: setUserReducer,
});

export default allReducers;
