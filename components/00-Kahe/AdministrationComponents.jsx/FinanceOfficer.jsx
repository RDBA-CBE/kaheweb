"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/Administration/BoardOfTrustees.json";
import Sidebar from "../common-components/Sidebar";
import { Administration } from "@/JSON/ACADEMIC/Overview";
import ImageLink from "../Components/ImageLink";

const FinanceOfficer = () => {
  console.log("data", data);

  const BoardOfTrustees = data?.financeOfficer;
  return (
    <>
      <InnerBanner data={BoardOfTrustees?.bannerCon} />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">

              <ImageLink data={BoardOfTrustees}/>
              
            </div>

            <div className="col-lg-3 px-0 d-none d-lg-block sidebar-pg">
              <div className="course-sidebar sticky-top">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar subMenu={Administration} />
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

export default FinanceOfficer;
