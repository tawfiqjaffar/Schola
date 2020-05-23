require('dotenv');
const axios = require('axios');

const serverUrl = process.env.SERVER_URI || 'http://localhost:8080/api';

const axiosInstance = axios.create({
  baseURL: serverUrl,
  timeout: 10000,
});

module.exports = axiosInstance;
