import React from "react";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

import AllToys from "../pages/AllToys";
import PopularToys from "../components/PopularToys";
import CategoryToys from "../components/CategoryToys";
import CategoryToysdemo from "../components/CategoryToysdemo";
import { Outlet } from "react-router";

const HomePageLayout = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <header>
        <nav>
          {/* <NavBar></NavBar> */}
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="w-full mb-3 ">
       <Outlet></Outlet>
      </main>
    </div>
  );
};

export default HomePageLayout;
