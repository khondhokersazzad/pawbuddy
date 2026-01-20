import React from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Heart,
  ShoppingBag,
  Utensils,
  Sparkles,
} from "lucide-react";

const CategoryCard = ({ title, image }) => {
  // Get appropriate icon for each category
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "pets":
        return <Heart size={24} />;
      case "accessories":
        return <ShoppingBag size={24} />;
      case "pet food":
        return <Utensils size={24} />;
      case "pet care products":
        return <Sparkles size={24} />;
      default:
        return <Heart size={24} />;
    }
  };

  // Get category-specific colors
  const getCategoryColors = (category) => {
    switch (category.toLowerCase()) {
      case "pets":
        return {
          gradient: "from-green-500 to-emerald-500",
          hoverGradient: "hover:from-green-600 hover:to-emerald-600",
          iconBg: "bg-green-500/20",
          textColor: "text-green-700 dark:text-green-300",
        };
      case "accessories":
        return {
          gradient: "from-blue-500 to-cyan-500",
          hoverGradient: "hover:from-blue-600 hover:to-cyan-600",
          iconBg: "bg-blue-500/20",
          textColor: "text-blue-700 dark:text-blue-300",
        };
      case "pet food":
        return {
          gradient: "from-orange-500 to-red-500",
          hoverGradient: "hover:from-orange-600 hover:to-red-600",
          iconBg: "bg-orange-500/20",
          textColor: "text-orange-700 dark:text-orange-300",
        };
      case "pet care products":
        return {
          gradient: "from-purple-500 to-pink-500",
          hoverGradient: "hover:from-purple-600 hover:to-pink-600",
          iconBg: "bg-purple-500/20",
          textColor: "text-purple-700 dark:text-purple-300",
        };
      default:
        return {
          gradient: "from-gray-500 to-gray-600",
          hoverGradient: "hover:from-gray-600 hover:to-gray-700",
          iconBg: "bg-gray-500/20",
          textColor: "text-gray-700 dark:text-gray-300",
        };
    }
  };

  const colors = getCategoryColors(title);

  return (
    <Link to={`/category/${title.toLowerCase()}`} className="group block">
      <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-slate-800 border border-orange-100 dark:border-slate-700">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Top Section - Icon */}
          <div className="flex justify-end">
            <div
              className={`p-3 rounded-full ${colors.iconBg} backdrop-blur-sm text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
            >
              {getCategoryIcon(title)}
            </div>
          </div>

          {/* Bottom Section - Title and CTA */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:translate-x-2">
                {title}
              </h3>
              <p className="text-white/80 text-sm">
                Discover amazing {title.toLowerCase()} for your furry friends
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${colors.gradient} ${colors.hoverGradient} text-white font-semibold rounded-full transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              <span>Explore {title}</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-white/20 border-l-[30px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
};

export default CategoryCard;
