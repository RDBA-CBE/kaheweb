"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Slider2 = ({ data, start, end }) => {
  return (
    <Swiper
      className="rbt-course-slider"
      modules={[Pagination, Autoplay]}
      grabCursor
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        el: ".rbt-swiper-pagination",
        clickable: true,
      }}
      spaceBetween={24}
      slidesPerView={4}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      }}
    >
      {data &&
        data.slice(start, end).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rbt-card variation-01 rbt-hover p-0">
              <div className="rbt-card-img">
                <Link href={`/course-details/${item.id}`}>
                  <img
                    src={item.src}
                    width={710}
                    height={488}
                    alt={item.alt ?? "Kahe image"}
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

      <div className="rbt-swiper-pagination" style={{ bottom: "-40px" }} />
    </Swiper>
  );
};

export default Slider2;
