import axios from 'axios';

const API = axios.create({
  baseURL: '/api', 
});

export const testBackendConnection = () => API.get('/humanize/test');
export const rewriteContent = (text) => API.post('/humanize/rewrite', { text });
export const generateArticle = (topic) => API.post('/article/generate', { topic });
