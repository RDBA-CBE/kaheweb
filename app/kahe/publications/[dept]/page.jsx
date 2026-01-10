"use client";
import Breadcrumb from "@/components/00-Kahe/common-components/BreadCrumb";
import InnerSubBanner from "@/components/00-Kahe/common-components/InnerSubBanner";
import PublicationPage from "@/components/00-Kahe/DirectPageComponent/PublicationPage";
import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("publicationsData");
    if (data) {
      setContent(JSON.parse(data));
    }
  }, []);

  if (!content) return <div>Loading...</div>;

  console.log("Content", content);

  const bannerCon = {
    bannerImg: "/images/Kahe/general/publications-banner.webp",
    title: "Publications",
  };

  return (
    <>
      <InnerSubBanner data={bannerCon} />
      <Breadcrumb items={content?.breadcrumbItems} />
      <PublicationPage publicationsContent={content} />
    </>
  );
};

export default Page;
