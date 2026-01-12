"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/CurrentVacancies.json";
import SliderContent from "../Components/SliderContent";
import Breadcrumb from "../common-components/BreadCrumb";

const CurrentVacancies = () => {
  const achievemnets = data;

  const breadcrumbItems= [
       
        {
          label: "Current Vacancies"
        }
      ]

  return (
    <>
      <InnerBanner data={achievemnets?.bannerCon} />

       <Breadcrumb items={breadcrumbItems} />

      <section className="section-wid section-bg1">
       

        <section className=" ">
          <div className="decor-ti mb-2">Current vacancies</div>

          <p className="mt-5">Vacancies will Update soon !</p>
       
        </section>
      </section>
    </>
  );
};

export default CurrentVacancies;
