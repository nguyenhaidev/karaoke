import axios from "axios";

console.log(import.meta.env);

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

export default instance;
