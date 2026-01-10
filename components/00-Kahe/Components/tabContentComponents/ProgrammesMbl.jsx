import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FirstLetterUp } from "@/utils/functions.utils";

const ProgrammesMbl = ({ programmeContent }) => {
  const router = useRouter();

  const [activeMain, setActiveMain] = useState("programmes");
  const [activeProgramme, setActiveProgramme] = useState("ug");
  const [openAccordion, setOpenAccordion] = useState(null);

  const navigateToBatch = (yearLink) => {
    window.open(yearLink, "_blank");
  };

  const programmeTabs = programmeContent.programmes?.content;

  const curriculumTabs = programmeContent.curriculum?.content;

  console.log("programmeTabs", programmeTabs);

  return (
    <div className="mobile-wrapper d-md-none">
      <h2 className="main-ti">Student Programmes</h2>

      <div className="mobile-main-tab">
        <button
          className={`main-sub-ti ${
            activeMain === "programmes" ? "active-main-btn" : "main-btn"
          }`}
          onClick={() => setActiveMain("programmes")}
        >
          Programmes
        </button>

        <button
          className={`main-sub-ti ${
            activeMain === "curriculum" ? "active-main-btn" : "main-btn"
          }`}
          onClick={() => setActiveMain("curriculum")}
        >
          Curriculum
        </button>
      </div>

      {/* ============================= PROGRAMMES ============================= */}
      {activeMain === "programmes" && (
        <>
          {programmeTabs?.some((item) => item.items) ? (
            <>
              {/* INNER MENU */}
              <div className="inner-program-tabs">
                {programmeTabs.map((item) => (
                  <button
                    key={item.key}
                    className={
                      activeProgramme === item.key
                        ? "active-inner-btn"
                        : "inner-btn"
                    }
                    onClick={() => setActiveProgramme(item.key)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              {/* FILTERED ITEM DISPLAY */}
              {(() => {
                const activeData = programmeTabs.find(
                  (p) => p.key === activeProgramme
                );

                if (!activeData) return null;

                return (
                  <div className="program-overlay-container">
                    <div
                      className="program-bg-image"
                      style={{
                        backgroundImage: `url(${activeData.img})`,
                      }}
                    />

                    <div className="program-overlay-box">
                      {activeData?.items?.map((program, idx) => (
                        <div className="program-overlay-row" key={idx}>
                          <i class="feather-chevron-right me-3 "></i>

                          <span className="main-sub-ti ">
                            {program}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </>
          ) : programmeTabs?.some((item) => item.multiItems) ? (
            <>
              <div className="curriculum-wrapper">
                {programmeTabs.map((programme, programmeIndex) => (
                  <div className="curriculum-item" key={programme.key}>
                    <div
                      className="curriculum-header"
                      onClick={() =>
                        setOpenAccordion(
                          openAccordion === programmeIndex
                            ? null
                            : programmeIndex
                        )
                      }
                    >
                      <p className="text-black acc-ti">{programme.title}</p>
                      <span>
                        {openAccordion === programmeIndex ? "−" : "+"}
                      </span>
                    </div>

                    {openAccordion === programmeIndex && (
                      <div className="curriculum-content">
                        {programme.multiItems?.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="pb-4">
                            {section.title && (
                              <div className="program-overlay-row d-flex">
                                <i className="feather-chevron-right mt-2 me-3 "></i>
                                <span className="main-sub-ti  mb-2">
                                  {FirstLetterUp(section.title)}
                                </span>
                              </div>
                            )}

                            {section.desc && (
                              <p className=" ps-5">
                                {FirstLetterUp(section.desc)}
                              </p>
                            )}

                            {section.list && (
                              <ul className="rbt-list-style-1 ps-5">
                                {section.list.map((value, listIndex) => (
                                  <li key={listIndex} className="mt-0 pt-0">
                                    <i className="feather-check"></i>
                                    <span
                                      className="text-start "
                                      dangerouslySetInnerHTML={{
                                        __html: value,
                                      }}
                                    />
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </>
      )}

      {activeMain === "curriculum" && (
        <div className="curriculum-wrapper">
          {curriculumTabs.map((item, index) => (
            <div className="curriculum-item" key={index}>
              <div
                className="curriculum-header"
                onClick={() =>
                  setOpenAccordion(openAccordion === index ? null : index)
                }
              >
                <p className="text-black acc-ti">{item.title}</p>
                <span>{openAccordion === index ? "−" : "+"}</span>
              </div>

              {openAccordion === index && (
                <div className="curriculum-content">
                  {item.items.map((batchObj, j) => (
                    <p
                      key={j}
                      className="batch-link"
                      onClick={() => navigateToBatch(batchObj.link)}
                    >
                      {batchObj.year} →
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgrammesMbl;
