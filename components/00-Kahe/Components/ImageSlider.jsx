"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const specialties = [
  { title: "Anaesthesiology", icon: "/icons/anaesthesiology.svg" },
  { title: "Cardiology", icon: "/icons/cardiology.svg" },
  { title: "Cardiothoracic Surgery", icon: "/icons/cardiothoracic.svg" },
  { title: "Clinical Immunology and Rheumatology", icon: "/icons/clinical.svg" },
  { title: "Dentistry and Oral Surgery", icon: "/icons/dentistry.svg" },
  { title: "Dermatology Aesthetics and Lasers", icon: "/icons/dermatology.svg" },
  { title: "Neurology", icon: "/icons/neurology.svg" },
  { title: "Neurosurgery", icon: "/icons/neurosurgery.svg" },
  { title: "Nuclear Medicine", icon: "/icons/nuclear.svg" },
  { title: "Obstetrics & Gynaecology", icon: "/icons/obstetrics.svg" },
  { title: "Oncology", icon: "/icons/oncology.svg" },
  { title: "Ophthalmology", icon: "/icons/ophthalmology.svg" },
  { title: "Urology", icon: "/icons/urology.svg" },
  { title: "Orthopaedics", icon: "/icons/ortho.svg" },
  { title: "ENT", icon: "/icons/ent.svg" },
  { title: "Psychiatry", icon: "/icons/psychiatry.svg" },
  { title: "Pulmonology", icon: "/icons/pulmo.svg" },
  { title: "Radiology", icon: "/icons/radiology.svg" },
];

const ImageSlider = () => {
  return (
    <div className="specialty-slider-wrap container py-4 px-0">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={5}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 5 },
        }}
        className="specialty-multirow-swiper"
      >
        {specialties.map((item, index) => (
          <SwiperSlide key={index} className="specialty-multirow-slide">
            <div className="specialty-slide-card text-center p-3">
              <img
                src={item.icon}
                alt={item.title}
                className="specialty-slide-icon mb-2"
              />
              <h6 className="specialty-slide-title">{item.title}</h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
