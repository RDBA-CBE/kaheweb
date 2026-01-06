"use client";

import { Admissions } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Admission/researchProgramme.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";

import AddContentCard from "../Components/AddContentCard";
import Tab2 from "../Components/Tab2";
import Link from "next/link";

const ResearchPrograms = () => {
  const Researchprogramm = data;

  console.log("admissionPro", Researchprogramm);

  const breadcrumbItems = [
    { label: "Admissions", href: `admissions` },
    { label: "Admission Details", href: `admission-details` },
    { label: "Post Graduate Programmes", href: `pg-programs` },
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

          <section className="section-wid section-bg1">
            <Tab2 data={Researchprogramm?.ResearchProgramme} />
            <div className="container my-5">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div className="text-center mb-4">
                    <img
                      src={Researchprogramm?.ResearchProgramme?.image}
                      alt="Research Programme"
                      className="img-fluid rounded border"
                      style={{ maxWidth: "500px", width: "100%" }}
                    />
                  </div>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body text-center py-4">
                      <Link
                        className="kahe-btn-primary rbt-btn hover-icon-reverse btn-lg px-5 py-4"
                        href={Researchprogramm?.ResearchProgramme?.apply_link}
                        target="blank"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">
                            Online Application Link
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Sidebar2 subMenu={Admissions} />
        </Context>
      </Provider>
    </>
  );
};

export default ResearchPrograms;
