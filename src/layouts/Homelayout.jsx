import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/latestNews/LatestNews";
import Navbar from "../components/NAvbar/Navbar";

const Homelayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto mt-3">
          <LatestNews></LatestNews>
        </section>
        <section className="w-11/12 mx-auto mt-3">
          <Navbar></Navbar>
        </section>
      </header>
      <main>
        <section className="left-nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default Homelayout;
