import React from "react";
import { Link } from "react-router";
import {
  Eye,
  Heart,
  MapPin,
  Tag,
  Star,
  ArrowRight,
  DollarSign,
} from "lucide-react";

const PopularProductsCard = ({ pet }) => {
  const { _id, name, image, price, rating, category, location, description } =
    pet;

  // Determine if it's a pet (free) or product (paid)
  const isPet = price === "0" || price === 0;
  const displayPrice = isPet ? "Free Adoption" : `৳${price}`;

  return (
    <div className="group relative">
      <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100 dark:border-slate-700">
        {/* Image Container with Overlay */}
        <div className="relative overflow-hidden">
          <img
            src={image || "https://via.placeholder.com/300x200"}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/300x200?text=No+Image";
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <div className="flex items-center gap-1 px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-orange-700 dark:text-orange-300">
              <Tag size={12} />
              {category}
            </div>
          </div>

          {/* Price Badge */}
          <div className="absolute top-3 right-3">
            <div
              className={`flex items-center gap-1 px-3 py-1 backdrop-blur-sm rounded-full text-xs font-bold ${
                isPet
                  ? "bg-green-500/90 text-white"
                  : "bg-orange-500/90 text-white"
              }`}
            >
              {isPet ? <Heart size={12} /> : <DollarSign size={12} />}
              {displayPrice}
            </div>
          </div>

          {/* Hover Actions */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              to={`/details/${_id}`}
              className="flex items-center gap-2 px-6 py-3 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-full font-semibold text-orange-700 dark:text-orange-300 hover:bg-orange-500 hover:text-white transition-all duration-200 shadow-lg"
            >
              <Eye size={16} />
              View Details
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200">
            {name}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {description}
            </p>
          )}

          {/* Location & Rating */}
          <div className="flex items-center justify-between text-sm">
            {location && (
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <MapPin size={14} />
                <span className="truncate">{location}</span>
              </div>
            )}

            {rating && (
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={14} fill="currentColor" />
                <span className="font-medium">{rating}</span>
              </div>
            )}
          </div>

          {/* Action Button */}
          <Link
            to={`/details/${_id}`}
            className={`block text-center py-3 rounded-xl font-semibold transition-all duration-200 ${
              isPet
                ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl"
                : "bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl"
            }`}
          >
            {isPet ? "🐾 Adopt Now" : "🛒 View Product"}
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-orange-200/20 to-rose-200/20 dark:from-orange-800/20 dark:to-rose-800/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default PopularProductsCard;
