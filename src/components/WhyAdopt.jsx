import React from "react";

export default function WhyAdopt() {
  const features = [
    {
      title: "Save a Life",
      text:
        "Many rescued pets come from unsafe environments. Your adoption gives them love, care and a safe home.",
      // simple paw SVG will inherit fill color
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current" aria-hidden="true">
          <path d="M7 3.5C8 1.5 10.5 1 12 3s1 4 0 5-4 1-5-1 0-3.5 0-3.5zM17 3.5C18 1.5 20.5 1 22 3s1 4 0 5-4 1-5-1 0-3.5 0-3.5zM12 8c2 0 4 1.5 4 4s-1.5 4-4 4-4-1.5-4-4 2-4 4-4zM5 14c1.5 0 3 1 3 2.5S6.5 19 5 19 2 18 2 16.5 3.5 14 5 14zM19 14c1.5 0 3 1 3 2.5S20.5 19 19 19s-3-1-3-2.5S17.5 14 19 14z" />
        </svg>
      ),
    },
    {
      title: "Choose Compassion",
      text:
        "Adoption supports ethical care and rehabilitation instead of contributing to commercial breeding.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current" aria-hidden="true">
          <path d="M12 2l1.9 4.3L18.5 8l-3.1 2.1L15 14l-3-2-3 2 .6-3.9L5.5 8l4.6-1.7L12 2z" />
        </svg>
      ),
    },
    {
      title: "Be Their Forever Friend",
      text:
        "Adopted pets form deep bonds — their trust and loyalty last a lifetime.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current" aria-hidden="true">
          <path d="M12 21s-6-4.5-9-8C1 8 6 4 12 6c6-2 11 2 9 7-3 3.5-9 8-9 8z" />
        </svg>
      ),
    },
    {
      title: "Reduce Homelessness",
      text:
        "Every adoption reduces the strain on shelters and helps build a kinder community for animals.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current" aria-hidden="true">
          <path d="M12 2L2 7v6c0 5 4 9 10 9s10-4 10-9V7l-10-5z" />
        </svg>
      ),
    },
    {
      title: "Health & Support",
      text:
        "Rescued pets receive vet care and rehabilitation — adoption gives them a healthier future.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current" aria-hidden="true">
          <path d="M12 2a7 7 0 00-7 7c0 3 2 5 4 6l3 3 3-3c2-1 4-3 4-6a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Community & Volunteering",
      text:
        "Adopters often become volunteers and advocates, helping more animals find loving homes.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current" aria-hidden="true">
          <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-3.33 0-10 1.67-10 5v1h20v-1c0-3.33-6.67-5-10-5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Why Adopt from PawBuddy?
        </h2>

        <p className="max-w-[85%] leading-normal text-gray-600 sm:text-lg sm:leading-7">
          Adopting a pet is more than bringing home a friend — it’s giving a second chance to a life that truly needs you.
          Every day, countless animals wait for a safe, loving home. When you adopt from <span className="font-semibold">PawBuddy</span>, you become part of their rescue story.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="text-teal-500">{f.icon}</div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
