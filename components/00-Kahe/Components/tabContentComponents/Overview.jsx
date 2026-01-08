"use client";

import {
  FirstLetterUp,
  splitChar,
  splitFirstAndRemaining,
} from "@/utils/functions.utils";
import React, { useEffect, useState } from "react";
import ImageCard from "../ImageCard";
import Slider from "../../common-components/Slider";
import CounterStyle from "../CounterStyle";
import ImageLink from "../ImageLink";

const Overview = ({ overviewContent }) => {
  const overviewItem = overviewContent?.find(
    (item) => item.type === "overview"
  );
  const visionItem = overviewContent?.find((item) => item.type === "vision");
  const missionItem = overviewContent?.find((item) => item.type === "mission");

  const highlightItem = overviewContent?.find((item) => item.type === "highlights");
  const hodItem = overviewContent?.find((item) => item.type === "hod");

  const [splitLimit, setSplitLimit] = useState(350);
  const [splitResult, setSplitResult] = useState({
    firstPart: "",
    remaining: "",
  });

  // Decide split size by screen width
  const getSplitLimit = (width) => {
    if (width >= 1750) return 450;
    if (width >= 1200) return 400;
    if (width >= 992) return 350;
    if (width >= 768) return 300;
    return 250;
  };

  useEffect(() => {
    const updateSplit = () => {
      setSplitLimit(getSplitLimit(window.innerWidth));
    };

    updateSplit(); // initial run
    window.addEventListener("resize", updateSplit);

    return () => window.removeEventListener("resize", updateSplit);
  }, []);

  // Split content when overviewItem or splitLimit changes
  useEffect(() => {
    if (overviewItem?.contents) {
      // Use splitFirstAndRemaining with 2 paragraphs worth of content
      const result = splitFirstAndRemaining(
        overviewItem.contents,
        splitLimit * 2
      );
      setSplitResult(result);
    }
  }, [overviewItem, splitLimit]);

  if (!overviewItem) return null;

  return (
    <div className="overview-main-wrapper" id="overview">
      <div className="overview-flex section-bg1 d-xl-flex ">
        <div className="overview-left">
          <div className="overview-left-in">
            <h2
              className="decor-ti"
              dangerouslySetInnerHTML={{
                __html: FirstLetterUp(overviewItem.subTitle),
              }}
            ></h2>

            {/* Render first part with proper sentence splitting */}
            {splitResult.firstPart && (
              <div className="first-part-content">
                {splitChar(splitResult.firstPart, splitLimit)}
              </div>
            )}
          </div>
        </div>

        {Array.isArray(overviewItem.image) && overviewItem.image.length > 0 ? (
          <div className="overview-right pb--60 swiper rbt-dot-bottom-center banner-swiper-active">
            <Slider data={overviewItem.image} />
          </div>
        ) : (
          <div className="overview-right">
            <img src={overviewItem.image} alt="overview image" />
          </div>
        )}
      </div>

      {/* Render remaining content if exists */}
      {splitResult.remaining && (
        <div className="section-bg2" style={{ margin: "40px 0" }}>
          <div className="section-wid">
            <div className="remaining-content">
              {splitChar(splitResult.remaining, splitLimit)}
            </div>
          </div>
        </div>
      )}

      {(visionItem || missionItem) && (
        <div className="section-wid section-bg1">
          <ImageCard visionItem={visionItem} missionItem={missionItem} />
        </div>
      )}

     {highlightItem && (
       <section className="section-bg1">
         <CounterStyle data={highlightItem?.items} />
       </section>
     )}

     {hodItem &&
      <section className="section-wid section-bg1">
        <ImageLink data={hodItem?.items} />
      </section>
      
     }
    </div>
  );
};

export default Overview;
