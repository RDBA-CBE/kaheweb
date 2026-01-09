import React from "react";
import ContentCard from "./ContentCard";
import Slider from "../common-components/Slider";
import Link from "next/link";

const SliderContent = ({ data, order }) => {
  return (
    <>
      <div className="slider-con">
        <div className="row py-5">
          <div className={`row gap-5 imageLink-sec ${order ? `${order}` : ""}`}>
            <div className={`col-8 imageLink-item1 ${order ? `${order}` : ""}`}>
              <ContentCard data={data} />
              {data?.btn && (
                <div className="py-4">
                  <Link
                    className="kahe-btn-primary rbt-btn hover-icon-reverse"
                    href={data?.btn?.btnUrl}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">{data?.btn?.btnText}</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {data?.src && (
              <div className="col-4 imageLink-item2 slider">
                {data?.src.length > 1 ? (
                  <div className="banner-card pb--60 swiper rbt-dot-bottom-center banner-swiper-active">
                    <Slider data={data?.src} />
                  </div>
                ) : (
                  <img
                    src={data?.src[0]?.src}
                    alt={data?.src[0]?.alt ?? "Research Congress"}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderContent;
