import React from "react";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

import AllToys from "../pages/AllToys";
import PopularToys from "../components/PopularToys";
import CategoryToys from "../components/CategoryToys";
import CategoryToysdemo from "../components/CategoryToysdemo";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const HomePageLayout = () => {
  return (
    <div
      className="bg-linear-to-br from-blue-100 via-pink-100 
      to-purple-100 min-h-screen"
    >
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
