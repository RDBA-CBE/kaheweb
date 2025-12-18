"use client";

import { useEffect, useState } from "react";
import {
  FirstLetterUp,
  splitChar,
  splitFirstAndRemaining,
} from "@/utils/functions.utils";

// Decide split size by screen width
const getSplitLimit = (width) => {
  if (width >= 1500) return 900; 
  if (width >= 1130) return 700; 
  if (width >= 992) return 600;   
  if (width >= 768) return 650; 
  return 400;                     
};

const ImageLink = ({ data }) => {
  const [splitLimit, setSplitLimit] = useState(900);

  useEffect(() => {
    const updateSplit = () => {
      setSplitLimit(getSplitLimit(window.innerWidth));
    };

    updateSplit(); // initial run
    window.addEventListener("resize", updateSplit);

    return () => window.removeEventListener("resize", updateSplit);
  }, []);

  return (
    <div className="commitee">
      <div className="decor-ti">{FirstLetterUp(data?.title)}</div>

      <div className="row py-5">
        {data?.content?.map((item, index) => {
          const { firstPart, remaining } = splitFirstAndRemaining(
            item.content,
            splitLimit
          );

          return (
            <div className="imageLink-sec" key={index}>
              <div className="imageLink-item1">
                {item.title && (
                  <h2 className="main-sub-ti">{item.title}</h2>
                )}

                {/* First part */}
                <p>{splitChar(firstPart, 700)}</p>

                {item?.url && (
                  <a href={item.url} className="read-more-btn">
                    <span className="rbt-btn-link">
                      For More Information
                      <i className="feather-arrow-up-right"></i>
                    </span>
                  </a>
                )}
              </div>

              {item?.src && (
                <div className="imageLink-item2">
                  <img
                    src="/images/Kahe/team-13.png"
                    alt={item.title || ""}
                  />
                </div>
              )}

              {/* Remaining part */}
              {remaining && (
                <p className="mt-4">{splitChar(remaining, splitLimit)}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageLink;
