"use client"

import { Examinations } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON//Admission/adminssion_detail.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";
import { Admissions } from "@/JSON/ACADEMIC/Overview";

import TableCom from "../Components/TableCom";
import Commitee from "../Components/About/Commitee";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import Sidebar2 from "../common-components/Sidebar2";

export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const AdmissionDetail = (props) => {
  const Examination = data;
  const breadcrumbItems = [
    { label: "Admissions", href: `admissions` },
    { label: "Admission Details", href: `admission-details` }
  ];

  return (
    <>
     <Provider store={Store}>
        <Context>
        <InnerBanner data={Examination?.bannerCon} />

          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>
          <section className="section-wid section-bg1">

          <Commitee data={Examination} />
          </section>


          <Sidebar2 subMenu={Admissions} />
        </Context>
      </Provider>


    
    </>
  );
};

export default AdmissionDetail;
