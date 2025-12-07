import React from "react";
import { Link } from "react-router";

const CategoryCard = ({ title, image }) => {
  return (
    <Link to={`/category/${title.toLowerCase()}`}>
      <div className="relative h-60 w-48 rounded-3xl overflow-hidden shadow-xl cursor-pointer group bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-200">

        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        ></div>

        {/* Colorful Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-300"></div>

        {/* Title */}
        <div className="absolute bottom-4 w-full flex justify-center">
          <h3 className="text-white text-xl font-bold drop-shadow-lg flex items-center gap-1">
            🐾 {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
