// src/components/HomeSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderDemo() {
  const slides = [
    {
      id: 1,
      img: "https://i.postimg.cc/zXt5Lh7w/anna-myslowska-kiczek-s7n-Hw-Cnq3c8-unsplash.jpg",
      title: "Fun & Creative Toys",
      desc: "Inspire your child's imagination with our building blocks.",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/D03QPmcP/pexels-bertellifotografia-19230068.jpg",
      title: "Adventure Awaits!",
      desc: "Outdoor toys for endless fun and learning.",
    },
    {
      id: 3,
      img: "https://i.ibb.co/52ZjZ3k/toy3.jpg",
      title: "Smart & Educational",
      desc: "Develop creativity with science and puzzle toys.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl shadow-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-white px-4 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="max-w-xl mx-auto text-lg md:text-xl opacity-90">
                  {slide.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
