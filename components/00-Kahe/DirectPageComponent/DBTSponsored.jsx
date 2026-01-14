"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/Research/DBTSponsored.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { Research } from "@/JSON/ACADEMIC/Overview";
import ImageLink from "../Components/ImageLink";
import ListStyle from "../Components/ListStyle";
import ImageCard2 from "../Components/ImageCard2";

const DBTSponsored = () => {
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [
    { label: "Research", href: `research` },
    { label: "Center of Excellence", href: `centerofexcellence` },
    { label: "DBT Sponsored Instrument Facilities Under NER (Bpmc) Scheme" },
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
            <div className="">
              <h4 className="decor-ti">{research?.title}</h4>
            </div>
          </section>

          <section className="section-bg2">
            <div className="section-wid">
              <ImageLink
                data={research?.ElectronicThreephase}
                firstParaLimit={9999}
                firstParaSplit={9999}
                order={"imageFirst"}
              />
            </div>
          </section>

          <section className="section-bg1">
            <div className="section-wid">
              <ImageLink
                data={research?.HighDefinitionDigital}
                firstParaLimit={9999}
                firstParaSplit={9999}
              />
            </div>
          </section>

          <section className="section-bg2">
            <div className="section-wid">
              <ImageLink
                data={research?.NanodropSpectrophotometer}
                firstParaLimit={9999}
                firstParaSplit={9999}
                order={"imageFirst"}
              />
            </div>
          </section>

          <section className="section-bg1">
            <div className="section-wid">
              <ImageLink
                data={research?.FlamePhotometer}
                firstParaLimit={9999}
                firstParaSplit={9999}
              />
            </div>
          </section>

          <section className="section-bg2">
            <div className="section-wid">
              <ImageLink
                data={research?.Minispinner}
                firstParaLimit={9999}
                firstParaSplit={9999}
                order={"imageFirst"}
              />
            </div>
          </section>

          <Sidebar2 subMenu={Research} />
        </Context>
      </Provider>
    </>
  );
};

export default DBTSponsored;
