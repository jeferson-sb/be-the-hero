import axios from 'axios';
import { API_URL } from 'react-native-config';
const localIp = 'http://192.168.0.16:3333';

const instance = axios.create({
  baseURL: API_URL || localIp
});

export default instance;
