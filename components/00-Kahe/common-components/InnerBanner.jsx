import React from "react";
import BreadcrumbImage from "../../../public/images/Kahe/breadcrumb/banner-inner1.jpg";
import Link from "next/link";

const InnerBanner = () => {
  
  return (
    <div className="uw-banner-container">
      <div
        className="uw-banner-background"
        style={{
          backgroundImage: `url(/images/Kahe/green-bg.avif)`,
          backgroundPosition:"bottom"
        }}
      ></div>
      <div className="uw-banner-overlay">
        <div className="uw-banner-content">
          <div className="uw-banner-header">
            <h2 className="banner-ti">Department of Biochemistry</h2>
          </div>

          <div className="uw-banner-text">
            <p className="banner-p">
             The University of Wyoming welcomes students to experience a one-of-a-kind education in the heart of the Mountain West. With our dedication to academic excellence and student-focused education, UW provides an environment  thrive both academically and personally. Admission to the University of Wyoming is just the first step to achieving your dreams.
            </p>
          </div>

          <div className="">
            {/* <button className="kahe-btn kahe-btn-secondary">Apply Today</button> */}
            <button className="rbt-btn hover-icon-reverse" href="#">
             <Link href={"#"}>
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Apply Now</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
             </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;
