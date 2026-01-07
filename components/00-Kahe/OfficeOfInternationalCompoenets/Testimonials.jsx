"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/InternationalAdmissions/Testimonials.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { OfficeOfInternationalAffairsJson, Research } from "@/JSON/ACADEMIC/Overview";
import ImageLink from "../Components/ImageLink";
import PaginationTable from "../Components/PaginationTable";
import SliderContent from "../Components/SliderContent";
import About from "../Components/About/About";
import YoutubeVideoSection from "../Components/YoutubeVideoSection";

const Testimonials = () => {
  const InterAdmin = data;

  const breadcrumbItems = [
    { label: "Office of International Affairs", href: `/kahe/office-of-international-affairs/` },
    { label: "Testimonials", href: `` },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={InterAdmin?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems}  />
          </section>
        
          <section className="section-wid section-bg1">
                 <YoutubeVideoSection data={InterAdmin?.testimonials}/>
              </section>
        
          {/* <section className="section-wid">
            <PaginationTable data={InterAdmin?.StudentsList} />
          </section>

          <section className="section-wid">
            <PaginationTable data={InterAdmin?.StudentsList1} />
          </section>

          <section className="section-wid section-bg1">
            <SliderContent data={InterAdmin?.annualResearch} />
          </section> */}

          <Sidebar2 subMenu={OfficeOfInternationalAffairsJson} />
        </Context>
      </Provider>
    </>
  );
};

export default Testimonials;
