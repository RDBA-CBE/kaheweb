"use client";

import Slider2 from "@/components/00-Kahe/common-components/Slider2";
import { FirstLetterUp } from "@/utils/functions.utils";
import { useRouter } from "next/navigation";
import React from "react";
import ImageGrid from "../common-components/ImageGrid";

const CampusEveIn = ({ data }) => {
    
  const router = useRouter();

  const camGal = data?.images.length > 10;
  const goToCamGal = () => {
    sessionStorage.setItem(
      "camGalData",
      JSON.stringify(data)
    );
    sessionStorage.setItem("camGalUrl", window.location.href);
    router.push(`/kahe/campus-gallery/${data.slug}`);
  };

  console.log("Campus?.convocation2024", data);
  return (
    <section className="section-bg1">
      {camGal ? (
        <>
          <div className="row mb-2 g-5 ">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <h4 className="decor-ti">
                  {FirstLetterUp(data?.title)}
                </h4>
              </div>
            </div>

            {camGal && (
              <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-lg-end">
                <div className="py-0">
                  <div
                    onClick={goToCamGal}
                    className="kahe-btn-primary rbt-btn hover-icon-reverse"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">View All Images</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Slider2 data={data?.images} />
        </>
      ) : (
        <ImageGrid data={data} />
      )}
    </section>
  );
};

export default CampusEveIn;
