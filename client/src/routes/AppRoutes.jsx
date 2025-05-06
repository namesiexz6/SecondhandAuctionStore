import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProtectRouteAdmin from "./ProtectRouteAdmin";
import ProtectRouteUser from "./ProtectRouteUser";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import LayoutUser from "../layouts/LayoutUser";
// import LayoutAdmin from "../layouts/LayoutAdmin";
import MainProduct from "../pages/MainProduct";
import MyAunctions from "../pages/MyAunctions";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import FooterUser from "../components/FooterUser";

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
      

    ],
  },
  
  // {path: "/admin", element: <ProtectRouteAdmin element={<LayoutAdmin />}/>, },



]);


export default function AppRoutes() {
  return (
    <RouterProvider router={router} />
  );
}