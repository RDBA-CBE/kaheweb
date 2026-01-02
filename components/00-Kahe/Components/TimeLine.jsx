"use client";

import Image from "next/image";

import CounterData from "../../../data/elements/counter.json";

const TimeLine = ({ data }) => {
  return (
    <>
      <div className="row g-5 hanger-line">
        {data?.content?.map((item, innerIndex) => (
          <div
            className={`${
              item.top
                ? `mt_md--60 mt_sm--60 ${
                    data.clsName ? data.clsName : "col-lg-3 col-md-6 col-sm-6 col-12"
                  } `
                : ` mt--60 mt_md--30 mt_sm--30 mt_mobile--60 ${
                    data.clsName ? data.clsName : "col-lg-3 col-md-6 col-sm-6 col-12"
                  }  `
            }`}
            key={innerIndex}
          >
            <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
              <div className="top-circle-shape"></div>
              <div className="inner">
                <div className="rbt-round-icon">
                  <h3 className="main-sub-ti mb-0 fw-semibold">1st Year</h3>
                </div>
                <ul className="rbt-list-style-1">
                  {item.text.map((v, i) => (
                    <li key={i}>
                      <i className="feather-check"></i>
                      <span
                        className="text-start"
                        dangerouslySetInnerHTML={{ __html: v }}
                      ></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TimeLine;
