import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ? `${import.meta.env.VITE_API_BASE_URL}/api` : '/api',
});

export const testBackendConnection = () => API.get('/humanize/test');
export const rewriteContent = (text) => API.post('/humanize/rewrite', { text });
export const generateArticle = (topic) => API.post('/article/generate', { topic });
