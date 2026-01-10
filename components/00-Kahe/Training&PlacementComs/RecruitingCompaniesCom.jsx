"use client";

import { Placement } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Training/RecruitingCompanies.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";

import { FirstLetterUp } from "@/utils/functions.utils";

export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const RecruitingCompaniesCom = () => {
  const Training = data;

  return (
    <>
      <InnerBanner data={Training?.bannerCon} />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              <h3 className="decor-ti">
                {FirstLetterUp(Training?.recruiters?.title)}
              </h3>
              <div className="row gy-4">
                {Training?.recruiters?.content?.map((item, index) => (
                  <div key={index} className="col-3">
                    <div key={index} className="specialty-card">
                      {/* <img src={item?.img} alt={item?.title} /> */}
                      <h4>{FirstLetterUp(item?.title)}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-3 px-0 d-none d-lg-block sidebar-pg">
              <div className="course-sidebar sticky-top">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar subMenu={Placement} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RecruitingCompaniesCom;
