"use client";

import InnerBanner from "../common-components/InnerBanner";
import Commitee from "../Components/About/Commitee";
import data from "../../../JSON/About/commitee.json";
import Sidebar from "../common-components/Sidebar";
import { NonStatutoryCommitee } from "@/JSON/ACADEMIC/Overview";
import ListStyle from "../Components/ListStyle";

const Ombudsperson = () => {
  console.log("data", data);

  const commiteeData = data?.NscCommittees;
  return (
    <>
      <InnerBanner data={commiteeData?.bannerCon} />

      <main className="section-wid d-flex gap-4 py-5">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">

                <div>
                    <h2 className="decor-ti">
                        Ombudsperson
                    </h2>
                </div>
              
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

export default Ombudsperson;
