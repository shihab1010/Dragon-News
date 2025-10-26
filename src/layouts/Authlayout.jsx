import React from "react";
import Navbar from "../components/NAvbar/Navbar";
import { Outlet } from "react-router";

const Authlayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto py-3">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Authlayout;
