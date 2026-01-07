"use client";

import { CampusLife } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/campus/Endowment.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";
import ImageGrid from "../common-components/ImageGrid";
import ParaImageSlider from "../Components/ParaImageSlider";
import ImageLink from "../Components/ImageLink";

export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const EndowmentLectures = () => {
  const Campus = data;

  return (
    <>
      <InnerBanner data={Campus?.bannerCon} />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
             

              <section className="section-bg1">
                <ImageLink data={Campus?.endowment} />
              </section>

                
            
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

export default EndowmentLectures;
