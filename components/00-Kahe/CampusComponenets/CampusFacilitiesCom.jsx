"use client";

import { CampusLife } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/campus/campusFacilities.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";

import TrainingTabInnerSec from "../Components/TrainingTabInnerSec";
import ContentCard from "../Components/ContentCard";
import Slider2 from "../common-components/Slider2";
import ImageLink from "../Components/ImageLink";
import ImageCard from "../Components/ImageCard";
import SliderContent from "../Components/SliderContent";
import IconCard from "../Components/IconCard";
import TableCom from "../Components/TableCom";
import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";
import AddContentCard from "../Components/AddContentCard";

export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const CampusFacilitiesCom = () => {
  const Campus = data;

  return (
    <>
      <InnerBanner data={Campus?.bannerCon} />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              <section className="">
                <ImageLink data={Campus?.overview} />
              </section>

              <div className="training section-bg1">
                <ImageCard visionItem={Campus?.ECampus} />
              </div>

              <section className="section-bg1">
                <SliderContent data={Campus?.sports} />
              </section>

              <section className="section-bg1">
                <IconCard data={Campus?.facilities} />
              </section>

              <section className="section-bg1">
                <SliderContent
                  data={Campus?.maintenance}
                  order={"imageFirst"}
                />
              </section>

              <section className="section-bg1">
                <h2 className="decor-ti">{Campus?.transport?.title}</h2>
                <Slider2 data={Campus?.transport?.content} />
              </section>

              <section className="section-bg1">
                <h2 className="decor-ti">{Campus?.busSchedule?.mainiTi}</h2>
                <p className="main-ti">
                  {FirstLetterUp(Campus?.busSchedule?.caption1)}
                </p>
                <p className="main-sub-ti mb-3">
                  {FirstLetterUp(Campus?.busSchedule?.caption2)}
                </p>

                <div className="py-4 mb-3">
                  <div
                    className="kahe-btn-primary rbt-btn "
                    
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text  pe-3">
                        {Campus?.busSchedule?.btn?.btnText}
                      </span>
                      
                    </span>
                  </div>
                </div>

                <TableCom data={Campus?.busSchedule} />
              </section>

              <section className="section-bg1">
                 <AddContentCard data={Campus?.contact} />
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

export default CampusFacilitiesCom;
