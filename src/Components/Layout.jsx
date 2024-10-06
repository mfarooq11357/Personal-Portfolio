import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-4/5 mx-auto  md:rounded-xl">
      <Outlet />
      <Navbar />
    </div>
  );
}

export default Layout;
