"use client";
import Breadcrumb from "@/components/00-Kahe/common-components/BreadCrumb";
import InnerSubBanner from "@/components/00-Kahe/common-components/InnerSubBanner";
import Infrastructure from "@/components/00-Kahe/Components/tabContentComponents/Infrastructure";
import GalleryPage from "@/components/00-Kahe/DirectPageComponent/GalleryPage";
import { useEffect, useState } from "react";

const Page = () => {
  const [content, setContent] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("labotoryData");
    const url = sessionStorage.getItem("labotoryUrl");
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
      <Breadcrumb items={content?.breadcrumbItems} />
      <GalleryPage content={content} />
      {content?.section1 && (
        <div
          className=" rbt-review-wrapper review-wrapper section-bg3"
          id=""
        >
          <Infrastructure
            infrastructureContent={content?.section1 && content?.section1}
          />
        </div>
      )}
    </>
  );
};

export default Page;
