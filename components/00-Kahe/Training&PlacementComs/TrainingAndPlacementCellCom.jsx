"use client";

import { Placement } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Training/training_&_placements.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";

import TrainingTabInnerSec from "../Components/TrainingTabInnerSec";
import ImageLink from "../Components/ImageLink";

export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const TrainingAndPlacementCellCom = () => {
  const Training = data;

  return (
    <>
      <InnerBanner data={Training?.bannerCon} />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              <ImageLink
                data={Training?.trainingPlacement}
                firstParaLimit={9999}
                firstParaSplit={9999}
              />
              <div className="">
                <TrainingTabInnerSec
                  tabSections={Training.tabs}
                  tabContent={Training.tabContent}
                />
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

      {/* <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="">
              <ImageLink data={Training?.trainingPlacement} />
            </div>
            <div className="col-lg-9">
              <TrainingTabInnerSec
                tabSections={Training.tabs}
                tabContent={Training.tabContent}
              />
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
      </main> */}
    </>
  );
};

export default TrainingAndPlacementCellCom;
