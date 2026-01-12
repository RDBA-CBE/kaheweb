"use client";

import data from "../../../JSON/scholarship.json";
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
import ImageCard from "@/components/00-Kahe/Components/ImageCard";
import { FirstLetterUp } from "@/utils/functions.utils";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Breadcrumb from "@/components/00-Kahe/common-components/BreadCrumb";

const OfficeOfInternationalAffairsOverview = () => {
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [
    {
      label: "Scholarship",
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
          <section className="section-wid section-bg1">
            <Commitee data={research?.student_att} />
          </section>
        </Context>
      </Provider>
    </>
  );
};

export default OfficeOfInternationalAffairsOverview;
