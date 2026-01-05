"use client";

import { Placement } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Training/Contact.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";

import { FirstLetterUp } from "@/utils/functions.utils";
import AddContentCard from "../Components/AddContentCard";

export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const PlacementContactCom = () => {
  const Training = data;

  return (
    <>
      <InnerBanner data={Training?.bannerCon} />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              {/* <h3 className="decor-ti">
                {FirstLetterUp(Training?.placementContact?.title)}
              </h3> */}
              <AddContentCard data={Training?.placementContact} />
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

export default PlacementContactCom;
