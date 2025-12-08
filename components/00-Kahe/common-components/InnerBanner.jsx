// "use client";

// import Image from "next/image";
// import { usePathname, useParams } from "next/navigation";
// import BreadcrumbImage from "../../../public/images/Kahe/breadcrumb/banner-inner1.jpg";

// import bgImage2 from "../../../public/images/bg/breadcrumb-bg-01.png";
// import CourseBreadcrumbThree from "@/components/Course-Details/Course-Sections/Breadcrumb/CourseBreadcrumb-Three";
// import Link from "next/link";
// import "venobox/dist/venobox.min.css";
// import { useEffect } from "react";

// const InnerBanner = ({ checkMatch }) => {
//   const pathname = usePathname();
//   const path = useParams();

//   useEffect(() => {
//     import("venobox/dist/venobox.min.js").then((venobox) => {
//       new venobox.default({
//         selector: ".popup-video",
//       });
//     });
//   }, []);

//   const profiles = [
//     { name: "Ava Miller", src: "/images/shape/art-stu-2.png" },
//     { name: "Mark Jordan", src: "/images/shape/art-stu-1.png" },
//     { name: "Jordan", src: "/images/shape/art-stu-3.png" },
//   ];

//   return (
//     <>
//       <div className="breadcrumb-inner">
//         <Image
//           src={BreadcrumbImage}
//           width={1425}
//           height={460}
//           unoptimized={true}
//           alt="Education Images"
//         />
//       </div>
//       <div className="container">
//         <div className="row align-items-center">
//           {/* <CourseBreadcrumbThree getMatchCourse={checkMatch && checkMatch} /> */}
//           <div className="col-lg-7">
//             <div className="content text-start">
//               <ul className="page-list mb--80 mb_md--60 mb_sm--40">
//                 <li className="rbt-breadcrumb-item">
//                   <Link href="/">Home</Link>
//                 </li>
//                 <li>
//                   <div className="icon-right">
//                     <i className="feather-chevron-right"></i>
//                   </div>
//                 </li>
//                 <li className="rbt-breadcrumb-item ">Academics</li>
//                 <li>
//                   <div className="icon-right">
//                     <i className="feather-chevron-right"></i>
//                   </div>
//                 </li>
//                 <li className="rbt-breadcrumb-item active">
//                   Department of biochemistry
//                 </li>
//               </ul>

//               <h2 className="w-600 mb--10 text-white">Department of Biochemistry</h2>
//               <p className="mb--20 text-white">{checkMatch.desc}</p>
//               <hr className="divider" />
//               <div className="d-flex align-items-center flex-wrap rbt-course-details-feature vertion-02">
//                 <div className="feature-sin">
//                   <span className="icon">
//                     <i className="feather-calendar"></i>
//                   </span>
//                   <h6 className="b3 w-400 mb--0">
//                     <Link className="px-1 text-white" href={`/`}>
//                       Apply Today
//                     </Link>
//                   </h6>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-5">
//             {/* <div className="radius-10 overflow-hidden p-4 bg-color-white-opacity mt_md--60 mt_sm--60 mt_mobile--40">
//               <div className="plyr__video-embed rbtplayer">

//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InnerBanner;

import React from "react";
import BreadcrumbImage from "../../../public/images/Kahe/breadcrumb/banner-inner1.jpg";
import Link from "next/link";

const InnerBanner = () => {
  // Background image URL (you can replace this with your actual image path)
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80";

  return (
    <div className="uw-banner-container">
      <div
        className="uw-banner-background"
        style={{
          backgroundImage: `url(/images/Kahe/green-bg.avif)`,
          backgroundPosition:"bottom"
        }}
      ></div>
      <div className="uw-banner-overlay">
        <div className="uw-banner-content">
          <div className="uw-banner-header">
            <h2 className="banner-ti">Department of Biochemistry</h2>
          </div>

          <div className="uw-banner-text">
            <p className="banner-p">
             The University of Wyoming welcomes students to experience a one-of-a-kind education in the heart of the Mountain West. With our dedication to academic excellence and student-focused education, UW provides an environment  thrive both academically and personally. Admission to the University of Wyoming is just the first step to achieving your dreams.
            </p>
          </div>

          <div className="">
            {/* <button className="kahe-btn kahe-btn-secondary">Apply Today</button> */}
            <button className="rbt-btn hover-icon-reverse" href="#">
             <Link href={"#"}>
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Apply Now</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
             </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;
