"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/images/Kahe/home/banner1.jpg",
    title: "ENABLE | ENLIGHTEN | ENRICH",
    subtitle: "Empowering Future Leaders",
  },
  {
   image: "/images/Kahe/home/banner2.jpg",
   title: "INSPIRE | INNOVATE | IMPACT",
    subtitle: "Designed for Excellence",
  },
   {
   image: "/images/Kahe/home/banner1.jpg",
   title: "EDUCATE | EMPOWER | EXCEL",
    subtitle: "Designed for Excellence",
  },
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 4000 }}
      loop
      pagination={{ clickable: true }}
      navigation
      className="hero-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay" />
            <div className="hero-content">
              <h1>{slide.title}</h1>
              {/* <p>{slide.subtitle}</p> */}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
