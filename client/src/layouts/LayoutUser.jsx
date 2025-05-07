import React from "react";
import { Outlet } from "react-router-dom";
import NavUser from "../components/NavUser";
import FooterUser from "../components/FooterUser";

const Layout = () => {
  return (
    <>
      <NavUser />
      <main className="flex-1 h-full px-2 mt-2 mx-auto">
        <Outlet />
      </main>
        <FooterUser />
    </>
  );
};

export default Layout;
