"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/InternationalAdmissions/BonVoyage.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { OfficeOfInternationalAffairsJson, Research } from "@/JSON/ACADEMIC/Overview";
import ImageLink from "../Components/ImageLink";
import PaginationTable from "../Components/PaginationTable";
import SliderContent from "../Components/SliderContent";

const BonVoyageCom = () => {
  const InterAdmin = data;

  const breadcrumbItems = [
    { label: "Office of International Affairs", href: `/office-of-international-affairs/` },
    { label: "Bon Voyage Scholarship", href: `publications` },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={InterAdmin?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems}  />
          </section>

          <section className=" section-bg1">
            <div className="section-wid">
              <ImageLink data={InterAdmin?.Overview} />
            </div>
          </section>
          <section className="section-wid">
            <PaginationTable data={InterAdmin?.BonVoyageList} />
          </section>

         

          <Sidebar2 subMenu={OfficeOfInternationalAffairsJson} />
        </Context>
      </Provider>
    </>
  );
};

export default BonVoyageCom;
