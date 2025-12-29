"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/Research/annualResearch.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { Research } from "@/JSON/ACADEMIC/Overview";
import SliderContent from "../Components/SliderContent";

const AnnualResearch = () => {
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [
    { label: "Research", href: `research` },
    {
      label: "Annual Research Congress",
      href: `annual-research-congress`,
    },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={research?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>

          <section className="section-wid section-bg1 sta-commitee">
            <SliderContent data={research?.annualResearch} />
          </section>

          <Sidebar2 subMenu={Research} />
        </Context>
      </Provider>
    </>
  );
};

export default AnnualResearch;
