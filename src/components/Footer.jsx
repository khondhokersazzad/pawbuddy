import React from "react";
import pawBuddy from "../assets/pawbuddy.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Decorative paw prints background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🐾</div>
        <div className="absolute top-32 right-20 text-4xl">🐾</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">🐾</div>
        <div className="absolute bottom-40 right-1/3 text-3xl">🐾</div>
      </div>

      {/* Main footer content */}
      <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Wave decoration */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white dark:fill-slate-950"
            ></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
          {/* Top section with logo and tagline */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src={pawBuddy}
                  alt="PawBuddy Logo"
                  className="h-24 w-24 rounded-full shadow-lg ring-4 ring-orange-200 dark:ring-slate-700"
                />
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                  ❤️
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-orange-800 dark:text-orange-300 mb-2 chewy">
              PawBuddy
            </h2>
            <p className="text-lg text-orange-600 dark:text-orange-400 max-w-2xl mx-auto">
              Connecting loving families with adorable pets and providing
              everything they need to thrive together
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 flex items-center gap-2">
                <span className="text-xl">🏠</span>
                Quick Links
              </h3>
              <div className="space-y-2">
                {[
                  { name: "Adopt a Pet", icon: "🐕" },
                  { name: "Pet Accessories", icon: "🎾" },
                  { name: "Pet Care Tips", icon: "💡" },
                  { name: "Success Stories", icon: "⭐" },
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-2 text-orange-700 dark:text-orange-400 hover:text-orange-900 dark:hover:text-orange-200 transition-colors duration-200 group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 flex items-center gap-2">
                <span className="text-xl">🐾</span>
                Categories
              </h3>
              <div className="space-y-2">
                {[
                  { name: "Pets", icon: "🐕", link: "/category/pets" },
                  {
                    name: "Accessories",
                    icon: "🎾",
                    link: "/category/accessories",
                  },
                  { name: "Pet Food", icon: "🍖", link: "/category/pet food" },
                  {
                    name: "Pet Care Products",
                    icon: "🧴",
                    link: "/category/pet care products",
                  },
                ].map((category, index) => (
                  <a
                    key={index}
                    href={category.link}
                    className="flex items-center gap-2 text-orange-700 dark:text-orange-400 hover:text-orange-900 dark:hover:text-orange-200 transition-colors duration-200 group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-200">
                      {category.icon}
                    </span>
                    {category.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 flex items-center gap-2">
                <span className="text-xl">📞</span>
                Get in Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                  <span className="text-lg">📧</span>
                  <a
                    href="mailto:support@pawbuddy.com"
                    className="hover:text-orange-900 dark:hover:text-orange-200 transition-colors"
                  >
                    support@pawbuddy.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                  <span className="text-lg">📱</span>
                  <a
                    href="tel:+8801700000000"
                    className="hover:text-orange-900 dark:hover:text-orange-200 transition-colors"
                  >
                    +880 17 0000 0000
                  </a>
                </div>
                <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                  <span className="text-lg">📍</span>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 flex items-center gap-2">
                <span className="text-xl">💌</span>
                Stay Updated
              </h3>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                Get the latest pet care tips and adoption updates!
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg border border-orange-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-orange-800 dark:text-orange-200 placeholder-orange-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-500"
                />
                <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-400 to-rose-400 hover:from-orange-500 hover:to-rose-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Subscribe 🐾
                </button>
              </div>
            </div>
          </div>

          {/* Social Media & Legal Links */}
          <div className="border-t border-orange-200 dark:border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Media */}
              <div className="flex items-center gap-6">
                <span className="text-orange-700 dark:text-orange-400 font-medium">
                  Follow us:
                </span>
                {[
                  {
                    name: "Facebook",
                    icon: Facebook,
                    url: "https://facebook.com",
                    color: "text-blue-600 hover:text-blue-700",
                  },
                  {
                    name: "Instagram",
                    icon: Instagram,
                    url: "https://instagram.com",
                    color: "text-pink-600 hover:text-pink-700",
                  },
                  {
                    name: "Twitter",
                    icon: Twitter,
                    url: "https://twitter.com",
                    color: "text-sky-500 hover:text-sky-600",
                  },
                  {
                    name: "YouTube",
                    icon: Youtube,
                    url: "https://youtube.com",
                    color: "text-red-600 hover:text-red-700",
                  },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-white/10`}
                      title={social.name}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {[
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Cookie Policy",
                  "About Us",
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-200 transition-colors duration-200 hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 pt-6 border-t border-orange-100 dark:border-slate-800">
              <p className="text-orange-600 dark:text-orange-400 flex items-center justify-center gap-2 flex-wrap">
                <span>© {new Date().getFullYear()} PawBuddy</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  Made with{" "}
                  <span className="text-red-500 animate-pulse">❤️</span> for
                  pets and their families
                </span>
                <span className="text-xl">🐾</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
