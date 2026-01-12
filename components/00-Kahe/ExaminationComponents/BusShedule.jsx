"use client"

import { Examinations } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/bus_shedule.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";

import TableCom from "../Components/TableCom";
import Commitee from "../Components/About/Commitee";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import AddContentCard from "../Components/AddContentCard";

export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const BusShedule = (props) => {
  const {table = true}=props
  const Examination = data;

  const breadcrumbItems = [
    { label: "Bus Schedule" },
  ];

  return (
    <>
    <InnerBanner data={Examination?.bannerCon} />
    <section className="bg-white  sticky-top">
        <StickyBreadcrumb items={breadcrumbItems} quickLink={false} />
      </section>
      {/* <InnerBanner data={table?Examination?.bannerCon:Examination?.examinations?.bannerCon} /> */}

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
              <TableCom data={Examination?.examiNotify} />
              
            <AddContentCard data={Examination?.placementContact} />


            
          </div>
        </div>
      </main>
    </>
  );
};

export default BusShedule;
