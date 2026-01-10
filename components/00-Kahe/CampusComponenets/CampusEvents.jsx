"use client";

import { CampusLife } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/campus/campusEvents.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";

import Slider2 from "../common-components/Slider2";

import { FirstLetterUp } from "@/utils/functions.utils";
import { useRouter } from "next/navigation";
import ImageGrid from "../common-components/ImageGrid";
import CampusEveIn from "./CAmpusEveIn";

export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const CampusEvents = () => {
  const Campus = data;
  const router = useRouter();


  return (
    <>
      <InnerBanner data={Campus?.bannerCon} />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
             <CampusEveIn data={Campus?.convocation2024} />

             <CampusEveIn data={Campus?.digitalPenne} />

              <CampusEveIn data={Campus?.OrientationFASCM} />
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

export default CampusEvents;
