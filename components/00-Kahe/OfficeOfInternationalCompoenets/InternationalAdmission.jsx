"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/InternationalAdmissions/InternationalAd.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { OfficeOfInternationalAffairsJson, Research } from "@/JSON/ACADEMIC/Overview";
import ImageLink from "../Components/ImageLink";
import About from "../Components/About/About";
import ImageCard from "../Components/ImageCard";
import Mission from "../Components/About/Mission";
import AddContentCard from "../Components/AddContentCard";

const InternationalAdmission = () => {
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

          <section className="section-wid section-bg1">
            <About data={InterAdmin?.about} container={"container-fluid"} />
          </section>

          <section className=" section-bg2">
            <div className="section-wid">
              <ImageLink
                data={InterAdmin?.Overview}
                firstParaLimit={9999}
                firstParaSplit={9999}
              />
            </div>
          </section>

          <section className="section-wid section-bg1">
            <ImageCard
              visionItem={InterAdmin?.programs}
              missionItem={InterAdmin?.admissions}
            />
          </section>

          <section className="section-bg2">
            <Mission
              title="Why Choose (KAHE)"
             
              missionItems={InterAdmin?.whyChoose}
            />
          </section>

          <section className="section-wid section-bg1">
            <AddContentCard data={InterAdmin?.contact} />
          </section>

          <Sidebar2 subMenu={OfficeOfInternationalAffairsJson} />
        </Context>
      </Provider>
    </>
  );
};

export default InternationalAdmission;
