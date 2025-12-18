"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

const AccordianSidebar = ({ subMenu }) => {
  const [activeIndex, setActiveIndex] = useState(0); // keep open by default

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="content-item-content in-sidebar">
      {/* Only ONE accordion item */}
      <div className="research-acc-item">
        <button
          className={`research-acc-header ${
            activeIndex === 0 ? "active" : ""
          }`}
          onClick={() => toggleAccordion(0)}
          style={{
            backgroundColor: "#a2d0aa",
            color: "#000",
          }}
        >
          <span className="faculty-ti">Quick title</span>
          <span className="research-acc-icon">
            <i className="feather-chevron-down"></i>
          </span>
        </button>

        <div
          className="research-acc-body"
          style={{
            display: activeIndex === 0 ? "block" : "none",
            backgroundColor: "#f2fff9",
          }}
        >
          <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
            {subMenu?.content?.map((item, innerIndex) => (
              <li key={innerIndex} className="mb-2 d-flex flex-column">
                <span>
                  <Link href={`/kahe/${item.link}` || "#"}>
                    {item.category || item.name}
                  </Link>
                </span>

                {item.items && item.items.length > 0 && (
                  <ul className="mt-2 ms-1">
                    {item.items.map((sub, subIndex) => (
                      <li key={subIndex} className="mb-1">
                        <span>
                          <Link href={`/kahe/${sub.link}`}>
                            {sub.name}
                          </Link>
                        </span>

                        {sub.item && sub.item.length > 0 && (
                          <ul className="mt-2 ms-1">
                            {sub.item.map((innerSub, idx) => (
                              <li key={idx}>
                                <span>
                                  <Link href={`/kahe/${innerSub.link}`}>
                                    {innerSub.name}
                                  </Link>
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccordianSidebar;
