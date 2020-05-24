const axiosInstance = require('../config');
const uri = require('../uri/auth');

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
    res = axiosErr.response && axiosErr.response.data;
  }
  return res;
};

module.exports = { postLoginUser };
