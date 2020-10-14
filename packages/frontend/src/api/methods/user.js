import axios from '../config';
import uri from '../uri/user';

/**
 * Get all users if role == admin / only my user if role != admin
 * @param {String} accessToken retrieved after login
 * @returns {{code: Number, data: Object, message: String}}
 */

const getAllUsers = async (accessToken) => {
  let res;

  try {
    const response = await axios({
      method: uri.all.method,
      url: uri.all.path,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    res = response.data;
  } catch (axiosErr) {
    res = axiosErr.response && axiosErr.response.data;
  }
  return res;
};

/**
 * Get  my user
 * @param {String} accessToken retrieved after login
 * @returns {{code: Number, data: Object, message: String}}
 */
const getMe = async (accessToken) => {
  let res;
  try {
    const response = await axios({
      method: uri.me.method,
      url: uri.me.path,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    res = response.data;
  } catch (axiosErr) {
    res = axiosErr.response && axiosErr.response.data;
  }
  return res;
};

/**
 * Creates a new user, returns the created user
 * @param {String} firstname
 * @param {String} lastname
 * @param {String} email
 * @param {String} password
 * @param {"student"|"parent"|"teacher"|"admin"|"viesco"} [role]
 *    defaults to student
 * @param {String} [dateofbirth]
 * @returns {{code: Number, data: Object, message: String}}
 */
const postCreateUser = async (
  firstname,
  lastname,
  email,
  password,
  role,
  dateofbirth
) => {
  let res;
  try {
    const response = await axios({
      method: uri.create.method,
      url: uri.create.path,
      data: {
        firstname,
        lastname,
        email,
        password,
        dateofbirth,
        role,
      },
    });
    res = response.data;
  } catch (axiosErr) {
    res = axiosErr.response && axiosErr.response.data;
  }
  return res;
};

/**
 * Modify the userId's bearer's account role, returns the user with the new role
 * @param {String} userId the target user's ID
 * @param {"student"|"parent"|"teacher"|"admin"|"viesco"} newRole the new role
 * @param {String} accessToken token retrieved after login
 * @returns {{code: Number, data: Object, message: String}}
 */
const putChangeRole = async (userId, newRole, accessToken) => {
  let res;
  try {
    const response = await axios({
      method: uri.updateRole.method,
      url: uri.updateRole.path,
      data: {
        id: userId,
        role: newRole,
      },
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    res = response.data;
  } catch (axiosErr) {
    res = axiosErr.response && axiosErr.response.data;
  }
  return res;
};

export { getAllUsers, getMe, postCreateUser, putChangeRole };
