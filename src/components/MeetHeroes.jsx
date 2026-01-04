import React from "react";

export default function PetHeroesTestimonial() {
  const heroes = [
    {
      name: "Ayesha Rahman",
      text: "I adopted a tiny kitten from PawBuddy , she brought so much joy into our home. I also volunteer weekly now.",
      img: "https://i.postimg.cc/kMbYdrcm/albert-vinas-z-X700UTltlg-unsplash.jpg",
    },
    {
      name: "Tanvir Hasan",
      text: "We gave a senior dog a forever home. The bond we formed is incredible , adoption changed our lives.",
      img: "https://i.postimg.cc/kMBwF0ZN/amir-seilsepour-Pc0Toyo-R5Xo-unsplash.jpg",
    },
    {
      name: "Maria Islam",
      text: "I foster rescued pets until they are ready for adoption. Seeing them healthy and happy is priceless.",
      img: "https://i.postimg.cc/8zHnnhbd/giorgio-trovato-BUl-OJ2Ag-24-unsplash.jpg",
    },
  ];

  return (
    <section
      className="
    py-16 px-6 md:px-12 my-24
    bg-gradient-to-br
    from-amber-200 via-rose-200 to-orange-100
    dark:from-[#1f1b2e] dark:via-[#1b2430] dark:to-[#0f172a]
  "
    >
      <div className="max-w-6xl mx-auto text-center">
        <p
          className="text-sm uppercase tracking-wider mb-2
      text-gray-500 dark:text-slate-400"
        >
          Testimonials
        </p>

        <h2
          className="font-bold py-6 text-3xl leading-[1.1] sm:text-3xl md:text-5xl
      text-slate-900 dark:text-slate-100"
        >
          What Our Pet Heroes Say about PawBuddy!!
        </h2>

        <p
          className="max-w-2xl mx-auto mb-10
      text-gray-600 dark:text-slate-400"
        >
          Heartfelt stories from adopters and caregivers who chose compassion,
          their experiences inspire others to adopt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {heroes.map((h, idx) => (
            <div
              key={idx}
              className="
            bg-white dark:bg-slate-900
            rounded-xl p-8 text-center
            shadow-lg dark:shadow-black/30
            flex flex-col items-center justify-between
          "
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center mb-4">
                  <svg
                    className="h-8 w-8 text-yellow-400 dark:text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
                  </svg>
                </div>

                <p
                  className="text-sm md:text-base leading-relaxed
              text-gray-700 dark:text-slate-300"
                >
                  “{h.text}”
                </p>
              </div>

              <div className="mt-6 flex flex-col items-center">
                <div
                  className="h-16 w-16 rounded-full overflow-hidden shadow
              ring-2 ring-amber-200 dark:ring-slate-700"
                >
                  <img
                    src={h.img}
                    alt={h.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div
                  className="mt-3 font-semibold
              text-gray-800 dark:text-slate-200"
                >
                  {h.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
