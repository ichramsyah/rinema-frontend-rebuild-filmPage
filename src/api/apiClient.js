import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://rinemaa.paramadina.ac.id/api/films',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
