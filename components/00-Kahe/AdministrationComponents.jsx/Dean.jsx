"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/Administration/BoardOfTrustees.json";
import Sidebar from "../common-components/Sidebar";
import { Administration } from "@/JSON/ACADEMIC/Overview";
import ListStyle from "../Components/ListStyle";
import { FirstLetterUp } from "@/utils/functions.utils";
import ContentCard from "../Components/ContentCard";

const Dean = () => {
  console.log("data", data);

  const commiteeData = data?.deans;
  return (
    <>
      <InnerBanner data={commiteeData?.bannerCon} />

      <main className="section-wid d-flex gap-4 section-bg1 sta-commitee">
        <div className="rbt-course-details-area w-100">
          <div className="row">
            <div className="col-lg-9">
              <ContentCard data = {commiteeData}/>
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

export default Dean;
