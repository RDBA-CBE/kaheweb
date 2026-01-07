"use client";

import data from "../../../JSON/Research/timelinePresentation.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import TableCom from "../Components/TableCom";
import Commitee from "../Components/About/Commitee";
import Sidebar2 from "../common-components/Sidebar2";
import { Research } from "@/JSON/ACADEMIC/Overview";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import StickyBreadcrumb from "../common-components/StickyNavBan";

export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const TimelinePresentationPage = (props) => {
  const { table = true } = props;
  const Examination = data;
  const breadcrumbItems = [{ label: "Research", href: `research` }];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={Examination?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>
         
          <main className="section-wid d-flex section-bg1 ">
            <div className="rbt-course-details-area w-100">
              <div className="row g-5">
                <div className="">
                  {table ? (
                    <TableCom data={Examination?.examiNotify} />
                  ) : (
                    <Commitee data={Examination?.examinations} />
                  )}
                </div>
                <Sidebar2 subMenu={Research} />

                
              </div>
            </div>
          </main>
        </Context>
      </Provider>
    </>
  );
};

export default TimelinePresentationPage;
