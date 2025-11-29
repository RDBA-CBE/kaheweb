"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

import MenuData from "../../../../data/kahe/MegaMenu.json";

// import addImage from "../../../../public/images/service/mobile-cat.jpg";
import addImage from "../../../../public/images/banner/co-men.png";
import MobileMenuList from "./MobileMenuList";

const MobileMenuNav = () => {
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
      setIsMobile(window.innerWidth < 1200); // Adjust breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
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

  const showThreeCols =
    activeSub && activeSub.children && activeSub.children.length > 0;

  const [activeKeys, setActiveKeys] = useState([]);

  const toggleKey = (title) => {
    setActiveKeys((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <nav className="mainmenu-nav mobile-menu">
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
          >
            <div className="wrapper">
              <div className="row row--15">
                {/* COLUMN 1 — MAIN ITEMS */}
                {/* <div
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
                          className={
                            item.children
                              ? "has-submenu has-menu-child-item"
                              : ""
                          }
                        >
                          <Link
                            href={item.link}
                            className={`${
                              activeChildMenu === item.title ? "open" : ""
                            }`}
                            onClick={(e) => {
                              if (isMobile && item.children) {
                                e.preventDefault();
                                setActiveChildMenu(
                                  activeChildMenu === item.title
                                    ? null
                                    : item.title
                                );
                              }
                            }}
                          >
                            {item.title}
                            {item.children && (
                              <i className="feather-chevron-down"></i>
                            )}
                          </Link>

                          
                          {item.children && (
                            <ul
                              className={`mobile-child-submenu ${
                                activeChildMenu === item.title
                                  ? "d-block"
                                  : "d-none"
                              }`}
                            >
                              {item.children.map((child, idx) => (
                                <li key={idx}>
                                  <Link href={child.link}>{child.title}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                  </ul>
                </div> */}

                <MobileMenuList
                  items={
                    MenuData.menuData.find((item) => item.menuType === "home-1")
                      .menuItems
                  }
                  activeKeys={activeKeys}
                  toggleKey={toggleKey}
                />
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
export default MobileMenuNav;
