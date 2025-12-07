import React from 'react';

const MeetHeroes = () => {
 
  return (
    <section className="py-12 px-6 md:px-20 bg-gradient-to-b from-amber-50 to-rose-50">
      <div className="max-w-5xl  mx-auto">

        {/* Title */}
        <h2 className="text-3xl  md:text-4xl font-extrabold text-gray-800 flex items-center gap-3 mb-6">
          🐾 Meet Our Pet Heroes
        </h2>

        <p className="text-gray-700 mb-10 max-w-2xl">
          These incredible humans opened their hearts and homes to rescued pets,
          giving them the love and care they always deserved.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div className="p-5 rounded-2xl bg-white shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold text-gray-800">✨ Ayesha Rahman</h3>
            <p className="text-gray-600 text-sm mt-1">
              Adopted a rescued kitten and volunteers weekly at PawBuddy.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold text-gray-800">✨ Tanvir Hasan</h3>
            <p className="text-gray-600 text-sm mt-1">
              Gave a forever home to an abandoned senior dog.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold text-gray-800">✨ Maria Islam</h3>
            <p className="text-gray-600 text-sm mt-1">
              Fosters pets recovering from injuries and promotes adoption.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold text-gray-800">✨ Arif Chowdhury</h3>
            <p className="text-gray-600 text-sm mt-1">
              Adopted two rescued puppies and supports rescue events.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}




export default MeetHeroes;