import axios from "axios";

const API_URL = 'http://localhost:5000/api/'; // Adjust the base URL as needed

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

export const deleteUser = async (token, id) => await axios.delete(`${API_URL}delete-user/${id}`, {
    headers: {
        Authorization: `Bearer ${token}` 
        }
});

export const changeUserRole = async (token, userData) => await axios.patch(`${API_URL}change-user-role/${userData.id}`, userData, {
    headers: {
        Authorization: `Bearer ${token}` 
        }
});

