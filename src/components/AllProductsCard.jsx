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
        <div
          className="
      rounded-2xl overflow-hidden border transition-all duration-300
      bg-gradient-to-br
      from-pink-50 via-yellow-50 to-blue-50
      dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
      border-pink-100 dark:border-slate-700
      shadow-md hover:shadow-xl dark:shadow-black/30
    "
        >
          {/* Toy Image */}
          <img src={image} alt={name} className="w-full h-48 object-cover" />

          <div className="p-4 space-y-2">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">
              {name}
            </h3>

            <p className="text-sm font-medium text-rose-500 dark:text-rose-300">
              Category: {category}
            </p>

            <div className="flex justify-between items-center text-sm mt-2">
              <p className="font-semibold text-blue-600 dark:text-blue-300">
                Price: <span className="font-bold">${price}</span>
              </p>

              <p className="font-semibold text-lg text-yellow-600 dark:text-yellow-400">
                ⭐ {rating}
              </p>
            </div>

            {/* View More Button */}
            <Link
              to={`/details/${_id}`}
              className="
          block text-center mt-3 py-2 rounded-full font-semibold
          bg-purple-500 hover:bg-purple-600
          dark:bg-purple-600 dark:hover:bg-purple-500
          text-white shadow-md hover:shadow-lg
          transition-all
        "
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
