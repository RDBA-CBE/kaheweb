"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/Context";
import logo from "../../../../public/images/logo/logo.png";
import logoLight from "../../../../public/images/dark/logo/logo-light.png";

import Nav from "./Nav";

const HeaderLogos = ({ gapSpaceBetween, sticky, navigationEnd, container }) => {
  const { mobile, setMobile, isLightTheme } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`rbt-header-wrapper py-2 ${gapSpaceBetween} 
        }`}
      >
        <div className={`${container}`}>
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            <div className="header-left">
              <div className="logo">
                <Link href="/">
                  {isLightTheme ? (
                    <Image
                      src={logo}
                      width={152}
                      height={50}
                      priority={true}
                      alt="Education Logo Images"
                    />
                  ) : (
                    <Image
                      src={logoLight}
                      width={152}
                      height={50}
                      priority={true}
                      alt="Education Logo Images"
                    />
                  )}
                </Link>
              </div>
            </div>
            <div className=" d-none d-xl-block">
              <div className="d-flex ">
                {/* <Image
                  src="/images/splash/topfeature/02.png"
                  width={80}
                  height={50}
                  priority={true}
                  alt="Education Logo Images"
                /> */}

                <div className="header-info d-flex flex-column justify-content-center">
                  <ul className="social-share-transparent">
                    <li>
                      <Link href="https://www.facebook.com/wekaheians/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/wekaheians" target="_blank">
                        <i className="fab ">𝕏</i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/company/wekaheians/about/?viewAsMember=true" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://instagram.com/wekaheians?igshid=NGExMmI2YTkyZg==" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    {/* <li>
                    <Link href="#">
                      <i className="fab fa-skype"></i>
                    </Link>
                  </li> */}
                    <li>
                      <Link href="https://www.youtube.com/@wekaheians" target="_blank">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mobile-menu-bar d-block d-xl-none">
              <div className="hamberger">
                <button
                  className="hamberger-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-menu"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLogos;
