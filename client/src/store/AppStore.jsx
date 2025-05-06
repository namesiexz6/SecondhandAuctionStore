import {create} from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {login} from "../api/auth";
import {updateUser} from "../api/user";
import { getAllCategories } from "../api/category";
import { getAllProducts, filterSearchProduct, addAuctioneerBoard, getAuctioneerBoard, updateProduct} from "../api/product";
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

    logout: () => {
        set({ 
            user: null, 
            token: null,
            carts: [],
            orders: [],
         });
    },
    actionLogin: async (form) => {
        const res = await login(form);
        set({ user: res.data.payload, token: res.data.token });
        return res;
    },

    actionGetAllCategories: async () => {
        const res = await getAllCategories();
        set({ categories: res.data });
    },
    actionGetAllProducts: async (number) => {
        const res = await getAllProducts(number);
        set({ products: res.data });
    },
    actionGetCartByUser: async (userId, token) => {
        const res = await getCart(userId, token);
        set({ carts: res.data });
    },
    actionGetOrderByUser: async (userId, token) => {
        const res = await getOrderByUser(userId, token);
        set({ orders: res.data });
    },

    actionSearchProduct: async (filters) => {
        // filters: { search, category_id, priceRange }
        const res = await filterSearchProduct(filters);
        set({ products: res.data });
        console.log("Search results:", res.data);
    },
    actionAddAuctioneerBoard: async (form, token) => {
        const res = await addAuctioneerBoard(form, token);
        set((state) => ({
            products: state.products.map(product =>
                product.id === form.product_id
                    ? {
                        ...product,
                        auctioneerBoards: [
                            { ...res.data, user: state.user },
                            ...(product.auctioneerBoards || [])
                        ]
                    }
                    : product
            )
        }));
        //set({ auctioneerBoards: res.data });
        //console.log("Auctioneer board updated:", res.data);

       
    },
    getAuctioneerBoard: async (product_id) => {
        const res = await getAuctioneerBoard(product_id);
        set({ auctioneerBoards: res.data });
       
    },
    actionUpdateProduct: async (productId, form, token) => {
        const res = await updateProduct(productId, form, token);
        set({ products: res.data });
    },

    actionCreateOrder: async (form, token) => {
        const res = await createOrder(form, token);
        set({ orders: res.data });
        
    },
    

    setCartsForPayment: (carts) => set({ cartsForPayment: carts }),

    actionUpdateUser: async (userId, form, token) => {
        const res = await updateUser(userId, form, token);
        set({ user: res.data });
    },
    

});

const usePersist ={
        name:"appstore",
        storage: createJSONStorage(() => localStorage),
};

const useAppStore = create(persist(AppStore, usePersist));

export default useAppStore;