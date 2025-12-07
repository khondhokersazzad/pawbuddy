import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Category = () => {
  
  
   const [pet, setPet] = useState([]);
  
  const { categoryName } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/category/${categoryName}`)
    .then((res) => setPet(res.data))
      .catch((err) => console.log(err));
      
  }, []);

  return <div></div>;
};

export default Category;
