"use client";
import Breadcrumb from "@/components/00-Kahe/common-components/BreadCrumb";
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

  console.log("eventsContent", eventsContent);

  const bannerCon = {
    bannerImg: "/images/Kahe/breadcrumb/banner-inner1.jpg",
    title: "Events",
  };

  return (
    <>
      <InnerSubBanner data={bannerCon} />
      <Breadcrumb items={eventsContent?.breadcrumbItems} />
      <Eventspage eventsContent={eventsContent} />
    </>
  );
};

export default Page;
