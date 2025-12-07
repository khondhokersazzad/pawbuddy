import React from "react";
import { Link } from "react-router";

const AllProductsCard = ({ pet }) => {
   const {
    _id,
    name,
    image,
    price,
    rating,
    // availableQuantity,
    category,
  } = pet;

  return (
    <div>
      <div>
            <div className="bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50 border border-pink-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      
              {/* Toy Image */}
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
      
              <div className="p-4 space-y-2">
      
                <h3 className="text-xl font-bold text-purple-700">{name}</h3>
                <p className="text-sm text-rose-500 font-medium">
                  Category: {category}
                </p>
      
                <div className="flex justify-between items-center text-sm mt-2">
                  <p className="font-semibold text-blue-600">
                    Price: <span className="font-bold">${price}</span>
                  </p>
                  <p className="text-yellow-600 font-semibold text-lg">
                    ⭐ {rating}
                  </p>
                </div>
      
                {/* <p className="text-sm text-gray-700">
                  Available:{" "}
                  <span className="font-semibold text-green-600">
                    {availableQuantity}
                  </span>
                </p> */}
      
                {/* Cute kids-themed View More button */}
                <Link
                  to={`/details/${_id}`}
                  className="block text-center mt-3 bg-purple-500 text-white py-2 rounded-full shadow-md hover:bg-purple-600 hover:shadow-lg transition-all"
                >
                  🎈 View More
                </Link>
              </div>
            </div>
          </div>
    </div>
  );
};

export default AllProductsCard;
