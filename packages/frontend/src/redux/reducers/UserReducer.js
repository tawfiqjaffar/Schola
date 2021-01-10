const { USER, LOGGED_IN, LOGGED_OUT } = require('../constants/UserConstants');

export const setUserReducer = (state = null, action) => {
  switch (action.type) {
    case USER:
      return action.payload;
    default:
      return state;
  }
};

export const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return true;
    case LOGGED_OUT:
      return false;
    default:
      return state;
  }
};
