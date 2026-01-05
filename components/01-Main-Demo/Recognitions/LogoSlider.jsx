"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const logos = [
  "/images/Kahe/home/reg/ACCREDITION-LOGO-1.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-2.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-3.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-4.jpg",
    "/images/Kahe/home/reg/ACCREDITION-LOGO-5.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-6.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-7.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-8.jpg",
    "/images/Kahe/home/reg/ACCREDITION-LOGO-9.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-10.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-11.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-12.jpg",
    "/images/Kahe/home/reg/ACCREDITION-LOGO-13.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-14.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-15.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-16.jpg",
      "/images/Kahe/home/reg/ACCREDITION-LOGO-17.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-18.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-19.jpg",
  "/images/Kahe/home/reg/ACCREDITION-LOGO-20.jpg",
   "/images/Kahe/home/reg/ACCREDITION-LOGO-21.jpg",
    "/images/Kahe/home/reg/ACCREDITION-LOGO-22.jpg",

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
            <img src={logo} alt="recognition logo " />
            <div className="divider" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="logo-next">»</div>
    </div>
  );
}
