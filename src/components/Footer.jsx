import React from "react";
import pawBuddy from "../assets/pawbuddy.png";


const Footer = () => {
  return (
    <div>
      {/* Footer - Paw Theme */}
      <footer className="mt-16 bg-gradient-to-br from-orange-100 via-amber-100 to-rose-100 rounded-t-3xl shadow-xl border-t-4 border-orange-300">
        <div className="max-w-5xl mx-auto px-6 py-10 text-center space-y-5">
          
          <div className="flex justify-center items-center py-5 ">
        <img src={pawBuddy} alt="" height="130" width="130" />
      </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-semibold">
            <a
              href="#"
              className="px-4 py-2 rounded-full bg-orange-200 text-orange-800 hover:bg-orange-300 transition"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="px-4 py-2 rounded-full bg-amber-200 text-amber-800 hover:bg-amber-300 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="px-4 py-2 rounded-full bg-teal-200 text-teal-800 hover:bg-teal-300 transition"
            >
              Social Media
            </a>
          </div>

          <p className="text-xs text-orange-900/70 mt-6">
            © {new Date().getFullYear()} pawBuddy — Made with love for pets 🐾
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
