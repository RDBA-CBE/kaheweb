"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/achievments.json";
import SliderContent from "../Components/SliderContent";
import Breadcrumb from "../common-components/BreadCrumb";

const AchievementsPage = () => {
  const achievemnets = data;

  const breadcrumbItems= [
       
        {
          label: "Achievements"
        }
      ]

  return (
    <>
      <InnerBanner data={achievemnets?.bannerCon} />

       <Breadcrumb items={breadcrumbItems} />

      <section className="section-wid">
        <section className="mom section-bg1">
          <div className="decor-ti mb-2">Faculty Achievements</div>
          {achievemnets?.facAchievemnets?.map((item, index) => (
            <SliderContent data={item} key={index} />
          ))}
        </section>

        <section className="mom ">
          <div className="decor-ti mb-2">Students Achievements</div>
        {achievemnets?.stuAchievemnets?.map((item, index) => (
            <SliderContent data={item} key={index} />
          ))}
        </section>
      </section>
    </>
  );
};

export default AchievementsPage;
