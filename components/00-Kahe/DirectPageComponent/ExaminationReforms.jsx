"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/Research/ExaminationReforms.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { Research } from "@/JSON/ACADEMIC/Overview";
import ContentCard from "../Components/ContentCard";

const ExaminationReforms = () => {
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [
    { label: "Home", href: `/` },
    {
      label: "Examinations",
      href: `/examinations/`,
    },
    {
      label: "Examination Reforms",
      href: `/examinations/examination-reforms/`,
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

export default ExaminationReforms;
