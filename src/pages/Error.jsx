import React from 'react';

const Error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-amber-200 px-4">
      <title>Error</title>

      <h1 className="text-8xl font-extrabold text-orange-700 drop-shadow-md">
        404
      </h1>

      <p className="text-2xl mt-4 text-orange-800 font-semibold">
        Oops! Page Not Found
      </p>

      <p className="text-lg text-orange-700 mt-2 max-w-md text-center">
        Looks like this paw wandered off. Let’s get you back on track!
      </p>

      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-orange-700 transition font-bold"
      >
        Go Back Home
      </button>

      <div className="mt-10 animate-bounce">
        <span className="text-6xl">🐾</span>
      </div>
    </div>
  );
};

export default Error;
