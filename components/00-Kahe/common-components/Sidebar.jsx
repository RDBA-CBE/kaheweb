"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ subMenu }) => {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState(null);

  const normalize = (path = "") => path.replace(/\/+$/, "");
  const currentPath = normalize(pathname);

  const isActive = (link = "") => currentPath === normalize(`/kahe${link}`);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* ✅ AUTO OPEN ACCORDION IF SUBMENU IS ACTIVE */
  useEffect(() => {
    subMenu?.content?.forEach((item, index) => {
      if (item.items?.some((sub) => isActive(sub.link))) {
        setOpenIndex(index);
      }
    });
  }, [currentPath, subMenu]);

  return (
    <div className="content-item-content in-sidebar">
      <h3 className="main-sub-ti mb-3">
        {subMenu.title}
      </h3>
      <div className="rbt-widget-details has-show-more">
        <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
          {subMenu?.content?.map((item, index) => {
            const hasSubmenu = item.items && item.items.length > 0;
            const isOpen = openIndex === index;

            return (
              <li
                key={index}
                className="my-0 py-0 d-flex flex-column"
                onClick={() => {
                  if (!hasSubmenu && item.link) {
                    window.location.href = `/kahe${item.link}`;
                  } else {
                    toggleAccordion(index);
                  }
                }}
                style={{ cursor: !hasSubmenu ? "pointer" : "default" }}
              >
                {/* HEADER */}
                {hasSubmenu ? (
                  <button
                    type="button"
                    className={`research-acc-header bg-none w-100 px-3 ${
                      isOpen ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span
                       style={{color:"#333"}}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleAccordion(index);
                      }}
                    >
                      {/* <Link
                        href={item.link ? `/kahe${item.link}` : "#"}
                        
                      > */}
                      {item.category}
                      {/* </Link> */}
                    </span>

                    <span className="research-acc-icon">
                      <i className="feather-chevron-down"></i>
                    </span>
                  </button>
                ) : (
                  <span
                    className={`d-block px-3 py-4 w-100 ${
                      isActive(item.link) ? "active" : ""
                    }`}
                  >
                    {item.category}
                  </span>
                )}

                {/* BODY */}
                {hasSubmenu && (
                  <div
                    className="research-acc-body p-0"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    <ul className="ms-2">
                      {item.items.map((sub, subIndex) => (
                        <li
                          key={subIndex}
                          className="my-0 py-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = `/kahe${sub.link}`;
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <span
                            className={`d-block px-3 py-4 w-100 ${
                              isActive(sub.link) ? "active" : ""
                            }`}
                          >
                            {sub.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
