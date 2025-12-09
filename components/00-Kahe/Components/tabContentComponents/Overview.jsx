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
        className={`rbt-course-feature-box overview-wrapper  mt--30 has-show-more active ${
          toggle ? "active" : ""
        }`}
        id="overview"
      >
        <div className="rbt-course-feature-inner has-show-more-inner-content">
          <div className="section-title">
            <h2
              className="main-ti"
              dangerouslySetInnerHTML={{ __html: overviewItem.subTitle }}
            ></h2>
          </div>
          <div className="d-flex gap-5 overview-p pb-4">
            <div className="overview-p-one">
              <p
                dangerouslySetInnerHTML={{ __html: overviewItem.content1 }}
              ></p>
              <p
                dangerouslySetInnerHTML={{ __html: overviewItem.content2 }}
              ></p>
            </div>

            <img className="overview-p-two" src="/images/others/health-b-02.png" alt="" />
          </div>

          <p dangerouslySetInnerHTML={{ __html: overviewItem.content3 }}></p>
          <p dangerouslySetInnerHTML={{ __html: overviewItem.content4 }}></p>
          <p dangerouslySetInnerHTML={{ __html: overviewItem.content5 }}></p>

          {visionItem && (
            <div className="row mt-4">
              <div className="section-title">
                <h3
                  className="main-sub-ti"
                  dangerouslySetInnerHTML={{ __html: visionItem.subTitle }}
                ></h3>
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
            <div className="row mt-4">
              <div className="section-title">
                <h3
                  className="main-sub-ti"
                  dangerouslySetInnerHTML={{ __html: missionItem.subTitle }}
                ></h3>
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
        {/* <div
          className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "Show Less" : "Show More"}
        </div> */}
      </div>
    </>
  );
};

export default Overview;
