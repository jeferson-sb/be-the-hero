import axios from 'axios';

const localUrl = 'http://localhost:3333';

const api = axios.create({
  baseURL: localUrl || process.env.REACT_APP_API_URI
});

export default api;
