import React, { useEffect, useState } from "react";
import PopularToysCard from "./PopularToysCard";

const PopularToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((toy) => toy.rating >= 4.5);
        setToys(popular);
      });
  }, []);
  return (
    <div>
      <h1 className="chewy text-purple-700 text-3xl font-bold text-center py-5 my-5">
        Popular Toys 🧸
      </h1>
      <div
        className="grid 
        grid-cols-1        
        sm:grid-cols-2     
        lg:grid-cols-3    
        gap-6              
        max-w-6xl mx-auto
        px-4"
      >
        {toys.map((toy) => {
          return <PopularToysCard toy={toy}></PopularToysCard>;
        })}
      </div>
    </div>
  );
};

export default PopularToys;
