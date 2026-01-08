"use client";

import InnerBanner from "../common-components/InnerBanner";
// import data from "../../../JSON/InternationalAdmissions/Testimonials.json";
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
import YoutubeVideoSection from "../Components/YoutubeVideoSection";
import { subMenu } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/ACADEMIC/Arts/dean.json";

const AcademinArtsDean = (props) => {
  const { engineering = false, architecture = false, pharmacy = false ,performingArts=false} = props;
  const InterAdmin = data;
  console.log("✌️InterAdmin --->", InterAdmin?.BoardofTrustees);

  const breadcrumbItems = [
    {
      label: "Academics",
      href: `/academics/`,
    },
    { label: "Arts, Science, Commerce and Management", href: `` },
  ];

  const breadcrumbItemsEngineering = [
    {
      label: "Academics",
      href: `/academics/`,
    },
    {
      label: "Engineering",
      href: ``,
    },
  ];

  const breadcrumbItemsArchitecture = [
    {
      label: "Academics",
      href: `/academics/`,
    },
    {
      label: "Faculty of Architecture, Design and Planning",
      href: ``,
    },
  ];

  const breadcrumbItemsPharmacy = [
    {
      label: "Academics",
      href: `/academics/`,
    },
    {
      label: "Pharmacy",
      href: ``,
    },
  ];

  const breadcrumbItemsPerformingArts = [
    {
      label: "Academics",
      href: `/academics/`,
    },
    {
      label: "Dean-Performing Arts",
      href: ``,
    },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner
            data={
              engineering
                ? InterAdmin?.EnginerringDean?.bannerCon
                : architecture
                ? InterAdmin?.ArchitectureDean?.bannerCon
                : pharmacy
                ? InterAdmin?.PharmacyDean?.bannerCon
                : InterAdmin?.ArtsDean?.bannerCon
            }
          />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb
              items={
                engineering
                  ? breadcrumbItemsEngineering
                  : architecture
                  ? breadcrumbItemsArchitecture
                  : pharmacy
                  ? breadcrumbItemsPharmacy
                  : breadcrumbItems
              }
            />
          </section>

          <div className="section-wid">
            <ImageLink
              data={
                engineering
                  ? InterAdmin?.EnginerringDean
                  : architecture
                  ? InterAdmin?.ArchitectureDean
                  : pharmacy
                  ? InterAdmin?.PharmacyDean
                  : InterAdmin?.ArtsDean
              }
            />
          </div>

          {/* <section className="section-wid">
            <PaginationTable data={InterAdmin?.StudentsList} />
          </section>

          <section className="section-wid">
            <PaginationTable data={InterAdmin?.StudentsList1} />
          </section>

          <section className="section-wid section-bg1">
            <SliderContent data={InterAdmin?.annualResearch} />
          </section> */}

          <Sidebar2 subMenu={subMenu} />
        </Context>
      </Provider>
    </>
  );
};

export default AcademinArtsDean;
