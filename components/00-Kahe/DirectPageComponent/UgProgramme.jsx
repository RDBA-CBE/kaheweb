"use client";

import { Admissions } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Admission/UGProgramme.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import AccordianSidebar from "../common-components/AccordianSidebar";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";

import AddContentCard from "../Components/AddContentCard";
import Tab2 from "../Components/Tab2";

const UgProgramme = () => {
  const UGprogramm = data;

  console.log("admissionPro", UGprogramm);

  const breadcrumbItems = [
    { label: "Admissions", href: `admissions` },
    { label: "Admission Details", href: `admission-details` },
    { label: "Under Graduate Programmes", href: `ug-programs` },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={UGprogramm?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>
          {/* <AccordianSidebar subMenu={Admissions}/> */}

          <section className="section-wid section-bg1">
            <Tab2 data={UGprogramm?.UgProgramme} />
          </section>

          <Sidebar2 subMenu={Admissions} />
        </Context>
      </Provider>
    </>
  );
};

export default UgProgramme;
