import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Adjust the base URL as needed

export const createCart = async (dataCart, token) => axios.post(`${API_URL}add-cart`, dataCart, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const getCart = async (userId, token) => axios.get(`${API_URL}cart/${userId}`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const deleteCart = async (cartId, token) => axios.delete(`${API_URL}delete-cart/${cartId}`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});