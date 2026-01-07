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

const Patent = (props) => {
  const { consultancy = false } = props;
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

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner
            data={
              consultancy
                ? research?.consultancy?.bannerCon
                : research?.bannerCon
            }
          />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={consultancy?breadcrumbItems:breadcrumbItemsPatent} />
          </section>

          <section className="section-wid section-bg1 sta-commitee">
            <ContentCard
              data={
                consultancy
                  ? research?.consultancy?.fundedResearch
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
