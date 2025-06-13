import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8001' // Your backend URL
});

export default api;
