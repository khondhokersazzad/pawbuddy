import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer - Vibrant Kids Theme */}
<footer className="mt-16 bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 rounded-t-3xl shadow-xl border-t-4 border-pink-300">
  <div className="max-w-5xl mx-auto px-6 py-10 text-center space-y-5">

    <h3 className="text-2xl font-extrabold text-purple-700">
      toyTopia
    </h3>

    <p className="text-sm text-purple-900/80 max-w-md mx-auto">
      Bringing joy, colors, and imagination to every little heart.
    </p>

    {/* Links */}
    <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-semibold">
      <a
        href="#"
        className="px-4 py-2 rounded-full bg-pink-200 text-pink-800 hover:bg-pink-300 transition"
      >
        Terms & Conditions
      </a>

      <a
        href="#"
        className="px-4 py-2 rounded-full bg-purple-200 text-purple-800 hover:bg-purple-300 transition"
      >
        Privacy Policy
      </a>

      <a
        href="#"
        className="px-4 py-2 rounded-full bg-blue-200 text-blue-800 hover:bg-blue-300 transition"
      >
        Social Media
      </a>
    </div>

    <p className="text-xs text-purple-900/70 mt-6">
      © {new Date().getFullYear()} toyTopia — Made with joy for kids 💛
    </p>
  </div>
</footer>


    </div>
  );
};

export default Footer;
