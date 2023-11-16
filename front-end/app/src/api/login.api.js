import axios from "axios";

export const loginAPI = axios.create({
  baseURL: 'http://127.0.0.1:8000/app/api/auth/login/'
});