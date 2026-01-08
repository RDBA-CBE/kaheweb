import { FirstLetterUp } from "@/utils/functions.utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Vision from "../About/Vission";
import ImageLink from "../ImageLink";
import ImageCard from "../ImageCard";

const StudentsCom = ({ data }) => {
  return (
    <div className="row row--15 mt_dec--30 align-items-stretch">
      <div className="section-wid section-title mt-5">
        <h2
          className="decor-ti"
          dangerouslySetInnerHTML={{
            __html: FirstLetterUp(data?.title),
          }}
        ></h2>
      </div>
     

      {data?.content?.map((item, index) => {
        return (
          <div key={index}>
            {(item?.data1 || item?.data2) && (
              <div className="section-wid section-bg1">
                <ImageCard visionItem={item?.data1} missionItem={item?.data2} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StudentsCom;
