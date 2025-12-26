"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/Research/centerOfexcellence.json";
import AboutOverview from "../Components/AboutOverview";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { Research } from "@/JSON/ACADEMIC/Overview";
import CounterStyle from "../Components/CounterStyle";
import PatentsStats from "../Components/PatentsStats";
import ImageLink from "../Components/ImageLink";
import ListStyle from "../Components/ListStyle";
import ImageCard2 from "../Components/ImageCard2";

const CenterofExcellence = () => {
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

          <section className="section-wid section-bg1">
            <div className="">
              <h4 className="decor-ti">{research?.ResearchCentres?.title}</h4>
            </div>

            <ImageCard2 data={research?.ResearchCentres?.items1} />
          </section>

          <section className="section-wid">
            <ImageLink
              data={research?.centerforBioinformatics}
              firstParaLimit={9999}
              firstParaSplit={9999}
              order={"imageFirst"}
            />
          </section>

          <section className="section-wid ">
            <ImageLink
              data={research?.centreforMaterialsScience}
              firstParaLimit={9999}
              firstParaSplit={9999}
            />
          </section>

          <section className="section-wid">
            <ImageLink
              data={research?.centreforCancerResearch}
              firstParaLimit={9999}
              firstParaSplit={9999}
              order={"imageFirst"}
            />
          </section>

          <section className="section-wid">
            <ImageLink
              data={research?.CARVR}
              firstParaLimit={9999}
              firstParaSplit={9999}
            />
          </section>

          <section className="section-wid">
            <ImageLink
              data={research?.CEE}
              firstParaLimit={9999}
              firstParaSplit={9999}
              order={"imageFirst"}
            />
          </section>

          <section className="section-wid">
            <ImageLink
              data={research?.ABRC}
              firstParaLimit={9999}
              firstParaSplit={9999}
            />
          </section>

          <section className="section-wid">
            <ImageLink
              data={research?.CMC}
              firstParaLimit={9999}
              firstParaSplit={9999}
              order={"imageFirst"}
            />
          </section>

          <section className="section-wid">
            <ImageLink
              data={research?.centreforNatural}
              firstParaLimit={9999}
              firstParaSplit={9999}
            />
          </section>

          <section className="section-wid section-bg1">
            <ListStyle data={research?.sophisticatedInstruments} />
          </section>

          <Sidebar2 subMenu={Research} />
        </Context>
      </Provider>
    </>
  );
};

export default CenterofExcellence;
