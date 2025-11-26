import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ToyDetails = () => {
  const {id} = useParams()
  const [toys, setToys] = useState([]);
  const [toyDetails, setToyDetails] = useState(null);
    useEffect(() => {
      fetch("/toys.json")
        .then((res) => res.json())
        .then((data) => {

       setToys(data);
          
        });
    }, []);

    useEffect(()=>{
      const findtoys = toys.find(toy => toy.toyId == id) ;
      setToyDetails(findtoys) ;
    },[id, toys])
   
  return (
    <div>
      <h1>{toyDetails?.toyName}</h1>
      <img src={toyDetails?.pictureURL} alt="" />

    </div>
  );
};

export default ToyDetails;