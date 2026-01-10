import { FirstLetterUp } from "@/utils/functions.utils";
import React from "react";
import TableCom from "../Components/PaginationTable";
import Testimonial from "../Components/Testimonial";

const DeptPlacementCom = ({ data }) => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div
      className="section-wid row row--15 mt_dec--30 align-items-stretch events-pg"
      style={{ padding: "80px 0" }}
    >
      <div className="section-title d-flex justify-content-between flex-wrap">
        <h2
          className="decor-ti "
          dangerouslySetInnerHTML={{
            __html: FirstLetterUp(data.tab),
          }}
        ></h2>

        <div className=" d-flex ">
          <div className="py-0">
            <div
              onClick={goBack}
              className="kahe-btn-primary rbt-btn hover-icon-reverse"
              style={{ cursor: "pointer" }}
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Go Back</span>
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
      </div>

      {data?.tableContent && (
        <div className="section-bg1">
          <TableCom data={data?.tableContent} />
        </div>
      )}

      <div className="rbt-testimonial-area  rbt-section-gapBottom">
        <Testimonial isDesc={true} data={data?.cardSlider}/>
      </div>
    </div>
  );
};

export default DeptPlacementCom;
