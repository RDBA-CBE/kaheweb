"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const logos = [
  "/logos/ugc.png",
  "/logos/aicte.png",
  "/logos/coa.png",
  "/logos/esnad.png",
  "/logos/naac.png",
  "/logos/nirf.png",
  "/logos/nirf-innovation.png",
];

export default function LogoSlider() {
  return (
    <div className="logo-slider-wrapper">
      {/* Custom arrows */}
      <div className="logo-prev">«</div>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: ".logo-prev",
          nextEl: ".logo-next",
        }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="logo-slider"
      >
        {logos.map((logo, i) => (
          <SwiperSlide key={i}>
            <img src={logo} alt="recognition logo" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="logo-next">»</div>
    </div>
  );
}
