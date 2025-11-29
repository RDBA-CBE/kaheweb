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
              <Image
                src="/images/splash/topfeature/02.png"
                width={80}
                height={50}
                priority={true}
                alt="Education Logo Images"
              />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLogos;
