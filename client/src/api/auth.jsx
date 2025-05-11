import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // Adjust the base URL as needed

export const register = async (userData) => await axios.post(`${API_URL}register`, userData)

export const login = async (userData) => await axios.post(`${API_URL}login`, userData)

export const loginGoogle = async (userData) => await axios.post(`${API_URL}login/google`, userData)

export const currentUser = async (token) => await axios.post(`${API_URL}current-user`, {}, 
    { headers: 
        { Authorization: `Bearer ${token}` 
    } 
})

export const currentAdmin = async (token) => await axios.post(`${API_URL}current-admin`, {},
    { headers: 
        { Authorization: `Bearer ${token}` 
    } 
})