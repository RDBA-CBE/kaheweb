"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON//Research/OpportunitiesDetail.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import ImageLink from "../Components/ImageLink";
import PaginationTable from "../Components/PaginationTable";
import SliderContent from "../Components/SliderContent";
import About from "../Components/About/About";
import { Research } from "@/JSON/ACADEMIC/Overview";
import ImageCard2 from "../Components/ImageCard2";
import { FirstLetterUp } from "@/utils/functions.utils";

const OpportunitiesDetails = () => {
  const InterAdmin = data;

  const breadcrumbItems = [
    { label: "Research", href: `research` },
    { label: "Research Opportunities", href: `publications` },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={InterAdmin?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>

          <section className="section-wid section-bg1">
            <h2 className="decor-ti">
              {FirstLetterUp(InterAdmin?.activities?.title)}
            </h2>

            <ImageCard2 data={InterAdmin?.activities?.items1} />
          </section>

         

          <Sidebar2 subMenu={Research} />
        </Context>
      </Provider>
    </>
  );
};

export default OpportunitiesDetails;
