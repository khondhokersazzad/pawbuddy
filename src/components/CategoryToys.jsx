import React, { useState } from "react";
import { useEffect } from "react";

const CategoryToys = () => {
  const [categorys, setcategorys] = useState([]);
  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredCategory = data.filter((toy) => toy.ageGroup);

        const uniqueCategories = [
          ...new Map(data.map((toy) => [toy.ageGroupId, toy])).values(),
        ].sort((a, b) => a.ageGroupId - b.ageGroupId);

        setcategorys(uniqueCategories);
        console.log(filteredCategory, uniqueCategories);
      });
  }, []);
  return (
    <div>
      <h1 className=" text-blue-500 text-3xl font-semibold py-5 text-center">
        Shop By Kids Age
      </h1>
      <div
        className="grid 
        grid-cols-2        
        sm:grid-cols-3     
        lg:grid-cols-4    
        gap-6              
        max-w-6xl mx-auto
        px-4"
      >
        {categorys.map((category) => {
          return (
            <button className="btn w-full bg-purple-500 text-white hover:bg-purple-600 border-none text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition duration-300">
              {category.ageGroup}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryToys;
