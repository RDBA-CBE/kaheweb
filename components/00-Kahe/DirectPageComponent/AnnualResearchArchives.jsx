"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/Research/annualResearchArchives.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { Research } from "@/JSON/ACADEMIC/Overview";
import SliderContent from "../Components/SliderContent";

const AnnualResearchArchives = () => {
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [
    { label: "Research", href: `research` },
    {
      label: "Annual Research Congress Archives",
      href: `annual-research-congress-archives`,
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

          <section className="section-wid section-bg1">
            <SliderContent data={research?.annualResearch16} />
          </section>

          <div className="section-bg3">
            <section className="section-wid">
              <SliderContent
                data={research?.annualResearch15}
                order={"imageFirst"}
              />
            </section>
          </div>

          <section className="section-wid section-bg1">
            <SliderContent data={research?.annualResearch14} />
          </section>

          <Sidebar2 subMenu={Research} />
        </Context>
      </Provider>
    </>
  );
};

export default AnnualResearchArchives;
