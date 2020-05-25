import 'dotenv';
import axios from 'axios';

const serverUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';
const axiosInstance = axios.create({
  baseURL: serverUrl,
  timeout: 10000,
});

export default axiosInstance;
