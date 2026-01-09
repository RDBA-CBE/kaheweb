"use client";

import { CampusLife } from "@/JSON/ACADEMIC/Overview";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";
import data from "../../../JSON/campus/nss.json";
import CampusTabInnerSec from "./CampusTabInnerSec";

export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const NSSCom = () => {
  const Campus = data;

  return (
    <>
      <InnerBanner data={Campus?.bannerCon} />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              {/* <ImageLink
                data={Campus?.CampusPlacement}
                firstParaLimit={9999}
                firstParaSplit={9999}
              /> */}
              <div className="">
                <CampusTabInnerSec
                  tabSections={Campus.tabs}
                  tabContent={Campus.tabContent}
                />
              </div>
            </div>

            <div className="col-lg-3 px-0 d-none d-lg-block sidebar-pg">
              <div className="course-sidebar sticky-top">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar subMenu={CampusLife} />
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

export default NSSCom;
