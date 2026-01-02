"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { FirstLetterUp } from "@/utils/functions.utils";

/* 1️⃣ YOUR DATA */
const specialties = [
  { title: "Anaesthesiology", icon: "/icons/anaesthesiology.svg" },
  { title: "Cardiology", icon: "/icons/cardiology.svg" },
  { title: "Cardiothoracic Surgery", icon: "/icons/cardiothoracic.svg" },
  {
    title: "Clinical Immunology and Rheumatology",
    icon: "/icons/clinical.svg",
  },
  { title: "Dentistry and Oral Surgery", icon: "/icons/dentistry.svg" },
  {
    title: "Dermatology Aesthetics and Lasers",
    icon: "/icons/dermatology.svg",
  },
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

/* 2️⃣ ADD THIS BLOCK HERE (STEP-1) */
const ROWS_PER_COL = 3;

const chunkIntoColumns = (data, size) => {
  const columns = [];
  for (let i = 0; i < data.length; i += size) {
    columns.push(data.slice(i, i + size));
  }
  return columns;
};

/* prepare columns ONCE */


/* 3️⃣ COMPONENT */
const ImageSlider = ({data}) => {
  const progressRef = useRef(null);
  const progressFillRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const specialtyColumns = chunkIntoColumns(data?.content, ROWS_PER_COL);
  return (
    <div className="specialty-slider-wrap  px-0">

      <h3 className="decor-ti">
        {FirstLetterUp(data?.title)}
      </h3>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={5}
        spaceBetween={20}
        autoplay={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onInit={(swiper) => {
          const total = swiper.slides.length - swiper.params.slidesPerView + 1;
          const width = 100 / total;

          if (progressFillRef.current) {
            progressFillRef.current.style.width = `${width}%`;
          }
        }}
        onSlideChange={(swiper) => {
          const total = swiper.slides.length - swiper.params.slidesPerView + 1; // max slides index
          const index = swiper.activeIndex;
          const width = 1200 / total;

          if (progressFillRef.current) {
            progressFillRef.current.style.transform = `translateX(${
              index * width
            }%)`;
          }
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
        }}
        className="specialty-column-swiper"
      >
        {specialtyColumns.map((column, colIndex) => (
          <SwiperSlide key={colIndex} className="specialty-column-slide">
            <div className="specialty-column">
              {column.map((item, i) => (
                <div key={i} className="specialty-card">
                  <img src={item.img} alt={item.title} />
                  <p >{FirstLetterUp(item.title)}</p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="specialty-controls mt-5">
        <div className="specialty-progress">
          <span ref={progressFillRef} className="specialty-progress-fill" />
        </div>

        <div className="specialty-nav">
          <button ref={prevRef} className="specialty-prev">
            &#8592;
          </button>
          <button ref={nextRef} className="specialty-next">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
