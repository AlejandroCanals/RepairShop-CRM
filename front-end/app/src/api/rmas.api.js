import axios from 'axios'

const rmaApi = axios.create({
    baseURL: 'https://repairshop-crm.onrender.com/app/rmaview/'
});

// baseURL: 'http://127.0.0.1:8000/app/rmaview/'
export const getAllRmas = () => {
    return rmaApi.get('/');
};


export const createRma = (rma) => {
    return rmaApi.post('/', rma);
};

export const updateRma = (id, rma) => {
    return rmaApi.put(`/${id}/`, rma);
};

export const deleteRma = (id) => {
    return rmaApi.delete(`/${id}/`);
};

export const getRmaById = (id) => {
    return rmaApi.get(`/${id}/`);
  };



