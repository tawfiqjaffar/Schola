// const axiosInstance = require('../config');
// const uri = require('../uri/auth');
import axios from '../config';
import uri from '../uri/calendar';

/**
 * Logs into the platform, returns an accessToken if login successful
 * @param {String} email retrieved after login
 * @param {String} password retrieved after login
 * @returns {{code: Number, data: Object, message: String}}
 */
const getWeekSchedule = async (accessToken) => {
  let res;

  try {
    const response = await axios({
      method: uri.weekcourse.method,
      url: uri.weekcourse.path,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    res = response.data;
  } catch (axiosErr) {
    console.log(axiosErr);
    res = axiosErr.response && axiosErr.response.data;
  }
  return res;
};

const getDaySchedule = async (accessToken) => {
  let res;

  try {
    const response = await axios({
      method: uri.daycourse.method,
      url: uri.daycourse.path,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    res = response.data;
  } catch (axiosErr) {
    console.log(axiosErr);
    res = axiosErr.response && axiosErr.response.data;
  }
  return res;
};

const getAllSchedule = async (accessToken) => {
  let res;

  try {
    const response = await axios({
      method: uri.allcourse.method,
      url: uri.allcourse.path,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    res = response.data;
  } catch (axiosErr) {
    console.log(axiosErr);
    res = axiosErr.response && axiosErr.response.data;
  }
  return res;
};

const postCreateSchedule = async (
  subjectID,
  teacherID,
  start,
  end,
  label,
  userID,
  accessToken,
) => {
  let res;
  try {
    const response = await axios({
      method: uri.create.method,
      url: uri.create.path,
      data: {
        subjectID,
        teacherID,
        start,
        end,
        label,
        userID,
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

const updateSchedule = async (objectID, start, end, accessToken) => {
  let res;
  try {
    const response = await axios({
      method: uri.update.method,
      url: uri.update.path,
      data: {
        id: objectID,
        start,
        end,
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

const deleteSchedule = async (objectID, accessToken) => {
  let res;
  try {
    const response = await axios({
      method: uri.delete.method,
      url: uri.update.path,
      data: {
        id: objectID,
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

export {
  getWeekSchedule,
  getDaySchedule,
  getAllSchedule,
  postCreateSchedule,
  updateSchedule,
  deleteSchedule };
