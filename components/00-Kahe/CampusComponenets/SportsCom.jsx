"use client";

import { CampusLife } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/campus/sports.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";
import ContentCard from "../Components/ContentCard";
import Slider2 from "../common-components/Slider2";

export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const SportsCom = () => {
  const Campus = data;

  return (
    <>
      <InnerBanner data={Campus?.bannerCon} />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              <section className="section-bg1">
                <ContentCard data={Campus?.sports} />
              </section>

              <section className="section-bg1">
                <h2 className="decor-ti">{Campus?.yoga?.title}</h2>
                <Slider2 data={Campus?.yoga?.content} />
              </section>

              <section className="section-bg1">
                <h2 className="decor-ti">{Campus?.sportsday?.title}</h2>
                <Slider2 data={Campus?.sportsday?.content} />
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

export default SportsCom;
