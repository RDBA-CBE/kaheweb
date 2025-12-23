"use client";

import { Admissions } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Admission/admissionPro.json";
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

const AdmissionProcedure = () => {
  const admissionPro = data;

  console.log("admissionPro", admissionPro);

  const breadcrumbItems = [
    { label: "Admissions", href: `admissions` },
    { label: "Admission Details", href: `admission-details` },
    { label: "Admissions Procedure", href: `admission-procedure` },
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

          <section className=" d-flex section-bg1">
            <ArrowImageContent
              data={admissionPro.programmes}
              className="image-content"
            />
          </section>

          <section className=" d-flex section-bg1">
            <ArrowImageContent
              data={admissionPro.Engineering}
              className="content-image"
            />
          </section>

          <section className=" d-flex section-bg1">
            <ArrowImageContent
              data={admissionPro.architecture}
              className="image-content"
            />
          </section>

          <section className=" d-flex section-bg1">
            <ArrowImageContent
              data={admissionPro.pharmacy}
              className="content-image"
            />
          </section>

          <AboutOverview data={admissionPro?.contact} />

          <div className="section-wid section-bg1">
            <RowContent data={admissionPro?.phone} />
          </div>

          <Sidebar2 subMenu={Admissions} />
        </Context>
      </Provider>
    </>
  );
};

export default AdmissionProcedure;
