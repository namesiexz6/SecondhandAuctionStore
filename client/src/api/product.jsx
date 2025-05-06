import axios from "axios";

const API_URL = "http://localhost:5000/api/"; // Adjust the base URL as needed

export const createProduct = async (productData, token) => await axios.post(`${API_URL}add-product`, productData, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const getAllProducts = async (number) => await axios.get(`${API_URL}products/${number}`, );

export const deleteProduct = async (productId, token) => await axios.delete(`${API_URL}delete-product/${productId}`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const updateProduct = async (productId, productData, token) => await axios.put(`${API_URL}update-product/${productId}`, productData, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const addProductImage = async (productId, imageData, token) => await axios.post(`${API_URL}add-product-image/${productId}`, imageData, {
    headers: {
        Authorization: `Bearer ${token}`
    },
});

export const deleteProductImage = async (productId, token) => await axios.delete(`${API_URL}delete-product-image/${productId}`, {
    headers: {
        Authorization: `Bearer ${token}`
    },
});

export const filterSearchProduct = async (filter) => await axios.post(`${API_URL}filter-search`,  filter );

export const getAuctioneerBoard = async (productId) => await axios.get(`${API_URL}auctioneer-board/${productId}`);

export const addAuctioneerBoard = async (auctioneerData, token) => await axios.post(`${API_URL}add-auctioneer-board`, auctioneerData, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
