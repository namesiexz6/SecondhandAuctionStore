import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { login, currentAdmin } from "../api/auth";
import { changeUserRole, getAllUsers, deleteUser } from "../api/user";
import { getAllCategories, createCategory, updateCategory, deleteCategory } from "../api/category";
import { getAllOrders, updateOrderStatus, deleteOrder } from "../api/order";
import { getAllProductsAdmin, createProduct, updateProduct, deleteProduct, addProductImage, deleteProductImage } from "../api/product";



const AppStoreAdmin = (set) => ({
    user: null,
    token: null,
    categories: [],
    products: [],
    orders: [],

    logout: () => {
        set({
            user: null,
            token: null,
            categories: [],
            products: [],
            orders: [],
        });
    },

    actionLogin: async (form) => {
        const res = await login(form);
        set({ token: res.data.token });
        currentAdmin(res.data.token).then((res) => {
            set({ user: res.data.user });
        })
            .catch((err) => {
                console.log(err);
            });
        return res;
    },

    actionCurrentAdmin: async (token) => {
        const res = await currentAdmin(token);
        set({ user: res.data.user });
        return res;
    },



    actionGetAllUsers: async (token) => {
        const res = await getAllUsers(token);
        set({ users: res.data });
    },

    actionChangeUserRole: async (userId, role, token) => {

        console.log("userId", userId);
        console.log("role", role);
        console.log("token", token);
        await changeUserRole(userId, role, token);
        getAllUsers(token).then((res) => {
            set({ users: res.data });
        })
            .catch((err) => {
                console.log(err);
            });
    },
    actionDeleteUser: async (userId, token) => {
        await deleteUser(userId, token);

        getAllUsers(token).then((res) => {
            set({ users: res.data });
        })
            .catch((err) => {
                console.log(err);
            });
    },

    actionGetAllCategories: async () => {
        const res = await getAllCategories();
        set({ categories: res.data });
    },

    actionCreateCategory: async (form, token) => {
        const res = await createCategory(form, token);
        set((state) => ({ categories: [...state.categories, res.data] }));
    },

    actionUpdateCategory: async (categoryId, form, token) => {
        const res = await updateCategory(categoryId, form, token);
        set((state) => ({
            categories: state.categories.map((category) =>
                category.id === categoryId ? res.data : category
            ),
        }));
    },

    actionDeleteCategory: async (categoryId, token) => {
        await deleteCategory(categoryId, token);
        set((state) => ({
            categories: state.categories.filter((category) => category.id !== categoryId),
        }));
    },

    actionGetAllProductsAdmin: async (token) => {
        const res = await getAllProductsAdmin(token);
        set({ products: res.data });
    },
    actionCreateProduct: async (form, token) => {
        console.log("form", form);
        const res = await createProduct(form, token);
        set((state) => ({ products: [...state.products, res.data] }));
        return res;

    },

    actionUpdateProduct: async (productId, form, token) => {
        const res = await updateProduct(productId, form, token);
        const productsRes = await getAllProductsAdmin(token);
        set({ products: productsRes.data });
        return res;
       
    },

    actionDeleteProduct: async (productId, token) => {
        await deleteProduct(productId, token);
        set((state) => ({
            products: state.products.filter((product) => product.id !== productId),
        }));
    },
    actionAddProductImage: async (productId, formData, token) => {
        const res = await addProductImage(productId, formData, token);
        console.log("res", res.data);
        const productsRes = await getAllProductsAdmin(token);
        set({ products: productsRes.data });
        return res;
    },
    actionDeleteProductImage: async (productId, imageId, token) => {
        await deleteProductImage(productId, imageId, token);
        set((state) => ({
            products: state.products.map((product) =>
                product.id === productId ? { ...product, images: product.images.filter((image) => image.id !== imageId) } : product
            ),
        }));
    },

    actionGetAllOrders: async (token) => {
        const res = await getAllOrders(token);
        set({ orders: res.data });
    },
    actionUpdateOrderStatus: async (orderId, orderStatus, token) => {
        await updateOrderStatus(orderId, orderStatus, token);
        const ordersRes = await getAllOrders(token);
        set({ orders: ordersRes.data });
    },
    actionDeleteOrder: async (orderId, token) => {
        await deleteOrder(orderId, token);
        set((state) => ({
            orders: state.orders.filter((order) => order.id !== orderId),
        }));
    },



});


const usePersist = {
    name: "appstoreAdmin",
    storage: createJSONStorage(() => localStorage),
};

const useAppStoreAdmin = create(persist(AppStoreAdmin, usePersist));

export default useAppStoreAdmin;