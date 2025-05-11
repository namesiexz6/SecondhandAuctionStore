import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Adjust the base URL as needed

export const getAllUsers = async (token) => await axios.get(`${API_URL}get-all-users`,{
  headers: { 
    Authorization: `Bearer ${token}` 
    }
});

export const updateUser = async (userId, userData, token) => await axios.post(`${API_URL}update-user/${userId}`, userData, {
    headers: {
        Authorization: `Bearer ${token}` 
        }
});

export const deleteUser = async (id, token) => await axios.delete(`${API_URL}delete-user/${id}`, {
    headers: {
        Authorization: `Bearer ${token}` 
        }
});

export const changeUserRole = async (userId, userData, token) => await axios.patch(`${API_URL}change-user-role/${userId}`, userData, {
    headers: {
        Authorization: `Bearer ${token}` 
        }
});

