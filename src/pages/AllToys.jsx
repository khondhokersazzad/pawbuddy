import React, { useEffect, useState } from "react";
import AllToysCard from "../components/AllToysCard";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const toys = data;
        console.log(toys);
        setAllToys(toys);
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-purple-600 mt-8">All Toys ({allToys.length})</h1>
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
      {allToys.map((toy) => {
        return <AllToysCard toy={toy}></AllToysCard>;
      })}
    </div>
    </div>
    
  );
};

export default AllToys;
