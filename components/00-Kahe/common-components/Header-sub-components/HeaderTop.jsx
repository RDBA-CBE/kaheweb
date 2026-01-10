import { useAppContext } from "@/context/Context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderTop = ({
  gapSpaceBetween,
  bgColor,
  flexDirection,
  btnText,
  btnClass,
  container,
}) => {
  const pathname = usePathname();
  const { toggle, setToggle } = useAppContext();
  return (
    <>
      <div
        className={`rbt-header-top rbt-header-top-1 ${
          pathname === "/19-modern-university" ||
          "/24-health-wellness-institute"
            ? ""
            : "variation-height-50"
        } ${gapSpaceBetween} ${bgColor} d-none d-xl-block ${
          !toggle ? "d-none" : ""
        }`}
      >
        <div className={`${container}`}>
          <div className={`rbt-header-sec align-items-center ${flexDirection}`}>
            <div className="rbt-header-sec-col rbt-header-left">
              <div className="rbt-header-content">
                <div className="header-info">
                  <ul className="rbt-information-list">
                    <li>
                      <Link href="tellto:04222980011">
                        <i className="feather-phone"></i>+91-422 – 2980011 – 14
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="rbt-separator"></div>
                <div className="header-info">
                  <ul className="rbt-information-list">
                    <li>
                      <Link href="mailto:info@kahedu.edu.in">
                        <i className="feather-mail"></i>info@kahedu.edu.in
                      </Link>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>

            <div className="rbt-header-sec-col rbt-header-right">
              <div className="rbt-header-content">
                <div className="header-info">
                  <ul className="rbt-secondary-menu">
                    <li>
                      <Link href="#">Academic Calendar</Link>
                    </li>
                    <li>
                      <Link href="https://www.karpagamalumni.in/" target="_blank">Alumni Association</Link>
                    </li>
                    <li>
                      <Link href="http://karpagam.edu.in/Automation/studentOnline.do?param=login&Id=1" target="_blank"> Student Login</Link>
                    </li>
                    <li>
                      <Link href="http://karpagampublications.com/" target="_blank">Karpagam Publications</Link>
                    </li>
                    <li>
                      <Link href="https://kaheodl.edu.in/" target="_blank">Center for ODL/DL</Link>
                    </li>
                    <li>
                      <Link href="/kahe/admissions/admission-details/how-to-apply/">Admission Enquiry</Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="rbt-separator"></div> */}
                {/* <div className="header-info" onClick={() => setToggle(!toggle)}>
                  <div className="header-right-btn d-flex">
                    <Link className={`rbt-btn ${btnClass}`} href="#">
                      <span data-text={`${btnText}`}>{btnText}</span>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
