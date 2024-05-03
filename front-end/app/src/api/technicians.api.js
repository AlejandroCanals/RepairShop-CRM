import axios from 'axios'

const rmaApi = axios.create({
    baseURL: 'https://repairshop-crm.onrender.com/app/technicians/'
});
    
//baseURL: 'http://127.0.0.1:8000/app/technicians/'



export const getListaDeTecnicos = () => {
    return rmaApi.get('/');
};
