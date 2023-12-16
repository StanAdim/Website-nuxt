// services/api.js
import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'http://your-laravel-api-url',
  // Add any headers or configurations here
});

export default apiClient;
