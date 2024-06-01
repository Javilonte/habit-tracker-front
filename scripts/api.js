import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api/habits', // Asegúrate de que este sea tu endpoint correcto
});

export default api;
