import axios from 'axios';

const API_URL = '/api/employees';

const getAllEmployees = () => {
    return axios.get(API_URL);
};

const createEmployee = (employeeData) => {
    return axios.post(`${API_URL}/create`, employeeData);
};

export default {
    getAllEmployees,
    createEmployee
};
