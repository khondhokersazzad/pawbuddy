import React from "react";
import { Link } from "react-router";

export default function WhyAdopt() {
  return (
    <section className="py-12 px-6 md:px-20 bg-gradient-to-b from-rose-50 via-amber-50 to-rose-50">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 flex items-center gap-3">
          <span className="text-2xl md:text-3xl">🐾</span>
          Why Adopt from PawBuddy?
        </h2>

        {/* Intro Text */}
        <p className="mt-4 text-gray-700 leading-relaxed">
          Adopting a pet is more than bringing home a friend — it’s giving a second chance to a life that truly needs you.
          Every day, countless animals wait for a safe, loving home. When you adopt from 
          <span className="font-semibold"> PawBuddy</span>, you become part of their rescue story.
        </p>

        {/* Points */}
        <div className="mt-8 space-y-6">

          <div className="flex gap-3">
            <div className="h-30 w-30 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center text-3xl">❤️</div>
            <div>
              <h3 className="font-semibold text-xl text-gray-800">Save a Life</h3>
              <p className="text-gray-600 text-lg">
                Many rescued pets come from unsafe environments. Your adoption gives them love and safety.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="h-30 w-30 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-3xl">🐶</div>
            <div>
              <h3 className="font-semibold text-xl text-gray-800">Choose Compassion</h3>
              <p className="text-gray-600 text-lg">
                Adoption supports ethical care and rescue — not breeding mills or commercial exploitation.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="h-30 w-30 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-3xl">🤝</div>
            <div>
              <h3 className="font-semibold text-xl text-gray-800">Be Their Forever Friend</h3>
              <p className="text-gray-600 text-lg">
                Adopted pets bond deeply with their humans — their trust and gratitude are unmatched.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="h-30 w-30 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-3xl">🌿</div>
            <div>
              <h3 className="font-semibold text-xl text-gray-800">A Kinder World</h3>
              <p className="text-gray-600 text-lg">
                Every adoption helps reduce pet homelessness and creates a more compassionate world.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
