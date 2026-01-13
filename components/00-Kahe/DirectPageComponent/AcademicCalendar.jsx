"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/academicCalendar.json";
import SliderContent from "../Components/SliderContent";
import Breadcrumb from "../common-components/BreadCrumb";

const AcademicCalendar = () => {
  const Academic = data;

  const breadcrumbItems= [
       
        {
          label: "Academic Calendar"
        }
      ]

  return (
    <>
      <InnerBanner data={Academic?.bannerCon} />

       <Breadcrumb items={breadcrumbItems} />

      <section className="section-wid">
        <section className="mom section-bg1">
          
          {Academic?.facAchievemnets?.map((item, index) => (
            <SliderContent data={item} key={index} />
          ))}
        </section>

      
      </section>
    </>
  );
};

export default AcademicCalendar;
