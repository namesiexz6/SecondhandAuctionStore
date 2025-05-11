import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Adjust the base URL as needed

export const createCategory = async (categoryData, token) => await axios.post(`${API_URL}add-category`, categoryData, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
});

export const getAllCategories = async () => await axios.get(`${API_URL}get-all-categories`);

export const updateCategory = async (categoryId, categoryData, token) => await axios.put(`${API_URL}update-category/${categoryId}`, categoryData, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
});

export const deleteCategory = async (categoryId, token) => await axios.delete(`${API_URL}delete-category/${categoryId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
});
