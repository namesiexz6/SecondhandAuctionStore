import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Adjust the base URL as needed

export const createOrder = async (orderData, token) => await axios.post(`${API_URL}add-order`, orderData, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const getAllOrders = async (token) => await axios.get(`${API_URL}get-all-orders`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const getOrderByUser = async (userId, token) => await axios.get(`${API_URL}get-order-by-user/${userId}`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const updateOrderStatus = async (orderId, orderStatus, token) => await axios.put(`${API_URL}update-order-status/${orderId}`, { orderStatus }, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const deleteOrder = async (orderId, token) => await axios.delete(`${API_URL}delete-order/${orderId}`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

