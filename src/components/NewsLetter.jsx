import React from 'react';

const NewsLetter = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden shadow-2xl">

          {/* Top colorful banner */}
          <div className="bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 px-6 py-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
              Join the ToyTopia Newsletter 🎉
            </h2>
            <p className="mt-2 text-center text-white/90 max-w-2xl mx-auto">
              Get short updates about new toys, fun ideas, and special offers for your kids.
            </p>
          </div>

          {/* Body */}
          <div className="bg-white p-6 sm:p-8 md:flex md:items-center md:justify-between gap-6">

            {/* Text block */}
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-purple-700">Be the first to know!</h3>
              <p className="mt-1 text-sm text-gray-600 max-w-md">
                Stay connected with the latest arrivals and exciting updates from ToyTopia.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">New toys</span>
                <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">Special offers</span>
                <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">Kids activities</span>
              </div>
            </div>

            {/* Input + Button (visual only) */}
            <div className="w-full md:w-[420px]">
              <div className="flex items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border-2 border-purple-200 placeholder:text-gray-400 focus:outline-none bg-purple-50"
                />
                <button
                  type="button"
                  className="px-5 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-200"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-teal-200 via-purple-100 to-pink-100">
            <div className="text-sm text-gray-700">Kids-safe content</div>
            <div className="text-sm text-gray-700">Fun updates every week</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;