import React from "react";
import pawBuddy from "../assets/pawbuddy.png";


const Footer = () => {
  return (
    <footer
  className="
    mt-16 rounded-t-3xl border-t
    bg-gradient-to-br
    from-orange-100 via-amber-100 to-rose-100
    dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
    border-orange-300 dark:border-slate-700
  "
>
  <div className="max-w-6xl mx-auto px-6 py-12 space-y-8 text-center">

    {/* Logo */}
    <div className="flex justify-center">
      <img
        src={pawBuddy}
        alt="PawBuddy Logo"
        height="120"
        width="120"
      />
    </div>

    {/* Navigation Links */}
    <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
      <a
        href="/terms"
        className="
          px-4 py-2 rounded-full
          bg-orange-200 text-orange-800
          hover:bg-orange-300
          dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700
          transition
        "
      >
        Terms & Conditions
      </a>

      <a
        href="/privacy"
        className="
          px-4 py-2 rounded-full
          bg-amber-200 text-amber-800
          hover:bg-amber-300
          dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700
          transition
        "
      >
        Privacy Policy
      </a>

      <a
        href="/about"
        className="
          px-4 py-2 rounded-full
          bg-teal-200 text-teal-800
          hover:bg-teal-300
          dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700
          transition
        "
      >
        About PawBuddy
      </a>
    </div>

    {/* Contact Info */}
    <div className="text-sm space-y-1 text-orange-900/80 dark:text-slate-400">
      <p>Email: <a href="mailto:support@pawbuddy.com" className="hover:underline">support@pawbuddy.com</a></p>
      <p>Phone: <a href="tel:+8801700000000" className="hover:underline">+880 17 0000 0000</a></p>
      <p>Location: Bangladesh</p>
    </div>

    {/* Social Links */}
    <div className="flex justify-center gap-6">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-700 hover:text-orange-900 dark:text-slate-400 dark:hover:text-white transition"
      >
        Facebook
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-700 hover:text-orange-900 dark:text-slate-400 dark:hover:text-white transition"
      >
        Instagram
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-700 hover:text-orange-900 dark:text-slate-400 dark:hover:text-white transition"
      >
        LinkedIn
      </a>
    </div>

    {/* Copyright */}
    <p className="text-xs text-orange-900/70 dark:text-slate-500">
      © {new Date().getFullYear()} PawBuddy — Made with love for pets 🐾
    </p>

  </div>
</footer>

  );
};

export default Footer;
