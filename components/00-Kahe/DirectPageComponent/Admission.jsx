"use client";

import InnerBanner from "../common-components/InnerBanner";
import RowContent from "../Components/RowContent";
import data from "../../../JSON/Admission/overview.json";
import AboutOverview from "../Components/AboutOverview";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { Admissions } from "@/JSON/ACADEMIC/Overview";


const Admission = () => {
  const admission = data.admissionOverview;
  console.log("admission", admission);

  const breadcrumbItems = [{ label: "Admissions", href: `admissions` }];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={admission?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>

          <AboutOverview data={admission?.admission} />

          <div className="section-wid section-bg1">
            <RowContent data={admission?.address} />
          </div>

          <Sidebar2 subMenu={Admissions} />
        </Context>
      </Provider>
    </>
  );
};

export default Admission;
