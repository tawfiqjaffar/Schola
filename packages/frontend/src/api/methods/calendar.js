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
const getWeekTask = async (accessToken) => {
  let res;

  try {
    const response = await axios({
      method: uri.weekTask.method,
      url: uri.weekTask.path,
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

const getDayTask = async (accessToken) => {
  let res;

  try {
    const response = await axios({
      method: uri.dayTask.method,
      url: uri.dayTask.path,
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

const getAllTask = async (accessToken) => {
  let res;

  try {
    const response = await axios({
      method: uri.allTask.method,
      url: uri.allTask.path,
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

const postCreateTask = async (
  subjectID,
  teacherID,
  dueDate,
  label,
  userID,
  accessToken,
) => {
  let res;
  try {
    const response = await axios({
      method: uri.createTask.method,
      url: uri.createTask.path,
      data: {
        subjectID,
        teacherID,
        dueDate,
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

const updateTask = async (id, label, accessToken) => {
  let res;
  try {
    const response = await axios({
      method: uri.updateTask.method,
      url: uri.updateTask.path,
      data: {
        id: id,
        label,
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

const updateTaskDate = async (dueDate, accessToken) => {
  let res;
  try {
    const response = await axios({
      method: uri.updateDateTask.method,
      url: uri.updateDateTask.path,
      data: {
        dueDate
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

const deleteTask = async (id, accessToken) => {
  let res;
  try {
    const response = await axios({
      method: uri.deleteTask.method,
      url: uri.deleteTask.path,
      data: {
        id: id,
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
  getWeekTask,
  getDayTask,
  getAllTask,
  postCreateTask,
  updateTask,
  updateTaskDate,
  deleteTask };
