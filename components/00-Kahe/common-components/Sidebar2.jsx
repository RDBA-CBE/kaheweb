"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useAppContext } from "@/context/Context";

const Sidebar2 = ({ subMenu }) => {
  const { sidebar, setSidebar } = useAppContext();

  // 🔒 Lock body scroll when sidebar is open
  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount / route change
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebar]);

  return (
    <div
      className={`inner-sidebar popup-mobile-menu kahe ${
        sidebar ? "active" : ""
      }`}
    >
      {/* Backdrop */}
      <div className="backdrop" onClick={() => setSidebar(false)}></div>

      <div className="inner-wrapper">
        <div className="inner-top">
          <div className="content">
            {subMenu?.title && (
              <h6 className="sidebar-title">{subMenu.title}</h6>
            )}

            <div className="rbt-btn-close">
              <button
                className="close-button rbt-round-btn"
                onClick={() => setSidebar(false)}
              >
                <i className="feather-x"></i>
              </button>
            </div>
          </div>

          {/* Menu */}
          <ul className="mainmenu">
            {subMenu?.content?.map((menu, index) => {
              const hasItems = menu?.items && menu.items.length > 0;

              return (
                <li key={index} className={hasItems ? "has-submenu" : ""}>
                  <Link
                    href={`/kahe/${menu.link}` || "#"}
                    onClick={() => setSidebar(false)}
                  >
                    {menu.category || menu.name}
                  </Link>

                  {hasItems && (
                    <ul className="submenu">
                      {menu.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            href={`/kahe/${item.link}` || "#"}
                            onClick={() => setSidebar(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
