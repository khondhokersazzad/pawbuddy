import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      img: "https://i.postimg.cc/bNPF8Ymy/xan-griffin-UCFg-M-Aoj-Fg-unsplash.jpg",
      title: "Find Your Forever Friend",
      desc: "Give a loving home to a pet waiting for a second chance.",
    },
    {
      img: "https://i.postimg.cc/DZHkBVhK/yerlin-matu-Gtwi-Bmt-Jva-U-unsplash-(1).jpg",
      title: "Adopt Love, Not Just a Pet",
      desc: "Choose companionship, joy, and loyalty that lasts a lifetime.",
    },
    {
      img: "https://i.postimg.cc/8k7TW4GQ/eric-ward-ISg37AI2A-s-unsplash.jpg",
      title: "Every Paw Deserves a Home",
      desc: "Be the reason a furry friend gets a warm and caring family.",
    },
    {
      img: "https://i.postimg.cc/bwJgNZb6/taylor-sondgeroth-lts-KOg-q-Gc-unsplash.jpg",
      title: "Rescue, Adopt, Love",
      desc: "Change a life today, yours and your future pet’s.",
    },
    {
      img: "https://i.postimg.cc/tThtmWQW/alvan-nee-73flbl-FUks-Y-unsplash.jpg",
      title: "Your New Best Friend Awaits",
      desc: "Browse adorable pets ready to join your family and fill your home with joy.",
    },
    {
      img: "https://i.postimg.cc/J7sBnjdc/andrew-s-ouo1hbiz-Wwo-unsplash-(1).jpg",
      title: "Give a Paw a New Beginning",
      desc: "Adoption is the first step toward a lifetime of cuddles and happiness!",
    },
  ];

  return (
    <div>
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper rounded-2xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[75vh] flex items-center justify-center">
              {/* Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative text-center text-white px-6 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="text-lg opacity-90">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
