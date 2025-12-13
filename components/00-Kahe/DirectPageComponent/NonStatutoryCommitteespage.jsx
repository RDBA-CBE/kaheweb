"use client";

import InnerBanner from "../common-components/InnerBanner";
import { VissionMissiondata } from "@/JSON/About/VissionMission";
import Commitee from "../Components/About/Commitee";
import data from "../../../JSON/About/commitee.json";
import Sidebar from "../common-components/Sidebar";
import { NonStatutoryCommitee } from "@/JSON/ACADEMIC/Overview";

const NonStatutoryCommitteespage = () => {
  console.log("data", data);
  return (
    <>
      <InnerBanner data={VissionMissiondata?.data} />

      <main className="section-wid d-flex gap-4 py-5">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              <Commitee data={data} />
            </div>

            <div className="col-lg-3 px-0 d-none d-md-block">
              <div className="course-sidebar sticky-top rbt-shadow-box rbt-gradient-border ">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar subMenu={NonStatutoryCommitee} />
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

export default NonStatutoryCommitteespage;
