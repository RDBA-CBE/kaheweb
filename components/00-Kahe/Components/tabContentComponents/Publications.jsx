"use client";
import { useState } from "react";

export default function Publications({publicationsContent}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [toggle, setToggle] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  console.log("publicationsContent",publicationsContent);
  

  const data = [
    {
      title: "Dr. K. Poornima",
      list: [
        "Kannappan Poornima et al. Chromatographic Fingerprinting Analysis...",
        "Gebrehiwot TY, Drug Invent. Today. 2020 Jun 1;13(6):903−8.",
        "Bhaskaran SK, Cardiovasc Hematol Agents Med Chem. 2020 Aug 11.",
        "Poorinima K, Biomed Res Int. 2014;2014:240243.",
        "Bhaskaran SK, Biomed Pharmacother. 2017 May;89:473−481.",
      ],
    },
    {
      title: "Dr. M. Sridhar Muthusami",
      list: [
        "Krishnan A, J Endocrinol. 2017 Feb;232(2):R99−R113.",
        "Muthusami S, Cancer Lett. 2020 Sep 8.",
        "Muthusami S, Curr Protein Pept Sci. 2020(21):52−65.",
        "Muthusami S, Cancer Lett. 2014;351(2):252−9.",
        "Muthusami S, J Cancer Res Clin Oncol. 2015;141(2):203−10.",
      ],
    },
  ];

  return (
    <>
      <div
        className={`rbt-course-feature-box publication  mt--30 has-show-more ${
          toggle ? "active" : ""
        }`}
       
      >
        <div className="research-acc-wrapper has-show-more-inner-content">

          <div className="section-title">
            <h2
              className="main-ti"
             
            >{publicationsContent.tab}</h2>
          </div>

          <h3 className="main-sub-ti">{publicationsContent?.title}</h3>

          {publicationsContent.content?.map((item, index) => (
            <div className="research-acc-item" key={index}>
              <button
                className={`research-acc-header ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
                style={{
                  backgroundColor: index % 2 === 0 ? "#153b1c" : "#f2fff9",
                  color: index % 2 === 0 ? "#fff" : "#153b1c",
                }}
              >
                <span className="faculty-ti">{item.faculty_name}</span>
                <span className="research-acc-icon">
                  <i class="feather-chevron-down"></i>
                </span>
              </button>

              <div
                className="research-acc-body"
                style={{
                  display: activeIndex === index ? "block" : "none",
                  backgroundColor: index % 2 === 0 ? "#f2fff9" : "#f2fff9",
                }}
              >
                <ol>
                  {item.content.map((pub, idx) => (
                    <li key={idx}>{pub}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "Show Less" : "Show More"}
        </div>
      </div>
    </>
  );
}
