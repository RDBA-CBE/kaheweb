"use client";
import Breadcrumb from "@/components/00-Kahe/common-components/BreadCrumb";
import InnerSubBanner from "@/components/00-Kahe/common-components/InnerSubBanner";
import FacultyPage from "@/components/00-Kahe/DirectPageComponent/FacultyPage";
import { useEffect, useState } from "react";

const Page = () => {
  const [facultyContent, setFacultyContent] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("facultyData");
    if (data) {
      setFacultyContent(JSON.parse(data));
    }
  }, []);

  if (!facultyContent) return <div>Loading...</div>;
  console.log("facultyContent",facultyContent);
  

  const bannerCon = {
    bannerImg: "/images/Kahe/breadcrumb/banner-inner1.jpg",
    title: "Faculty",
  };

//    const breadcrumbItems = [
//     { label: "Academics", href: `academics` },
//     {
//       label: "Arts, Science, Commerce and Management",
//       href: `academics/arts-science-and-humanities/`,
//     },

//     { label: "Department of BioTechnology",
//          href: `/academics/arts-science-and-humanities/department-of-biotechnology`,
//      },
//     { label: "Faculty" },
//   ];

  return (
    <>
      <InnerSubBanner data={bannerCon} />
        <Breadcrumb items={facultyContent?.breadcrumbItems} />
      <FacultyPage facultyContent={facultyContent}/>
     
    </>
  );
};

export default Page;
