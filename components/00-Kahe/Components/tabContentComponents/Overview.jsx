"use client";

import React, { useEffect, useState } from "react";

const Overview = ({ overviewContent }) => {
  const overviewItem = overviewContent?.find((item) => item.type == "overview");
  const visionItem = overviewContent?.find((item) => item.type == "vision");
  const missionItem = overviewContent?.find((item) => item.type == "mission");

   const [sliceCount, setSliceCount] = useState(2); 

  useEffect(() => {
    const updateSlice = () => {
      if (window.innerWidth >= 1750) {
        setSliceCount(3);
      } else {
        setSliceCount(2);
      }
    };

    updateSlice(); // initial check
    window.addEventListener("resize", updateSlice);

    return () => window.removeEventListener("resize", updateSlice);
  }, []);

  if (!overviewItem) return null;

  const firstPart = overviewItem.contents.slice(0, sliceCount);
  const remaining = overviewItem.contents.slice(sliceCount);

  return (
    <div className="overview-main-wrapper mt--30" id="overview">
      <div className="section-title">
        <h2 className="main-ti" dangerouslySetInnerHTML={{ __html: overviewItem.subTitle }}></h2>
      </div>

      <div className="overview-flex">
        <div className="overview-left">
          {firstPart.map((text, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
          ))}
        </div>

        <div className="overview-right d-none d-xl-block mb-5">
          <img src={overviewItem.image} alt="overview image" />
        </div>
      </div>

      {/* remaining paragraphs below image */}
      {remaining.map((text, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
      ))}

      {visionItem && (
        <div className="mt-4">
          <div className="section-title">
            <h3 className="main-sub-ti" dangerouslySetInnerHTML={{ __html: visionItem.subTitle }}></h3>
          </div>
          <ul className="rbt-list-style-1">
            {visionItem.content.map((v, i) => (
              <li key={i}>
                <i className="feather-check"></i>
                <span dangerouslySetInnerHTML={{ __html: v }}></span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {missionItem && (
        <div className="mt-4">
          <div className="section-title">
            <h3 className="main-sub-ti" dangerouslySetInnerHTML={{ __html: missionItem.subTitle }}></h3>
          </div>
          <ul className="rbt-list-style-1">
            {missionItem.content.map((v, i) => (
              <li key={i}>
                <i className="feather-check"></i>
                <span dangerouslySetInnerHTML={{ __html: v }}></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Overview;

