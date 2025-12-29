"use client"

import { Examinations } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Examination/ExamNotification.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";

import TableCom from "../Components/TableCom";

export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const ExamNotification = () => {
  const Examination = data;


  return (
    <>
      <InnerBanner data={Examination?.bannerCon} />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              <TableCom data={Examination?.examiNotify} />
            </div>

            <div className="col-lg-3 px-0 d-none d-lg-block sidebar-pg">
              <div className="course-sidebar sticky-top">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar subMenu={Examinations} />
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

export default ExamNotification;
