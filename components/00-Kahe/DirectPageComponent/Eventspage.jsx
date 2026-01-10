"use client";
import InnerSubBanner from "@/components/00-Kahe/common-components/InnerSubBanner";
import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import ParaImageSlider from "../Components/ParaImageSlider";
import TableCom from "../Components/TableCom";
import ImageGrid from "../common-components/ImageGrid";

const Eventspage = ({ eventsContent }) => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <div className="section-wid events-pg" style={{ padding: "80px 0" }}>
        <div className="rbt-course-feature-inner">
          <div className="section-title d-flex justify-content-lg-between ">
            <h2 className="decor-ti">{FirstLetterUp(eventsContent.tab)}</h2>

            <div className=" d-flex ">
              <div className="py-0">
                <div
                  onClick={goBack}
                  className="kahe-btn-primary rbt-btn hover-icon-reverse"
                  style={{ cursor: "pointer" }}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Go Back</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rbt-accordion-style rbt-accordion-02 accordion">
            <div className="accordion" id="accordionExampleb2">
              {eventsContent.items.map((item, i) => (
                <div className="accordion-item card" key={i}>
                  <p
                    className="accordion-header card-header"
                    id={`headingTwo${i}`}
                  >
                    <button
                      className={`accordion-button ${
                        i === 0 ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseTwo${i + 1}`}
                      aria-expanded={i === 0 ? "true" : "false"}
                      aria-controls={`collapseTwo${i + 1}`}
                    >
                      {item.title}
                    </button>
                  </p>
                  <div
                    id={`collapseTwo${i + 1}`}
                    className={`accordion-collapse collapse ${
                      i === 0 ? "show" : ""
                    }`}
                    aria-labelledby={`headingTwo${i}`}
                    data-bs-parent="#accordionExampleb2"
                  >
                    <div className="accordion-body card-body pr--0">
                      {item?.multiContent &&
                        item?.multiContent?.map((item, index) => (
                          <section className="py-4" key={index}>
                            {item?.title && (
                              <h2
                                className="main-ti text-black"
                                dangerouslySetInnerHTML={{
                                  __html: FirstLetterUp(item?.title),
                                }}
                              />
                            )}
                            {item?.content && (
                              <p className="pb-3">{item?.content}</p>
                            )}

                            {item?.contentList && (
                              <ul className="rbt-course-main-content liststyle">
                                {item.contentList.map((list, subIndex) => (
                                  <li key={subIndex}>
                                    <div>
                                      <div className="course-content-left">
                                        <i className="feather-file-text"></i>

                                        <span
                                          className="text"
                                          dangerouslySetInnerHTML={{
                                            __html: list,
                                          }}
                                        ></span>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {item?.table && <TableCom data={item?.table} />}

                            {item?.images && <ImageGrid data={item?.images} />}
                            {}
                          </section>
                        ))}

                      {/* <section className="mt-5">
                        <TableCom data={item?.tableImageContent} />
                        <ImageGrid data={item?.tableImageContent?.images} />
                      </section> */}

                      {item?.content && (
                        <ul className="rbt-course-main-content liststyle">
                          {item.content.map((list, subIndex) => (
                            <li key={subIndex}>
                              <div>
                                <div className="course-content-left">
                                  <i className="feather-file-text"></i>

                                  <span
                                    className="text"
                                    dangerouslySetInnerHTML={{ __html: list }}
                                  ></span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventspage;
