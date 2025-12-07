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
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000, 
          disableOnInteraction: false, 
          
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper rounded-2xl overflow-hidden"
      >
        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                // "url('https://i.postimg.cc/8k7TW4GQ/eric-ward-ISg37AI2A-s-unsplash.jpg')",
                "url('https://i.postimg.cc/bNPF8Ymy/xan-griffin-UCFg-M-Aoj-Fg-unsplash.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Find Your Forever Friend
              </h2>
              <p className="text-lg opacity-90">
                Give a loving home to a pet waiting for a second chance.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/DZHkBVhK/yerlin-matu-Gtwi-Bmt-Jva-U-unsplash-(1).jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Adopt Love, Not Just a Pet
              </h2>
              <p className="text-lg opacity-90">
                Choose companionship, joy, and loyalty that lasts a lifetime.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/8k7TW4GQ/eric-ward-ISg37AI2A-s-unsplash.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Every Paw Deserves a Home
              </h2>
              <p className="text-lg opacity-90">
                Be the reason a furry friend gets a warm and caring family.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/bwJgNZb6/taylor-sondgeroth-lts-KOg-q-Gc-unsplash.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Rescue, Adopt, Love
              </h2>
              <p className="text-lg opacity-90">
                Change a life today, yours and your future pet’s
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/tThtmWQW/alvan-nee-73flbl-FUks-Y-unsplash.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
               Your New Best Friend Awaits
              </h2>
              <p className="text-lg opacity-90">
                Browse adorable pets ready to join your family and fill your home with joy.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/J7sBnjdc/andrew-s-ouo1hbiz-Wwo-unsplash-(1).jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Give a Paw a New Beginning
              </h2>
              <p className="text-lg opacity-90">
                Adoption is the first step toward a lifetime of cuddles and happiness!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
