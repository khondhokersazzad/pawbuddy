import React from "react";
import Slider from "../components/Slider";
import PopularToys from "../components/PopularToys";
import CategoryToysdemo from "../components/CategoryToysdemo";

const Home = () => {
  return (
    <div>
    <title>Home</title>

      <section className="w-full mx-auto">
        <Slider></Slider>
      </section>

      <section className="w-11/12 mx-auto my-3">
        <PopularToys></PopularToys>
      </section>

      <section className="w-11/12 mx-auto my-3">
        <CategoryToysdemo></CategoryToysdemo>
      </section>
    </div>
  );
};

export default Home;
