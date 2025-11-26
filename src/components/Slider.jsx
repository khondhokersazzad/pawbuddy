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
          delay: 2000, 
          disableOnInteraction: false, 
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper rounded-2xl overflow-hidden"
      >
        <SwiperSlide>
          <div
            className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/4yHj3Knh/Header-Banner-Desktop.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Build Your Imagination
              </h2>
              <p className="text-lg opacity-90">
                Create endless designs with colorful Lego blocks.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/tRdMBHWC/360-F-613927112-jnv8zi6Bao-MCx-Ud3VIUh-UFDlc-Zteq-GQY.webp')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Speed & Adventure
              </h2>
              <p className="text-lg opacity-90">
                Race through fun tracks with your own car collection.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/GpkFbbct/jpeg-optimizer-Building-a-Robot.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Smart Robot Builders
              </h2>
              <p className="text-lg opacity-90">
                Assemble and program your own robot buddy!
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/g2yjJjZr/81c-Js-Fab-GPL.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Creative Magnetic Tiles
              </h2>
              <p className="text-lg opacity-90">
                Build towers, houses, and patterns that glow!
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/KvpS52hJ/download.webp')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Dinosaur Adventures
              </h2>
              <p className="text-lg opacity-90">
                Step into the Jurassic world with roaring dinos!
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/kXmBdW28/premium-photo-1661448604365-4ef469471a6d.avif')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                All Aboard the Toy Train
              </h2>
              <p className="text-lg opacity-90">
                Watch your electric train light up the track!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
