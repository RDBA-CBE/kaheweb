"use client";

import { Admissions, OfficeOfInternationalAffairsJson } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/InternationalAdmissions/contact.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import AccordianSidebar from "../common-components/AccordianSidebar";
import pagedata from "../../../JSON/ACADEMIC/Arts/dept_of_biochemistry.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import ArrowImageContent from "../Components/ArrowImageContent.";
import AboutOverview from "../Components/AboutOverview";
import RowContent from "../Components/RowContent";

const Contact = () => {
  const admissionPro = data;

  console.log("admissionPro", admissionPro);

  const breadcrumbItems = [
   
    { label: " Office of International Affairs", href: `/office-of-international-affairs/` },
    { label: "Contact", href: `admission-details` },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={admissionPro?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>
          {/* <AccordianSidebar subMenu={Admissions}/> */}


          <AboutOverview data={admissionPro?.contact} />

        

          <Sidebar2 subMenu={OfficeOfInternationalAffairsJson} />
        </Context>
      </Provider>
    </>
  );
};

export default Contact;
