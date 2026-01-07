"use client";
import CampusEventGallery from "@/components/00-Kahe/CampusComponenets/CampusEventGallery";
import ImageGrid from "@/components/00-Kahe/common-components/ImageGrid";
import InnerSubBanner from "@/components/00-Kahe/common-components/InnerSubBanner";
import { useEffect, useState } from "react";

const Page = () => {
  const [content, setContent] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("camGalData");
     console.log("data", data);
    const url = sessionStorage.getItem("camGalUrl");
    setUrl(url);

    if (data) {
      setContent(JSON.parse(data));
    }
  }, []);

//   console.log("data", data);
  

  console.log("url", url);
  

  if (!content) return <div>Loading...</div>;

  console.log("Content", content);

  const bannerCon = {
    bannerImg: "/images/Kahe/breadcrumb/banner-inner1.jpg",
    title: "Campus Gallery",
  };

  return (
    <>

    
      <InnerSubBanner data={bannerCon} />
      <CampusEventGallery data={content} />
     
      
    
    </>
  );
};

export default Page;
