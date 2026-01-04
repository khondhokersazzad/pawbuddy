import React from "react";
import Slider from "../components/Slider";
import PopularToys from "../components/PopularProducts";

import NewsLetter from "../components/NewsLetter";
import CategoryCard from "../components/CategoryCard";
import WhyAdopt from "../components/WhyAdopt";
import MeetHeroes from "../components/MeetHeroes";
// import CategoryCard from "../components/CategoryCard";

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
      <section className="w-11/12 md:w-7xl mx-auto my-16">
        <h1 className="text-center text-3xl font-bold relative w-fit mx-auto py-3">
          Categories
          <span className="block w-16 h-1 bg-purple-500 mx-auto mt-1 rounded"></span>
        </h1>

        <div className="w-11/12 mx-auto my-5 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
          <CategoryCard
            title="Pets"
            image="https://i.postimg.cc/bwJgNZb6/taylor-sondgeroth-lts-KOg-q-Gc-unsplash.jpg"
          />

          <CategoryCard
            title="Accessories"
            image="https://i.postimg.cc/dt4FTwjw/pngtree-pet-accessories-accompanied-by-dry-food-on-a-white-png-image-11230281.png"
          />

          <CategoryCard
            title="Pet Food"
            image="https://i.postimg.cc/hPrDb9gw/images.jpg"
          />

          <CategoryCard
            title="Pet Care Products"
            image="https://i.postimg.cc/hjd496P8/aboutus-image01.webp"
          />
        </div>
      </section>

      <section className="w-full bg-slate-50 dark:bg-slate-950">
        <WhyAdopt className="w-11/12 mx-auto "></WhyAdopt>
      </section>

      <section className="w-full bg-slate-50 dark:from-[#1f1b2e] dark:via-[#1b2430] dark:to-[#0f172a]">
        <MeetHeroes className="w-11/12 mx-auto"></MeetHeroes>
      </section>

      

      
    </div>
  );
};

export default Home;
