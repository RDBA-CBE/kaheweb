"use client";
import Breadcrumb from "@/components/00-Kahe/common-components/BreadCrumb";
import InnerSubBanner from "@/components/00-Kahe/common-components/InnerSubBanner";
import GalleryPage from "@/components/00-Kahe/DirectPageComponent/GalleryPage";
import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { set } from "rsuite/esm/internals/utils/date";

const Page = () => {
  const [content, setContent] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("galleryData");
    const url = sessionStorage.getItem("galleryUrl");
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
    title: "Gallery",
  };

  return (
    <>
      <InnerSubBanner data={bannerCon} />
      <GalleryPage content={content}/>
    
    </>
  );
};

export default Page;
