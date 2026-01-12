"use client";

import data from "../../../JSON/parents.json";
import AboutOverview from "../../../components/00-Kahe/Components/AboutOverview";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import {
  OfficeOfInternationalAffairsJson,
  Research,
} from "@/JSON/ACADEMIC/Overview";
import Sidebar2 from "@/components/00-Kahe/common-components/Sidebar2";
import Commitee from "@/components/00-Kahe/Components/About/Commitee";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Breadcrumb from "@/components/00-Kahe/common-components/BreadCrumb";

const OfficeOfInternationalAffairsOverview = () => {
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [
   
    {
      label: "Parents",
      
    },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={research?.bannerCon} />
          <section className="bg-white  sticky-top">
            <Breadcrumb items={breadcrumbItems} />
          </section>
          <AboutOverview data={research?.overview} />
          <section className="section-wid section-bg1">
            <Commitee data={research?.student_att} />
            <Commitee data={research?.internal_mark} />
          </section>

          <Sidebar2 subMenu={OfficeOfInternationalAffairsJson} />
        </Context>
      </Provider>
    </>
  );
};

export default OfficeOfInternationalAffairsOverview;
