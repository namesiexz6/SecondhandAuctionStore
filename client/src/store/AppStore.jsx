import {create} from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {login, currentUser} from "../api/auth";
import {updateUser} from "../api/user";
import { getAllCategories } from "../api/category";
import { getAllProducts, filterSearchProduct, addAuctioneerBoard, getAuctUser, updateProduct, getAuctioneerBoardByProductId} from "../api/product";
import { getCart } from "../api/cart";
import { getOrderByUser, createOrder } from "../api/order";



const AppStore = (set) => ({
    user: null,
    token: null,
    categories: [],
    products: [],
    carts: [],
    orders: [],
    auctioneerBoards: [],
    cartsForPayment: [],
    
    loading : false,
    setLoading: (loading) => set({ loading }),

    setAuctioneerBoards: (boards) => set({ auctioneerBoards: boards }),

    logout: () => {
        set({ 
            user: null, 
            token: null,
            carts: [],
            orders: [],
         });
    },
    actionLogin: async (form) => {
        set({ loading: true });
        try {
            const res = await login(form);
            set({ token: res.data.token });
            await currentUser(res.data.token).then((res) => {
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
    
    actionCurrentUser: async (token) => {
        set({ loading: true });
        try {
            const res = await currentUser(token);
            set({ user: res.data.user });
            return res;
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
    actionGetAllProducts: async (number) => {
        set({ loading: true });
        try {
            const res = await getAllProducts(number);
            set({ products: res.data });
        } finally {
            set({ loading: false });
        }
    },
    actionGetCartByUser: async (userId, token) => {
        set({ loading: true });
        try {
            const res = await getCart(userId, token);
            set({ carts: res.data });
        } finally {
            set({ loading: false });
        }
    },
    actionGetOrderByUser: async (userId, token) => {
        set({ loading: true });
        try {
            const res = await getOrderByUser(userId, token);
            set({ orders: res.data });
        } finally {
            set({ loading: false });
        }
    },

    actionSearchProduct: async (filters) => {
        set({ loading: true });
        try {
            const res = await filterSearchProduct(filters);
            set({ products: res.data });
            console.log("Search result:", res.data);
        } finally {
            set({ loading: false });
        }
    },
    actionAddAuctioneerBoard: async (form, token) => {
        set({ loading: true });
        try {
            const res = await addAuctioneerBoard(form, token);
            console.log("Auctioneer Board Response:", res.data);
            await getAuctioneerBoardByProductId(form.product_id).then((res) => {
                set({ auctioneerBoards: res.data });
            }).catch((err) => {
                console.log(err);
            });
            return res;
        } finally {
            set({ loading: false });
        }
    },
    actionGetAuctioneerBoardByProductId: async (productId) => {
        set({ loading: true });
        try {
            console.log("Product ID:", productId);
            const res = await getAuctioneerBoardByProductId(productId);
            set({ auctioneerBoards: res.data });
        } finally {
            set({ loading: false });
        }
    },

    getAuctUser: async (user_id, token) => {
        set({ loading: true });
        try {
            const res = await getAuctUser(user_id, token);
            set({ auctioneerBoards: res.data });
        } finally {
            set({ loading: false });
        }
    },
    actionUpdateProduct: async (productId, form, token) => {
        set({ loading: true });
        try {
            const res = await updateProduct(productId, form, token);
            set({ products: res.data });
        } finally {
            set({ loading: false });
        }
    },

    actionCreateOrder: async (form, token) => {
        set({ loading: true });
        try {
            const res = await createOrder(form, token);
            await getOrderByUser(res.user_id, token).then((res) => {
                set({ orders: res.data.order });
            })
            .catch((err) => {
                console.log(err);
            });
        } finally {
            set({ loading: false });
        }
    },
    

    setCartsForPayment: (carts) => set({ cartsForPayment: carts }),

    actionUpdateUser: async (userId, form, token) => {
        set({ loading: true });
        try {
            const res = await updateUser(userId, form, token);
            set({ user: res.data });
        } finally {
            set({ loading: false });
        }
    },
    

});

const usePersist ={
        name:"appstore",
        storage: createJSONStorage(() => localStorage),
};

const useAppStore = create(persist(AppStore, usePersist));

export default useAppStore;