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

const OfficeOfInternationalAffairsOverview = () => {
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [
    {
      label: "Office of International Affairs",
      href: `/office-of-international-affairs/`,
    },
    {
      label: "Overview",
      href: "/kahe/office-of-international-affairs/office-of-international-affairs-overview/",
    },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <section className="section-wid section-bg1">
            <Commitee data={research?.student_att} />
          </section>

        </Context>
      </Provider>
    </>
  );
};

export default OfficeOfInternationalAffairsOverview;
