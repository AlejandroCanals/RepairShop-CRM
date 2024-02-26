import axios from "axios";

export const loginAPI = axios.create({
  baseURL: 'https://repairshop-crm.onrender.com/app/api/auth/login/'
});