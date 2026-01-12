import Commitee from "@/components/00-Kahe/Components/About/Commitee";
import React from "react";
import data from "@/JSON/lms.json";
import StickyBreadcrumb from "@/components/00-Kahe/common-components/StickyNavBan";
import Sidebar from "../../../../../components/00-Kahe/common-components/Sidebar";
import { subMenu } from "@/JSON/ACADEMIC/Overview";
import Sidebar2 from "@/components/00-Kahe/common-components/Sidebar2";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";


export default function LearningManagementSystemLms() {
  const breadcrumbItems = [
     { label: "Academics", href: `academics` },
    { label: "Library", href: `/academics/library` },
    { label: "Learning Management System" },
  ];
  return (
    <>

     <InnerBanner data={data?.bannerCon} />

      <section className="bg-white  sticky-top">
        <StickyBreadcrumb items={breadcrumbItems} />
      </section>
      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <Commitee data={data} />
          </div>
          <div className="col-lg-3 px-0 d-none d-lg-block sidebar-pg">
              <div className="course-sidebar sticky-top">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar2 subMenu={subMenu} />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>

      {/* <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
             
            <Commitee data={data} />

            </div>

            <div className="col-lg-3 px-0 d-none d-lg-block sidebar-pg">
              <div className="course-sidebar sticky-top">
                <div className="inner">
                  <div className="content-item-content">
                  <Sidebar2 subMenu={subMenu} />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </>
  );
}
