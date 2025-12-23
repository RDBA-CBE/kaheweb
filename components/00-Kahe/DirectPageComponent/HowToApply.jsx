"use client";

import { Admissions } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Admission//how-to-apply.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import AccordianSidebar from "../common-components/AccordianSidebar";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";

import AddContentCard from "../Components/AddContentCard";

const HowToApply = () => {
  const admission = data;

  console.log("admissionPro", admission);

  const breadcrumbItems = [
    { label: "Admissions", href: `admissions` },
    { label: "Admission Details", href: `admission-details` },
    { label: "How To Apply", href: `how-to-apply` },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={admission?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>
          {/* <AccordianSidebar subMenu={Admissions}/> */}

          <section className="section-wid section-bg1">
            <AddContentCard data={admission?.HowToApply} />
          </section>

          <Sidebar2 subMenu={Admissions} />
        </Context>
      </Provider>
    </>
  );
};

export default HowToApply;
