import React from "react";
import { Outlet } from "react-router-dom";
import NavUser from "../components/NavUser";
import FooterUser from "../components/FooterUser";
import Loading from "../utils/Loading";

const Layout = () => {
  return (
    <>
      <NavUser />
      <main className="flex-1 h-full px-2 mt-2 mx-auto">
        <Loading />
        <Outlet />
      </main>
        <FooterUser />
    </>
  );
};

export default Layout;
