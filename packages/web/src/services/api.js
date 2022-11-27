import axios from 'axios';

const apiURL = import.meta.env.VITE_APP_API_URI;
const api = axios.create({
  baseURL: apiURL,
});

export default api;
