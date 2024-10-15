import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  //<Outlet />은 자식요소 페이지 라우팅 되게 함
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
