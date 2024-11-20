import React, { ReactNode } from "react";
import Searchbar from "../../components/searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Searchbar />
      {children}
    </>
  );
};

export default Layout;
