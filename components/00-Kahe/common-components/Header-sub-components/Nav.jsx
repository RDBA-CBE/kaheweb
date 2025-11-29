// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// import { useState } from "react";

// import MenuData from "../../../../data/kahe/MegaMenu.json";
// import CourseLayout from "./CourseLayout";
// import PageLayout from "./PageLayout";
// import ElementsLayout from "./ElementsLayout";

// // import addImage from "../../../../public/images/service/mobile-cat.jpg";
// import addImage from "../../../../public/images/banner/co-men.png";

// const Nav = () => {
//   const [activeMenuItem, setActiveMenuItem] = useState(null);
//   const [activeSub, setActiveSub] = useState(null);

//   const pathname = usePathname();

//   const isActive = (href) => pathname.startsWith(href);
//   const [activeChild, setActiveChild] = useState(null);

//   const toggleMenuItem = (item) => {
//     if (activeMenuItem === item) {
//       setActiveMenuItem(null);
//       setActiveSub(null);
//     } else {
//       setActiveMenuItem(item);
//     }
//   };

//   const showThreeCols =
//     activeSub && activeSub.children && activeSub.children.length > 0;

//   return (
//     <nav className="mainmenu-nav">
//       <ul className="mainmenu">
//         <li className="with-megamenu has-menu-child-item position-static">
//           <Link
//             className={`${activeMenuItem === "home" ? "open" : ""}`}
//             onClick={() => toggleMenuItem("home")}
//             href="#"
//           >
//             About
//             <i className="feather-chevron-down"></i>
//           </Link>

//           <div
//             className={`rbt-megamenu ${
//               showThreeCols ? "grid-item-3" : "grid-item-2"
//             } ${activeMenuItem === "home" ? "active d-block" : ""}`}
//             onMouseLeave={() => {
//               setActiveSub(null);
//               setActiveChild(null);
//             }}
//           >
//             <div className="wrapper">
//               <div className="row row--15">
//                 {/* COLUMN 1 — MAIN ITEMS */}
//                 <div
//                   className={`single-mega-item ${
//                     showThreeCols
//                       ? "col-lg-4 col-xl-4 col-xxl-4"
//                       : "col-lg-6 col-xl-6 col-xxl-6"
//                   }`}
//                 >
//                   <ul className="mega-menu-item">
//                     {MenuData.menuData
//                       .find((item) => item.menuType === "home-1")
//                       ?.menuItems.map((item, i) => (
//                         <li
//                           key={i}
//                           className={item.children ? "has-submenu has-menu-child-item" : ""}
//                           onMouseEnter={() => {
//                             setActiveSub(item);
//                             setActiveChild(null); // reset child
//                           }}
//                         >
//                           <Link className={`${showThreeCols ? "open" : ""}`} href={item.link}>
//                             {item.title}
//                             {item.children && (
//                               <i className="feather-chevron-right ms-2"></i>
//                             )}
//                           </Link>
//                         </li>
//                       ))}
//                   </ul>
//                 </div>

//                 {/* COLUMN 2 — SUBMENU */}
//                 <div
//                   className={`single-mega-item ${
//                     showThreeCols ? "col-lg-4 col-xl-4 col-xxl-4 active d-block" : "d-none"
//                   }`}
//                 >
//                   {activeSub?.children && (
//                     <ul className="mega-menu-item submenu-list">
//                       {activeSub.children.map((child, idx) => (
//                         <li
//                           key={idx}
//                           onMouseEnter={() => setActiveChild(child)} // <-- NEW
//                         >
//                           <Link className={`${showThreeCols ? child.title : "open"}`} href={child.link} onClick={() => toggleMenuItem(child.title)}>{child.title}</Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>

//                 {/* COLUMN 3 — IMAGE + TITLE + DESCRIPTION */}
//                 <div
//                   className={`single-mega-item ${
//                     showThreeCols
//                       ? "col-lg-4 col-xl-4 col-xxl-4"
//                       : "col-lg-6 col-xl-6 col-xxl-6"
//                   }`}
//                 >
//                   <div className="rbt-ads-wrapper fade-smooth">
//                     <h6 className="sub-dd-ti">
//                       {activeChild?.title || activeSub?.title || "About"}
//                     </h6>

//                     <p className="sub-dd-p">
//                       {activeChild?.desc ||
//                         activeSub?.desc ||
//                         "Explore more details related to this section."}
//                     </p>

//                     <Link
//                       className="d-block"
//                       href={activeChild?.link || activeSub?.link || "#"}
//                     >
//                       <Image
//                         src={activeChild?.src || activeSub?.src || addImage}
//                         alt="Menu Banner"
//                         width={400}
//                         height={300}
//                       />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </li>

//         <li className="with-megamenu has-menu-child-item">
//           <Link
//             className={`${activeMenuItem === "courses" ? "open" : ""}`}
//             href="#"
//             onClick={() => toggleMenuItem("courses")}
//           >
//             Courses
//             <i className="feather-chevron-down"></i>
//           </Link>
//         </li>

//         <li className="has-dropdown has-menu-child-item">
//           <Link
//             className={`${activeMenuItem === "dashboard" ? "open" : ""}`}
//             href="#"
//             onClick={() => toggleMenuItem("dashboard")}
//           >
//             Dashboard
//             <i className="feather-chevron-down"></i>
//           </Link>
//         </li>
//         <li className="with-megamenu has-menu-child-item position-static">
//           <Link
//             href="#"
//             className={`${activeMenuItem === "pages" ? "open" : ""}`}
//             onClick={() => toggleMenuItem("pages")}
//           >
//             Pages
//             <i className="feather-chevron-down"></i>
//           </Link>
//         </li>
//         <li className="with-megamenu has-menu-child-item position-static">
//           <Link
//             href="#"
//             className={`${activeMenuItem === "elements" ? "open" : ""}`}
//             onClick={() => toggleMenuItem("elements")}
//           >
//             Elements
//             <i className="feather-chevron-down"></i>
//           </Link>
//         </li>
//         <li className="with-megamenu has-menu-child-item position-static">
//           <Link
//             href="#"
//             className={`${activeMenuItem === "blog" ? "open" : ""}`}
//             onClick={() => toggleMenuItem("blog")}
//           >
//             Blog
//             <i className="feather-chevron-down"></i>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };
// export default Nav;



"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import MenuData from "../../../../data/kahe/MegaMenu.json";
import CourseLayout from "./CourseLayout";
import PageLayout from "./PageLayout";
import ElementsLayout from "./ElementsLayout";

// import addImage from "../../../../public/images/service/mobile-cat.jpg";
import addImage from "../../../../public/images/banner/co-men.png";

const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [activeChild, setActiveChild] = useState(null);
  const [activeChildMenu, setActiveChildMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();

  const isActive = (href) => pathname.startsWith(href);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992); // Adjust breakpoint as needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMenuItem = (item) => {
    if (activeMenuItem === item) {
      setActiveMenuItem(null);
      setActiveSub(null);
      setActiveChild(null);
      setActiveChildMenu(null);
    } else {
      setActiveMenuItem(item);
      setActiveSub(null);
      setActiveChild(null);
      setActiveChildMenu(null);
    }
  };

  const toggleSubMenu = (item) => {
    if (activeSub === item) {
      setActiveSub(null);
      setActiveChild(null);
      setActiveChildMenu(null);
    } else {
      setActiveSub(item);
      setActiveChild(null);
      setActiveChildMenu(null);
    }
  };

  const toggleChildMenu = (childItem) => {
    if (activeChildMenu === childItem) {
      setActiveChildMenu(null);
    } else {
      setActiveChildMenu(childItem);
    }
  };

  // Hover handlers for desktop
  const handleSubMenuHover = (item) => {
    if (!isMobile) {
      setActiveSub(item);
      setActiveChild(null);
      setActiveChildMenu(null);
    }
  };

  const handleChildHover = (child) => {
    if (!isMobile) {
      setActiveChild(child);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveSub(null);
      setActiveChild(null);
      setActiveChildMenu(null);
    }
  };

  const showThreeCols =
    activeSub && activeSub.children && activeSub.children.length > 0;

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            className={`${activeMenuItem === "home" ? "open" : ""}`}
            onClick={() => isMobile && toggleMenuItem("home")}
            href="#"
          >
            About
            <i className="feather-chevron-down"></i>
          </Link>

          <div
            className={`rbt-megamenu ${
              showThreeCols ? "grid-item-3" : "grid-item-2"
            } ${activeMenuItem === "home" ? "active d-block" : ""}`}
            onMouseLeave={handleMouseLeave}
          >
            <div className="wrapper">
              <div className="row row--15">
                {/* COLUMN 1 — MAIN ITEMS */}
                <div
                  className={`single-mega-item ${
                    showThreeCols
                      ? "col-lg-4 col-xl-4 col-xxl-4"
                      : "col-lg-6 col-xl-6 col-xxl-6"
                  }`}
                >
                  <ul className="mega-menu-item">
                    {MenuData.menuData
                      .find((item) => item.menuType === "home-1")
                      ?.menuItems.map((item, i) => (
                        <li
                          key={i}
                          className={item.children ? "has-submenu has-menu-child-item" : ""}
                          onMouseEnter={() => handleSubMenuHover(item)}
                        >
                          <Link 
                            className={`${showThreeCols ? "open" : ""} ${
                              activeSub === item ? "active" : ""
                            }`} 
                            href={item.link}
                            onClick={(e) => {
                              if (isMobile && item.children) {
                                e.preventDefault();
                                toggleSubMenu(item);
                              }
                            }}
                          >
                            {item.title}
                            {item.children && (
                              <i className="feather-chevron-right ms-2"></i>
                            )}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* COLUMN 2 — SUBMENU */}
                <div
                  className={`single-mega-item ${
                    showThreeCols ? "col-lg-4 col-xl-4 col-xxl-4 active d-block" : "d-none"
                  }`}
                >
                  {activeSub?.children && (
                    <ul className="mega-menu-item submenu-list">
                      {activeSub.children.map((child, idx) => (
                        <li
                          key={idx}
                          className={child.children ? "has-submenu has-menu-child-item position-relative" : ""}
                          onMouseEnter={() => handleChildHover(child)}
                        >
                          <Link 
                            className={`${showThreeCols ? child.title : "open"} ${
                              activeChildMenu === child.title ? "open" : ""
                            }`} 
                            href={child.link} 
                            onClick={(e) => {
                              if (isMobile && child.children) {
                                e.preventDefault();
                                toggleChildMenu(child.title);
                              } else if (isMobile) {
                                setActiveChild(child);
                              }
                            }}
                          >
                            {child.title}
                            {child.children && (
                              <i className="feather-chevron-right ms-2"></i>
                            )}
                          </Link>

                          {/* CHILD SUBMENU - Positioned absolutely below the parent */}
                          {child.children && (
                            <ul className={`mega-menu-item submenu-list child-submenu position-absolute ${
                              activeChildMenu === child.title ? "active d-block" : "d-none"
                            }`}
                            style={{
                              top: '100%',
                              left: '0',
                              minWidth: '200px',
                              zIndex: 1000
                            }}>
                              {child.children.map((grandChild, grandIdx) => (
                                <li key={grandIdx}>
                                  <Link 
                                    href={grandChild.link}
                                    onClick={() => setActiveChild(grandChild)}
                                  >
                                    {grandChild.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* COLUMN 3 — IMAGE + TITLE + DESCRIPTION */}
                <div
                  className={`single-mega-item ${
                    showThreeCols
                      ? "col-lg-4 col-xl-4 col-xxl-4"
                      : "col-lg-6 col-xl-6 col-xxl-6"
                  }`}
                >
                  <div className="rbt-ads-wrapper fade-smooth">
                    <h6 className="sub-dd-ti">
                      {activeChild?.title || activeSub?.title || "About"}
                    </h6>

                    <p className="sub-dd-p">
                      {activeChild?.desc ||
                        activeSub?.desc ||
                        "Explore more details related to this section."}
                    </p>

                    <Link
                      className="d-block"
                      href={activeChild?.link || activeSub?.link || "#"}
                    >
                      <Image
                        src={activeChild?.src || activeSub?.src || addImage}
                        alt="Menu Banner"
                        width={400}
                        height={300}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* Other menu items remain the same */}
        <li className="with-megamenu has-menu-child-item">
          <Link
            className={`${activeMenuItem === "courses" ? "open" : ""}`}
            href="#"
            onClick={() => isMobile && toggleMenuItem("courses")}
          >
            Courses
            <i className="feather-chevron-down"></i>
          </Link>
        </li>

        <li className="has-dropdown has-menu-child-item">
          <Link
            className={`${activeMenuItem === "dashboard" ? "open" : ""}`}
            href="#"
            onClick={() => isMobile && toggleMenuItem("dashboard")}
          >
            Dashboard
            <i className="feather-chevron-down"></i>
          </Link>
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="#"
            className={`${activeMenuItem === "pages" ? "open" : ""}`}
            onClick={() => isMobile && toggleMenuItem("pages")}
          >
            Pages
            <i className="feather-chevron-down"></i>
          </Link>
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="#"
            className={`${activeMenuItem === "elements" ? "open" : ""}`}
            onClick={() => isMobile && toggleMenuItem("elements")}
          >
            Elements
            <i className="feather-chevron-down"></i>
          </Link>
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="#"
            className={`${activeMenuItem === "blog" ? "open" : ""}`}
            onClick={() => isMobile && toggleMenuItem("blog")}
          >
            Blog
            <i className="feather-chevron-down"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
