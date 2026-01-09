"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/Research/researchPulications.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { Research } from "@/JSON/ACADEMIC/Overview";
import TableCom from "../Components/TableCom";


const  ResearchPublications = () => {
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [{ label: "Research", href: `research` }, { label: "Research Publications", href: `publications` }];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={research?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>

          <section className="section-wid section-bg1">
            <TableCom data={data?.publications} />
          </section>



          <Sidebar2 subMenu={Research} />
        </Context>
      </Provider>
    </>
  );
};

export default ResearchPublications;
