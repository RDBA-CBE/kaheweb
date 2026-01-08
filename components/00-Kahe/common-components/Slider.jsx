import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";


const Slider = ({ data, start, end }) => {
  return (
    <>
      <Swiper
        className="swiper-wrapper"
        effect={"cards"}
        modules={[EffectCards, Pagination, Autoplay]}
        grabCursor={true}
        // autoplay={true}
        pagination={{
          el: ".rbt-swiper-pagination",
          clickable: true,
        }}
      >
        {data &&
          data.slice(start, end).map((data, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="rbt-card variation-01 rbt-hover p-0">
                <div className="rbt-card-img">
                  <Link href={`/course-details/${data.id}`}>
                    <img
                      src={data.src}
                      width={710}
                      height={488}
                      alt={data.alt ?? "Kahe image"}
                    />
                    {/* <div className="rbt-badge-3 bg-white">
                      <span>-{data.discount}%</span>
                      <span>Off</span>
                    </div> */}
                  </Link>
                </div>
                {/* <div className="rbt-card-body">
                 
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        <div
          className="rbt-swiper-pagination"
          style={{ bottom: "-40px" }}
        ></div>
      </Swiper>
    </>
  );
};

export default Slider;
