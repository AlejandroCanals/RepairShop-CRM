import axios from 'axios'

const rmaApi = axios.create({
    baseURL: 'https://repairshop-crm.onrender.com//app/technicians/'
});

export const getListaDeTecnicos = () => {
    return rmaApi.get('/');
};