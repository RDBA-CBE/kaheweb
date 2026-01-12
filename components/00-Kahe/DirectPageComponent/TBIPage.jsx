"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/TBI.json";
import Breadcrumb from "../common-components/BreadCrumb";
import TBIInnerTab from "../Components/TBIComponents/TBIInnerTab";

const TBIPage = () => {
  const achievemnets = data;
  const IQAC = data;

  const breadcrumbItems = [
    {
      label: "TBI",
    },
  ];

  return (
    <>
      <InnerBanner data={achievemnets?.bannerCon} />

      <Breadcrumb items={breadcrumbItems} />

      <section className="section-bg1">
        <TBIInnerTab tabSections={IQAC.tabs} tabContent={IQAC.tabContent} />
      </section>
    </>
  );
};

export default TBIPage;
