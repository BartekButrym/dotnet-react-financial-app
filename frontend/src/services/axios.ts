import axios from 'axios';
// import { BASE_URL } from '@constants/urls';

const axiosConfig = {
  // baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
};

export default axios.create({ ...axiosConfig });
