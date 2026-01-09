"use client";

import { CampusLife } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/campus/yugada.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";
import Slider2 from "../common-components/Slider2";

export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const Yugadya = () => {
  const Campus = data;

  return (
    <>
      <InnerBanner data={Campus?.bannerCon} />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              <section className="campus-overview">
                <h2 className="decor-ti">{Campus?.overview?.title}</h2>

                <div className="campus-img-wrapper">
                  {Campus?.overview?.content.map((item) => (
                    <div className="campus-img-box" key={item.id}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="campus-img"
                      />
                    </div>
                  ))}
                </div>
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

export default Yugadya;
