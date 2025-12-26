"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/Research/overview.json";
import AboutOverview from "../Components/AboutOverview";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { Research } from "@/JSON/ACADEMIC/Overview";
import CounterStyle from "../Components/CounterStyle";
import PatentsStats from "../Components/PatentsStats";

const ResearchPage = () => {
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [{ label: "Research", href: `research` }];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={research?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>

          <AboutOverview data={research?.overview} />

          <section className="section-bg1">
            <CounterStyle data={research?.research} />
          </section>

          
          

          <section className="section-wid section-bg1">
              <PatentsStats data={research?.patents} />
          </section>

        

          

          <Sidebar2 subMenu={Research} />
        </Context>
      </Provider>
    </>
  );
};

export default ResearchPage;
