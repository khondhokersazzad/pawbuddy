import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AllProductsCard from "../components/AllProductsCard";

const Category = () => {
  const [pet, setPet] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`https://pawbuddy-five.vercel.app/category/${categoryName}`)
      .then((res) => setPet(res.data))
      .catch((err) => console.log(err));
  }, [categoryName]);

  console.log(pet);

  return <div>

    <h1 className="text-3xl font-bold text-center capitalize text-purple-600 mt-8">
        {categoryName} ({pet.length})
      </h1>

    <div
        className="grid 
        grid-cols-1        
        sm:grid-cols-2     
        lg:grid-cols-3    
        gap-6              
        max-w-6xl mx-auto
        px-4
        mt-[50px]
        "
      >
        {pet.map((pet) => {
          return <AllProductsCard pet={pet}></AllProductsCard>;
        })}
      </div>
    
  </div>;
};

export default Category;
