"use client";

import { Examinations } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/OfficeOfInternationAffairs/OfficeOfInternationAffairs.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";

import TableCom from "../Components/TableCom";
import Commitee from "../Components/About/Commitee";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";

export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const OfficeOfInternationalAffairs = (props) => {
  const { table = true } = props;
  const Examination = data;
  const breadcrumbItems = [{ label: "Research", href: `research` }];

  return (
    <Provider store={Store}>
      <Context>
        <InnerBanner
          data={
             Examination?.bannerCon
          }
        />
        <section className="bg-white breadcrumb sticky-top">
          <StickyBreadcrumb items={breadcrumbItems} quickLink={false} />
        </section>
        <main className="section-wid d-flex section-bg1 ">
          <div className="rbt-course-details-area w-100">
            <div className="">
              <div className="">
               
                  <Commitee data={Examination?.examinations} />
              </div>

              {/* <div className="col-lg-3 px-0 d-none d-lg-block sidebar-pg">
                <div className="course-sidebar sticky-top">
                  <div className="inner">
                    <div className="content-item-content">
                      <Sidebar subMenu={Examinations} />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </Context>
    </Provider>
  );
};

export default OfficeOfInternationalAffairs;
