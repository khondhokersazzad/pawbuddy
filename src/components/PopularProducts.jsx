import React, { useEffect, useState } from "react";
import PopularProductsCard from "./PopularProductsCard";

const PopularProducts = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/services`)
      .then((res) => res.json())
      .then((data) => {
        setPets(data);
      });
  }, []);
  return (
    <div>
      <h1 className="chewy text-purple-700 text-3xl font-bold text-center py-5 my-5">
        Recently Added
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
        {pets.map((pet) => {
          return <PopularProductsCard pet={pet}></PopularProductsCard>;
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
