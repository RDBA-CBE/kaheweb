"use client";

import { useEffect, useState } from "react";
import {
  FirstLetterUp,
  renderWithSplitChar,
  splitChar,
  splitFirstAndRemaining,
} from "@/utils/functions.utils";

const ImageLink = ({ data, firstParaLimit, firstParaSplit, order }) => {
  const [splitLimit, setSplitLimit] = useState(firstParaLimit ?? 900);

  console.log("firstParaLimit", firstParaLimit);
  console.log("firstParaSplit", firstParaSplit);

  // Decide split size by screen width
  const getSplitLimit = (width) => {
    if (width >= 1500) return firstParaLimit ?? 900;
    if (width >= 1130) return firstParaLimit ?? 700;
    if (width >= 992) return firstParaLimit ?? 600;
    if (width >= 768) return firstParaLimit ?? 650;
    return firstParaLimit ?? 400;
  };

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
      {data?.title && <div className="decor-ti">{FirstLetterUp(data?.title)}</div>}

      <div className="row py-5">
        {data?.content?.map((item, index) => {
          const { firstPart, remaining } = item.content
            ? splitFirstAndRemaining(item.content, splitLimit)
            : "";
          return (
            <div
              className={`imageLink-sec ${order ? `${order}` : ""}`}
              key={index}
            >
              <div className={`imageLink-item1 ${order ? `${order}` : ""}`}>
                {item?.title1 && (
                  <div className="decor-ti">{FirstLetterUp(item?.title1)}</div>
                )}

                {item.title && <h2 className="main-sub-ti">{item.title}</h2>}

                {/* First part */}
                {firstPart && (
                  <p>{splitChar(firstPart, firstParaSplit ?? 700,item?.tagClasses)}</p>
                )}

                {item?.links && item?.links.length > 0 && (
                  <ul
                    className={item?.ulcls || "ps-0"}
                    style={{ listStyle: "none" }}
                  >
                    {item?.links?.map((linkItem, linkIndex) => (
                      <li
                        key={linkIndex}
                        className={`my-0 d-flex align-items-start gap-4 ps-0 ${
                          linkItem?.clsname || ""
                        }`}
                      >
                        <span className="mt-1">
                          {linkItem?.icon && (
                            <i className={`${linkItem.icon}`}></i>
                          )}
                          {linkItem?.title && (
                            <p className="me-2 fw-semibold">
                              {linkItem.title}
                            </p>
                          )}
                        </span>

                        {linkItem?.url ? (
                          <a
                            href={linkItem.url}
                            target="__blank"
                            className="text-decoration-none"
                          >
                            {linkItem.text}
                          </a>
                        ) : (
                          <span>{linkItem.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {item?.url && (
                  <a href={item.url} className="read-more-btn">
                    <span className="rbt-btn-link">
                      {item?.urlText || "For More Information"}
                      <i className="feather-arrow-up-right"></i>
                    </span>
                  </a>
                )}
              </div>

              {item?.src && (
                <div className="imageLink-item2">
                  <img src={item.src || "/images/Kahe/team-13.png"} alt={item.title || ""} />
                </div>
              )}

              {/* Remaining part */}
              {remaining && (
                <p className="mt-4">{splitChar(remaining, splitLimit,item?.tagClasses)}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageLink;
