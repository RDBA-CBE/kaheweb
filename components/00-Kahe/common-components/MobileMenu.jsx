"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo/logo.png";

import { useAppContext } from "@/context/Context";
import Nav from "./Header-sub-components/Nav";
import MobileMenuNav from "./Header-sub-components/MobileMenuNav";

const MobileMenu = () => {
  const { mobile, setMobile } = useAppContext();


  return (
    <>
      <div className={`popup-mobile-menu kahe ${mobile ? "" : "active"}`}>
        <div className="backdrop" onClick={() => setMobile(!mobile)}></div>
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={logo}
                    width={137}
                    height={45}
                    alt="Education Logo Images"
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
            
          </div>

          <MobileMenuNav />

          
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
