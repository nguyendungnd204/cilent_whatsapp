import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3007',
    withCredentials: true
});

export const signup = async (email, password) => {
    try {
        const response = await api.post('/auth/signup', { email, password });
    } catch (error){
        throw error.response.data;
    }
};
export const signin = async (email, password) => {
    try {
        const response = await api.post('/auth/signin', { email, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});