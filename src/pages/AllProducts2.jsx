import React, { useEffect, useState } from "react";
import AllProductsCard from "../components/AllProductsCard";

const AllProducts2 = () => {
  const [allProducts, setAllProducts] = useState([]);
    const [category, setCategory] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/services?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        const pets = data;
        console.log(pets);
        setAllProducts(pets);
      });
  }, [category]);
  return (
    <div>
      <title>All Products</title>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
          console.log(category);
        }}
        defaultValue="Pick a category"
        className="select m-5"
      >
        <option disabled={true}>Pick a category</option>
        <option>Pets</option>
        <option>Pet Food</option>
        <option>Accessories</option>
        <option>Pet Care Products</option>
      </select>

      <h1 className="text-3xl font-bold text-center text-purple-600 mt-8">
        All Products ({allProducts.length})
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
        {allProducts.map((pet) => {
          return <AllProductsCard pet={pet}></AllProductsCard>;
        })}
      </div>
    </div>
  );
};

export default AllProducts2;
