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
    loading: false,
    setLoading: (loading) => set({ loading }),

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
        set({ loading: true });
        try {
            const res = await login(form);
            set({ token: res.data.token });
            await currentAdmin(res.data.token).then((res) => {
                set({ user: res.data.user });
            })
                .catch((err) => {
                    console.log(err);
                });
            return res;
        } finally {
            set({ loading: false });
        }
    },

    actionCurrentAdmin: async (token) => {
        set({ loading: true });
        try {
            const res = await currentAdmin(token);
            set({ user: res.data.user });
            return res;
        } finally {
            set({ loading: false });
        }
    },



    actionGetAllUsers: async (token) => {
        set({ loading: true });
        try {
            const res = await getAllUsers(token);
            set({ users: res.data });
        } finally {
            set({ loading: false });
        }
    },

    actionChangeUserRole: async (userId, role, token) => {
        set({ loading: true });
        try {
            console.log("userId", userId);
            console.log("role", role);
            console.log("token", token);
            await changeUserRole(userId, role, token);
            await getAllUsers(token).then((res) => {
                set({ users: res.data });
            })
                .catch((err) => {
                    console.log(err);
                });
        } finally {
            set({ loading: false });
        }
    },
    actionDeleteUser: async (userId, token) => {
        set({ loading: true });
        try {
            await deleteUser(userId, token);
            await getAllUsers(token).then((res) => {
                set({ users: res.data });
            })
                .catch((err) => {
                    console.log(err);
                });
        } finally {
            set({ loading: false });
        }
    },

    actionGetAllCategories: async () => {
        set({ loading: true });
        try {
            const res = await getAllCategories();
            set({ categories: res.data });
        } finally {
            set({ loading: false });
        }
    },

    actionCreateCategory: async (form, token) => {
        set({ loading: true });
        try {
            const res = await createCategory(form, token);
            set((state) => ({ categories: [...state.categories, res.data] }));
        } finally {
            set({ loading: false });
        }
    },

    actionUpdateCategory: async (categoryId, form, token) => {
        set({ loading: true });
        try {
            const res = await updateCategory(categoryId, form, token);
            set((state) => ({
                categories: state.categories.map((category) =>
                    category.id === categoryId ? res.data : category
                ),
            }));
        } finally {
            set({ loading: false });
        }
    },

    actionDeleteCategory: async (categoryId, token) => {
        set({ loading: true });
        try {
            await deleteCategory(categoryId, token);
            set((state) => ({
                categories: state.categories.filter((category) => category.id !== categoryId),
            }));
        } finally {
            set({ loading: false });
        }
    },

    actionGetAllProductsAdmin: async (token) => {
        set({ loading: true });
        try {
            const res = await getAllProductsAdmin(token);
            set({ products: res.data });
        } finally {
            set({ loading: false });
        }
    },
    actionCreateProduct: async (form, token) => {
        set({ loading: true });
        try {
            console.log("form", form);
            const res = await createProduct(form, token);
            set((state) => ({ products: [...state.products, res.data] }));
            return res;
        } finally {
            set({ loading: false });
        }
    },

    actionUpdateProduct: async (productId, form, token) => {
        set({ loading: true });
        try {
            const res = await updateProduct(productId, form, token);
            const productsRes = await getAllProductsAdmin(token);
            set({ products: productsRes.data });
            return res;
        } finally {
            set({ loading: false });
        }
    },

    actionDeleteProduct: async (productId, token) => {
        set({ loading: true });
        try {
            await deleteProduct(productId, token);
            set((state) => ({
                products: state.products.filter((product) => product.id !== productId),
            }));
        } finally {
            set({ loading: false });
        }
    },
    actionAddProductImage: async (productId, formData, token) => {
        set({ loading: true });
        try {
            const res = await addProductImage(productId, formData, token);
            console.log("res", res.data);
            const productsRes = await getAllProductsAdmin(token);
            set({ products: productsRes.data });
            return res;
        } finally {
            set({ loading: false });
        }
    },
    actionDeleteProductImage: async (productId, imageId, token) => {
        set({ loading: true });
        try {
            await deleteProductImage(productId, imageId, token);
            set((state) => ({
                products: state.products.map((product) =>
                    product.id === productId ? { ...product, images: product.images.filter((image) => image.id !== imageId) } : product
                ),
            }));
        } finally {
            set({ loading: false });
        }
    },

    actionGetAllOrders: async (token) => {
        set({ loading: true });
        try {
            const res = await getAllOrders(token);
            set({ orders: res.data });
        } finally {
            set({ loading: false });
        }
    },
    actionUpdateOrderStatus: async (orderId, orderStatus, token) => {
        set({ loading: true });
        try {
            await updateOrderStatus(orderId, orderStatus, token);
            const ordersRes = await getAllOrders(token);
            set({ orders: ordersRes.data });
        } finally {
            set({ loading: false });
        }
    },
    actionDeleteOrder: async (orderId, token) => {
        set({ loading: true });
        try {
            await deleteOrder(orderId, token);
            set((state) => ({
                orders: state.orders.filter((order) => order.id !== orderId),
            }));
        } finally {
            set({ loading: false });
        }
    },



});


const usePersist = {
    name: "appstoreAdmin",
    storage: createJSONStorage(() => localStorage),
};

const useAppStoreAdmin = create(persist(AppStoreAdmin, usePersist));

export default useAppStoreAdmin;