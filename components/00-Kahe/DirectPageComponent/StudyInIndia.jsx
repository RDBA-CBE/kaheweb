"use client";

import { Admissions } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Admission/studyInIndia.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";

import AddContentCard from "../Components/AddContentCard";
import Tab2 from "../Components/Tab2";
import Link from "next/link";
import DownloadTab from "../Components/DownloadTab";
import StudyIndiaTab from "../Components/StudyIndiaTab";

const StudyInIndia = () => {
  const Researchprogramm = data;

  // console.log("admissionPro", Researchprogramm);

  const breadcrumbItems = [
    { label: "Admissions", href: `admissions` },
    { label: "Study in India", href: `study-in-india` },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={Researchprogramm?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>
          {/* <AccordianSidebar subMenu={Admissions}/> */}

          <section className=" section-bg1">
            <StudyIndiaTab data={Researchprogramm?.Downloads} />
            
          </section>

          <Sidebar2 subMenu={Admissions} />
        </Context>
      </Provider>
    </>
  );
};

export default StudyInIndia;
