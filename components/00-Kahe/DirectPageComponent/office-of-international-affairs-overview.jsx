"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/OfficeOfInternationAffairs/overview.json";
import AboutOverview from "../Components/AboutOverview";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { OfficeOfInternationalAffairsJson, Research } from "@/JSON/ACADEMIC/Overview";
import CounterStyle from "../Components/CounterStyle";
import PatentsStats from "../Components/PatentsStats";

const OfficeOfInternationalAffairsOverview = () => {
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [{ label: "Office of International Affairs", href: `/office-of-international-affairs/` },{label:"Overview",href:"/kahe/office-of-international-affairs/office-of-international-affairs-overview/"}];
  
  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={research?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} quickLink={false}/>
          </section>

          <AboutOverview data={research?.overview} />

        

          

          <Sidebar2 subMenu={OfficeOfInternationalAffairsJson} />
        </Context>
      </Provider>
    </>
  );
};

export default OfficeOfInternationalAffairsOverview;
