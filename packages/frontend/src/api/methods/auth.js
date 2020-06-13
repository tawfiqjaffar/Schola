// const axiosInstance = require('../config');
// const uri = require('../uri/auth');
import axiosInstance from '../config';
import uri from '../uri/auth';

/**
 * Logs into the platform, returns an accessToken if login successful
 * @param {String} email retrieved after login
 * @param {String} password retrieved after login
 * @returns {{code: Number, data: Object, message: String}}
 */
const postLoginUser = async (email, password) => {
  let res;
  try {
    const response = await axiosInstance({
      method: uri.login.method,
      url: uri.login.path,
      data: {
        email,
        password,
      },
    });
    res = response.data;
  } catch (axiosErr) {
    console.log(axiosErr);
    res = axiosErr.response && axiosErr.response.data;
    if (!res) {
      res = { code: 500, message: 'connection error' };
    }
  }
  return res;
};

export default postLoginUser;
