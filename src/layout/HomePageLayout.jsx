import React from "react";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

import AllToys from "../pages/AllProducts";
import PopularToys from "../components/PopularProducts";
import CategoryToys from "../components/CategoryToys";
import CategoryToysdemo from "../components/CategoryToysdemo";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const HomePageLayout = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 via-rose-50 to-amber-100 min-h-screen">
      <header>
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="w-full mb-3 ">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomePageLayout;
