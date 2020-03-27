import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.16:3333"
});

export default instance;
