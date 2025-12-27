// "use client";

// import Link from "next/link";
// import { useEffect } from "react";
// import { useAppContext } from "@/context/Context";
// import { usePathname } from "next/navigation";

// const Sidebar2 = ({ subMenu }) => {
//   const pathname = usePathname();
//   const { sidebar, setSidebar } = useAppContext();

//   const normalize = (path = "") => path.replace(/\/+$/, "");
//   const currentPath = normalize(pathname);

//   const isActive = (link = "") => currentPath === normalize(`/kahe${link}`);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   useEffect(() => {
//       subMenu?.content?.forEach((item, index) => {
//         if (item.items?.some((sub) => isActive(sub.link))) {
//           setOpenIndex(index);
//         }
//       });
//     }, [currentPath, subMenu]);

//   // 🔒 Lock body scroll when sidebar is open
//   useEffect(() => {
//     if (sidebar) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     // Cleanup on unmount / route change
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [sidebar]);

//   return (
//     <div
//       className={`inner-sidebar popup-mobile-menu kahe ${
//         sidebar ? "active" : ""
//       }`}
//     >
//       {/* Backdrop */}
//       <div className="backdrop" onClick={() => setSidebar(false)}></div>

//       <div className="inner-wrapper">
//         <div className="inner-top">
//           <div className="content">
//             {subMenu?.title && (
//               <h6 className="sidebar-title">{subMenu.title}</h6>
//             )}

//             <div className="rbt-btn-close">
//               <button
//                 className="close-button rbt-round-btn"
//                 onClick={() => setSidebar(false)}
//               >
//                 <i className="feather-x"></i>
//               </button>
//             </div>
//           </div>

//           {/* Menu */}
//           <ul className="mainmenu">
//             {subMenu?.content?.map((menu, index) => {
//               const hasItems = menu?.items && menu.items.length > 0;

//               return (
//                 <li key={index} className={hasItems ? "has-submenu" : ""}>
//                   <Link
//                     href={`/kahe/${menu.link}` || "#"}
//                     onClick={() => setSidebar(false)}
//                   >
//                     {menu.category || menu.name}
//                   </Link>

//                   {hasItems && (
//                     <ul className="submenu">
//                       {menu.items.map((item, i) => (
//                         <li key={i}>
//                           <Link
//                             href={`/kahe/${item.link}` || "#"}
//                             onClick={() => setSidebar(false)}
//                           >
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar2;

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAppContext } from "@/context/Context";

const Sidebar2 = ({ subMenu }) => {
  const pathname = usePathname();
  const { sidebar, setSidebar } = useAppContext();
  const [openIndex, setOpenIndex] = useState(null);

  const normalize = (path = "") => path.replace(/\/+$/, "");
  const currentPath = normalize(pathname);

  const isActive = (link = "") =>
    currentPath === normalize(`/kahe${link}`);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* ✅ AUTO OPEN ACTIVE ACCORDION */
  useEffect(() => {
    subMenu?.content?.forEach((item, index) => {
      if (item.items?.some((sub) => isActive(sub.link))) {
        setOpenIndex(index);
      }
    });
  }, [currentPath, subMenu]);

  /* 🔒 LOCK BODY SCROLL */
  useEffect(() => {
    document.body.style.overflow = sidebar ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [sidebar]);

  return (
    <div
      className={`inner-sidebar popup-mobile-menu kahe ${
        sidebar ? "active" : ""
      } sidebar-pg`}
    >
      <div className="backdrop" onClick={() => setSidebar(false)} />

      <div className="inner-wrapper">
        <div className="inner-top">
          <div className="content-item-content in-sidebar">
            <div className="rbt-widget-details has-show-more">

              <div className="content">
                {subMenu?.title && (
                  <h6 className="sidebar-title">{subMenu.title}</h6>
                )}
                <div className="rbt-btn-close">
                  <button
                    className="close-button rbt-round-btn"
                    onClick={() => setSidebar(false)}
                  >
                    <i className="feather-x" />
                  </button>
                </div>
              </div>

              <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
                {subMenu?.content?.map((item, index) => {
                  const hasSubmenu = item.items?.length > 0;
                  const isOpen = openIndex === index;

                  return (
                    <li
                      key={index}
                      className="my-0 py-0 d-flex flex-column"
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
                          <span style={{color:"#333"}}>{item.category}</span>
                          <span className="research-acc-icon">
                            <i className="feather-chevron-down" />
                          </span>
                        </button>
                      ) : (
                        <span
                          className={`d-block px-3 py-4 w-100 ${
                            isActive(item.link) ? "active" : ""
                          }`}
                        >
                          <Link
                            href={`/kahe${item.link}`}
                            onClick={() => setSidebar(false)}
                          >
                            {item.category}
                          </Link>
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
                              <li key={subIndex} className="my-0 py-0">
                                <span
                                  className={`d-block px-3 py-4 w-100 ${
                                    isActive(sub.link) ? "active" : ""
                                  }`}
                                >
                                  <Link
                                    href={`/kahe${sub.link}`}
                                    onClick={() => setSidebar(false)}
                                  >
                                    {sub.name}
                                  </Link>
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;

