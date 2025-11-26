import React from "react";
import { Link } from "react-router";

const PopularToysCard = ({ toy }) => {
  const {
    toyId,
    toyName,
    pictureURL,
    price,
    rating,
    availableQuantity,
    subCategory,
  } = toy;
  return (
    <div>
      <div className="bg-white border rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-48 object-cover"
        />

        
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">{toyName}</h3>
          <p className="text-sm text-gray-500">Category: {subCategory}</p>

          <div className="flex justify-between items-center text-sm mt-2">
            <p className="font-medium text-indigo-600">Price: ${price}</p>
            <p className="text-yellow-600">⭐ {rating}</p>
          </div>

          <p className="text-sm text-gray-600">
            Available: <span className="font-medium">{availableQuantity}</span>
          </p>

          {/* View More button */}
          <Link
            to={`/toy-details/${toyId}`}
            className="block text-center mt-3 bg-indigo-600 text-white py-1.5 rounded-lg hover:bg-indigo-700 transition"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularToysCard;
