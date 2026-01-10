"use client";
import Breadcrumb from "@/components/00-Kahe/common-components/BreadCrumb";
import InnerSubBanner from "@/components/00-Kahe/common-components/InnerSubBanner";
import DeptPlacementCom from "@/components/00-Kahe/DirectPageComponent/DeptPlacementCom";
import GalleryPage from "@/components/00-Kahe/DirectPageComponent/GalleryPage";
import { useEffect, useState } from "react";

const Page = () => {
  const [content, setContent] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("placementData");
    const url = sessionStorage.getItem("placementDataUrl");
    setUrl(url);

    if (data) {
      setContent(JSON.parse(data));
    }
  }, []);

  console.log("url", url);
  

  if (!content) return <div>Loading...</div>;

  console.log("Content", content);

  const bannerCon = {
    bannerImg: "/images/Kahe/breadcrumb/banner-inner1.jpg",
    title: "Placements",
  };

  return (
    <>
      <InnerSubBanner data={bannerCon} />
      <Breadcrumb items={content?.breadcrumbItems} />
      <DeptPlacementCom data={content}/>
    
    </>
  );
};

export default Page;
