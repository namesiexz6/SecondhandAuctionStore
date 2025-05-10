import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProtectRouteAdmin from "./ProtectRouteAdmin";
import ProtectRouteUser from "./ProtectRouteUser";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import LayoutUser from "../layouts/LayoutUser";
import MainProduct from "../pages/MainProduct";
import MyAunctions from "../pages/MyAunctions";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import MyOrder from "../pages/MyOrder";
import LayoutAdmin from "../layouts/LayoutAdmin";
import ManageUser from "../pages/Admin/ManageUser";
import ManageCategories from "../pages/Admin/ManageCategories";
import ManageProducts from "../pages/Admin/ManageProducts";
import ManageOrders from "../pages/Admin/ManageOrders";
import Dashboard from "../pages/Admin/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutUser />,
    children: [
      {index: true, element: <Home />, },
      {path: "shop", element: <Shop />, },
      {path: "product/:id", element: <MainProduct />, },
      {path: "login", element: <Login />, },
      {path: "register", element: <Register />, },
     
      
    ],
  },
  
  {
    path: "/user", 
    element: <ProtectRouteUser element={<LayoutUser />}/>,
    children: [
      {index: true, element: <div>user</div>, },
      {path: "my-auctions", element: <MyAunctions />, },
      {path: "cart", element: <Cart />, },
      {path: "payment", element: <Payment />, },
      {path: "my-order", element: <MyOrder />, },

      

    ],
  },

  {
    path: "/admin",
    element: <ProtectRouteAdmin element={<LayoutAdmin />}/>,
    children: [
      {index: true, element: <Dashboard />, },
      {path: "manage-user", element: <ManageUser />, },
      {path: "category", element: <ManageCategories />, },
      {path: "product", element: <ManageProducts />, },
      {path: "orders", element: <ManageOrders />,  },
    ]
  }
  
  // {path: "/admin", element: <ProtectRouteAdmin element={<LayoutAdmin />}/>, },



]);


export default function AppRoutes() {
  return (
    <RouterProvider router={router} />
  );
}