"use client";

import React, { useState } from "react";

const Overview = ({ overviewContent }) => {
  const [toggle, setToggle] = useState(false);

  const overviewItem = overviewContent?.find((item) => item.type == "overview");
  const visionItem = overviewContent?.find((item) => item.type == "vision");
  const missionItem = overviewContent?.find((item) => item.type == "mission");

  return (
    <>
      <div
        className={`rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more ${
          toggle ? "active" : ""
        }`}
        id="overview"
      >
        <div className="rbt-course-feature-inner has-show-more-inner-content">
          <div className="section-title">
            <h4
              className="rbt-title-style-3"
              dangerouslySetInnerHTML={{ __html: overviewItem.subTitle }}
            ></h4>
          </div>
          <p dangerouslySetInnerHTML={{ __html: overviewItem.content }}></p>

          {visionItem && (
            <div className="row g-5 mb--30">
              <div className="section-title">
                <h4
                  className="rbt-title-style-3"
                  dangerouslySetInnerHTML={{ __html: visionItem.subTitle }}
                ></h4>
              </div>
              <div className="col-lg-12 mt-0">
                <ul className="rbt-list-style-1">
                  {visionItem.content.map((item, i) => (
                    <li key={i}>
                      <i className="feather-check"></i>
                      <span dangerouslySetInnerHTML={{ __html: item }}></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {missionItem && (
            <div className="row g-5 mb--30">
              <div className="section-title">
                <h4
                  className="rbt-title-style-3"
                  dangerouslySetInnerHTML={{ __html: missionItem.subTitle }}
                ></h4>
              </div>
              <div className="col-lg-12 mt-0">
                <ul className="rbt-list-style-1">
                  {missionItem.content.map((item, i) => (
                    <li key={i}>
                      <i className="feather-check"></i>
                      <span dangerouslySetInnerHTML={{ __html: item }}></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div
          className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          Show More
        </div>
      </div>
    </>
  );
};

export default Overview;
