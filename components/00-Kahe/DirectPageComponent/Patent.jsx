"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/Research/patent.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { Research } from "@/JSON/ACADEMIC/Overview";
import ContentCard from "../Components/ContentCard";
import SliderContent from "../Components/SliderContent";

const Patent = (props) => {
  const { consultancy = false, phd_research = false } = props;
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [
    { label: "Research", href: `research` },
    {
      label: "Research Consultancy",
      href: ``,
    },
  ];

  const breadcrumbItemsPatent = [
    { label: "Research", href: `research` },
    {
      label: "Patents",
      href: ``,
    },
  ];

  const breadcrumbItemsPhdResearch = [
    { label: "Research", href: `research` },
    {
      label: "List of PhD Research Scholars",
      href: ``,
    },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner
            data={
              consultancy
                ? research?.consultancy?.bannerCon
                : phd_research
                ? research?.phd_scholars?.bannerCon
                : research?.bannerCon
            }
          />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb
              items={
                consultancy
                  ? breadcrumbItems
                  : phd_research
                  ? breadcrumbItemsPhdResearch
                  : breadcrumbItemsPatent
              }
            />
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

          <section className="section-wid section-bg1 sta-commitee">
            <SliderContent
              data={
                consultancy
                  ? research?.consultancy?.fundedResearch
                  : phd_research
                  ? research?.phd_scholars?.fundedResearch
                  : research?.fundedResearch
              }
            />
          </section>

          <Sidebar2 subMenu={Research} />
        </Context>
      </Provider>
    </>
  );
};

export default Patent;
