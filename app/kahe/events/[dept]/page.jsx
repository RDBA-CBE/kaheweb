"use client";
import InnerSubBanner from "@/components/00-Kahe/common-components/InnerSubBanner";
import Eventspage from "@/components/00-Kahe/DirectPageComponent/Eventspage";
import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [eventsContent, setEventsContent] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("eventsData");
    if (data) {
      setEventsContent(JSON.parse(data));
    }
  }, []);

  if (!eventsContent) return <div>Loading...</div>;

  console.log("eventsContent",eventsContent);
  

  const bannerCon = {
    bannerImg: "/images/Kahe/breadcrumb/banner-inner1.jpg",
    title: "Events",
  };

  //  const breadcrumbItems = [
  //   { label: "Academics", href: `academics` },
  //   {
  //     label: "Arts, Science, Commerce and Management",
  //     href: `academics/arts-science-and-humanities/`,
  //   },

  //   { label: "Department of BioTechnology",
  //        href: `/academics/arts-science-and-humanities/department-of-biotechnology`,
  //    },
  //   { label: "Faculty" },
  // ];

  return (
    <>
      <InnerSubBanner data={bannerCon} />
      {/* <Breadcrumb items={breadcrumbItems} /> */}
      <Eventspage eventsContent={eventsContent}/>
     
    </>
  );
};

export default Page;
