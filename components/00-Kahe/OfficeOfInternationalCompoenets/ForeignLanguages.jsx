"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/InternationalAdmissions/ForeignLanguages.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import {
  OfficeOfInternationalAffairsJson,
  Research,
} from "@/JSON/ACADEMIC/Overview";
import ImageLink from "../Components/ImageLink";
import PaginationTable from "../Components/PaginationTable";
import SliderContent from "../Components/SliderContent";
import About from "../Components/About/About";

const ForeignLanguages = () => {
  const InterAdmin = data;

  const breadcrumbItems = [
    { label: "Research", href: `research` },
    { label: "Research Publications", href: `publications` },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={InterAdmin?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>

          <section className=" ">
            <div className="section-wid">
              <ImageLink
                data={InterAdmin?.Overview}
                firstParaLimit={9999}
                firstParaSplit={9999}
              />
            </div>
          </section>
          <section className=" section-bg1">
            <About data={InterAdmin?.about} />
          </section>
          <section className="section-wid">
            <PaginationTable data={InterAdmin?.StudentsList} />
          </section>

          <section className="section-wid">
            <PaginationTable data={InterAdmin?.StudentsList1} />
          </section>

          <section className="section-wid section-bg1">
            <SliderContent data={InterAdmin?.annualResearch} />
          </section>

          <Sidebar2 subMenu={OfficeOfInternationalAffairsJson} />
        </Context>
      </Provider>
    </>
  );
};

export default ForeignLanguages;
