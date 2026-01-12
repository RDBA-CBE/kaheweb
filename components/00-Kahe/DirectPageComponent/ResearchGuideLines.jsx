"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/Research/researchGuideLine.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { Research } from "@/JSON/ACADEMIC/Overview";
import ContentCard from "../Components/ContentCard";
import SliderContent from "../Components/SliderContent";
import IconCard from "../Components/IconCard";

const ResearchGuideLines = (props) => {
  const research = data;

  const breadcrumbItems = [
    { label: "Research", href: `research` },
    {
      label: "Research Policy and Guidelines",
      href: ``,
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

          {/* <section className="section-wid section-bg1 sta-commitee">
            <ContentCard
              data={
                consultancy
                  ? research?.consultancy?.fundedResearch
                  : research?.fundedResearch
              }
            />
          </section> */}

          <section className="section-wid  ">
            <SliderContent data={research?.fundedResearch} />
          </section>
          <section className="section-wid section-bg1 ">
            <IconCard data={research?.form} />
          </section>

          <Sidebar2 subMenu={Research} />
        </Context>
      </Provider>
    </>
  );
};

export default ResearchGuideLines;
