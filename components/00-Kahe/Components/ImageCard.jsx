import { FirstLetterUp } from "@/utils/functions.utils";
import React from "react";

const ImageCard = ({ visionItem, missionItem }) => {
  return (
    <section className="vm-section ">
      <div className="vm-container">
        {/* VISION */}
        {visionItem && (
          <div className="vm-card vision">
            <div className="vm-icon">
              <img src={visionItem.src} alt={visionItem.subTitle} />
            </div>

            {visionItem.title && (
              <h3
                className="w-decor-ti "
                dangerouslySetInnerHTML={{
                  __html: FirstLetterUp(visionItem.title),
                }}
              ></h3>
            )}
            {visionItem.subTitle && (
              <h3
                className="main-ti vision-title"
                dangerouslySetInnerHTML={{
                  __html: FirstLetterUp(visionItem.subTitle),
                }}
              ></h3>
            )}

            {visionItem.content && (
              <ul className="rbt-list-style-1">
                {visionItem.content.map((v, i) => (
                  <li key={i}>
                    <i className="feather-check"></i>
                    <span
                      className="text-start"
                      dangerouslySetInnerHTML={{ __html: v }}
                    ></span>
                  </li>
                ))}
              </ul>
            )}
            {visionItem.desc && <p>{visionItem.desc}</p>}
          </div>
        )}

        {/* MISSION */}
        {missionItem && (
          <div className="vm-card mission">
            <div className="vm-icon">
              <img src={missionItem.src} alt={missionItem.subTitle} />
            </div>
            {missionItem.title && (
              <h3
                className="w-decor-ti"
                dangerouslySetInnerHTML={{
                  __html: FirstLetterUp(missionItem.title),
                }}
              ></h3>
            )}
            {missionItem.subTitle && (
              <h3
                className="main-ti mission-title"
                dangerouslySetInnerHTML={{
                  __html: FirstLetterUp(missionItem.subTitle),
                }}
              ></h3>
            )}
            {missionItem.content && (
              <ul className="rbt-list-style-1">
                {missionItem.content.map((v, i) => (
                  <li key={i}>
                    <i className="feather-check"></i>
                    <span
                      className="text-start"
                      dangerouslySetInnerHTML={{ __html: v }}
                    ></span>
                  </li>
                ))}
              </ul>
            )}
            {missionItem.desc && <p>{missionItem.desc}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageCard;
