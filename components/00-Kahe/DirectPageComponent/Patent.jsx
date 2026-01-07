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

const Patent = () => {
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [
    { label: "Research", href: `research` },
    {
      label: "Funded Research Projects / Other Grants / Awards",
      href: `funded-research-projects-other-grants-awards`,
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
            <ContentCard data={research?.fundedResearch} />
          </section>

          <Sidebar2 subMenu={Research} />
        </Context>
      </Provider>
    </>
  );
};

export default Patent;
