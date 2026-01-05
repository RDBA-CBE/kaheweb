// import Image from "next/image";
// import Link from "next/link";

// import logo from "../../../public/images/logo/logo.png";
// import logoLight from "../../../public/images/dark/logo/logo-light.png";

// import FooterData from "../../../data/footer.json";

// import { useAppContext } from "@/context/Context";
// import SingleFooter from "./Footer-sub-components/SingleFooter";
// import Copyright from "./Footer-sub-components/Copyright";

// const Footer = () => {
//   const { isLightTheme } = useAppContext();
//   return (
//     <>
//       <footer className="rbt-footer footer-style-1">
//         <div className="footer-top">
//           <div className="container">
//             {FooterData &&
//               FooterData.footerOne.map((footer, index) => (
//                 <div className="row row--15 mt_dec--30" key={index}>
//                   <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
//                     <div className="footer-widget">
//                       <div className="logo">
//                         <Link href="/">
//                           {isLightTheme ? (
//                             <Image
//                               src={logo}
//                               width={152}
//                               height={50}
//                               priority={true}
//                               alt="Education Logo Images"
//                             />
//                           ) : (
//                             <Image
//                               src={logoLight}
//                               width={152}
//                               height={50}
//                               priority={true}
//                               alt="Education Logo Images"
//                             />
//                           )}
//                         </Link>
//                       </div>

//                       <p className="description mt--20">{footer.description}</p>

//                       <div className="contact-btn mt--30">
//                         <Link
//                           className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
//                           href="#"
//                         >
//                           <div className="icon-reverse-wrapper">
//                             <span className="btn-text">Contact With Us</span>
//                             <span className="btn-icon">
//                               <i className="feather-arrow-right"></i>
//                             </span>
//                             <span className="btn-icon">
//                               <i className="feather-arrow-right"></i>
//                             </span>
//                           </div>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>

//                   <SingleFooter
//                     classOne="offset-lg-1 col-lg-2 col-md-6 col-sm-6 col-12 mt--30"
//                     title="Useful Links"
//                     footerType={footer.usefulLinks}
//                   />

//                   <SingleFooter
//                     classOne="col-lg-2 col-md-6 col-sm-6 col-12 mt--30"
//                     title="Our Company"
//                     footerType={footer.ourCompany}
//                   />

//                   <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
//                     <div className="footer-widget">
//                       <h5 className="ft-title">Get Contact</h5>
//                       <ul className="ft-link">
//                         <li>
//                           <span>Phone:</span>
//                           <Link href="#">{footer.phone}</Link>
//                         </li>
//                         <li>
//                           <span>E-mail:</span>
//                           <Link href="mailto:hr@example.com">
//                             {footer.mail}
//                           </Link>
//                         </li>
//                         <li>
//                           <span>Location:</span> {footer.address}
//                         </li>
//                       </ul>
//                       <ul className="social-icon social-default icon-naked justify-content-start mt--20">
//                         {footer.socialLink.map((value, innerIndex) => (
//                           <li key={innerIndex}>
//                             <Link href={value.link}>
//                               <i className={value.icon}></i>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </footer>
//       <Copyright />
//     </>
//   );
// };

// export default Footer;

import React from "react";
import logo from "../../../public/images/logo/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="iitm-footer text-light pt-5 bg-green-2 ">
      <div className=" section-wid">
        {/* Top Links */}
        <div className="row py-4">
          <div className="col-12 d-flex flex-wrap gap-3 gap-md-5 flex-column flex-md-row text-start">
            <a href="#" className="iitm-footer-link">
              Parents
            </a>

            <a href="#" className="iitm-footer-link">
              Students
            </a>

            <a href="#" className="iitm-footer-link">
              Scholarship
            </a>

            <a href="#" className="iitm-footer-link">
              Bus Schedule
            </a>
          </div>
        </div>

        <hr className="iitm-footer-divider" />

        {/* quick links desktop */}
        <div className="row mt-5 d-none d-md-flex">
          <strong>QUICK LINKS</strong>

          <div className="col-12 col-md-2 mb-2">
            <ul className="iitm-footer-list">
              <li>
                <a href="#" className="iitm-footer-link">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  Campus Life
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-2 mb-2">
            <ul className="iitm-footer-list">
              <li>
                <a href="#" className="iitm-footer-link">
                  Centre of Excellence
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  Departments
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  IQAC Cell
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-2 mb-2">
            <ul className="iitm-footer-list">
              <li>
                <a href="#" className="iitm-footer-link">
                  Journals
                </a>
              </li>

              <li>
                <a href="#" className="iitm-footer-link">
                  KAHE Media Centre - Studio 360°
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  Academic Bank of Credit
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  NIRF Innovation ranking 2023 - ARIIA
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-2 mb-2">
            <ul className="iitm-footer-list">
              <li>
                <a href="#" className="iitm-footer-link">
                  Library
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  Learning Management System (LMS)
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  Mandatory Disclosure
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-2 mb-2">
            <ul className="iitm-footer-list">
              <li>
                <a href="#" className="iitm-footer-link">
                  Media Centre
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  Research database
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-2 mb-2">
            <ul className="iitm-footer-list">
              <li>
                <a href="#" className="iitm-footer-link">
                  Rules & Regulations
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  Skill Development Centre
                </a>
              </li>
              <li>
                <a href="#" className="iitm-footer-link">
                  KAHE AICTE Idea Lab
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* quick links Mobile Accordion */}
        <div className="row py-4 d-block d-md-none">
          <div className="pb-0 mb-0" id="accordionQuickLinks">
            <div
              className="d-flex justify-content-between collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseQuickLinks"
              id="headingQuickLinks"
            >
              <strong>Quick Links</strong>
              <i className="feather-chevron-down mt-2"></i>
            </div>

            <div
              id="collapseQuickLinks"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionQuickLinks"
            >
              <div className="accordion-body p-0">
                <div className="row ">
                  <div className="col-12 mb-3">
                    <ul className="iitm-footer-list text-start">
                      <li>
                        <a className="iitm-footer-link" href="#">
                          Admissions
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          Campus Life
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          Code of Conduct
                        </a>
                      </li>

                      <li>
                        <a className="iitm-footer-link" href="#">
                          Centre of Excellence
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          Departments
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          Downloads
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          IQAC Cell
                        </a>
                      </li>

                      <li>
                        <a className="iitm-footer-link" href="#">
                          Journals
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          KAHE Media Centre - Studio 360°
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          Academic Bank of Credit
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          NIRF Innovation ranking 2023 - ARIIA
                        </a>
                      </li>

                      <li>
                        <a className="iitm-footer-link" href="#">
                          Library
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          Learning Management System (LMS)
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          Mandatory Disclosure
                        </a>
                      </li>

                      <li>
                        <a className="iitm-footer-link" href="#">
                          Media Centre
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          Publications
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          Research database
                        </a>
                      </li>

                      <li>
                        <a className="iitm-footer-link" href="#">
                          Rules & Regulations
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          Skill Development Centre
                        </a>
                      </li>
                      <li>
                        <a className="iitm-footer-link" href="#">
                          KAHE AICTE Idea Lab
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="iitm-footer-divider" />

        {/* Policy / Reports */}
        <div className="row py-4">
          <div className="col-12 d-flex flex-wrap gap-3 gap-md-5 flex-column flex-md-row text-start">
            <a href="#" className="iitm-footer-link">
              Technology Business Incubator
            </a>
            <a href="#" className="iitm-footer-link">
              Current Vacancies
            </a>
            <a href="#" className="iitm-footer-link">
              Recruitment
            </a>
          </div>
        </div>

        <hr className="iitm-footer-divider" />

        {/* Logo and bottom info */}
        <div className="row align-items-center justify-content-md-between my-4 ">
          <div className="col-12 col-md-4 mb-2">
            <img
              src={logo.src}
              alt="footer Logo"
              className="iitm-footer-logo"
            />
            <hr className="iitm-footer-divider d-block d-md-none my-4" />
            <div className="mt-1">
              {/* <small>KAHE - Karpagam Academy of Higher Education</small> */}
              <ul className="social-share-transparent ">
                <li>
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                {/* <li>
                    <Link href="#">
                      <i className="fab fa-skype"></i>
                    </Link>
                  </li> */}
                <li>
                  <Link href="#">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex flex-wrap gap-3 justify-content-center justify-content-md-end text-center text-md-end">
            <div>
              <p className="footer-add">KARPAGAM ACADEMY OF HIGHER EDUCATION</p>
              <p className="footer-add">(Deemed to be University)</p>
              <p className="footer-add">
                (Established Under Section 3 of UGC Act, 1956)
              </p>
              <p className="footer-add">
                Pollachi Main Road, Eachanari Post, <br />
                Coimbatore - 641 021, Tamil Nadu, India.
              </p>
              <p className="footer-add">
                Phone :{" "}
                <a className="text-white" href="tellto:+91-422 – 2980011 – 14">
                  +91-422 – 2980011 – 14
                </a>
              </p>
              <p className="footer-add">
                Email :{" "}
                <a className="text-white" href="mailto:info@kahedu.edu.in">
                  info@kahedu.edu.in
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr className="iitm-footer-divider" />

        <div className="row align-items-center justify-content-md-between py-4">
          <div className="col-12 col-md-6 mb-2">
            <div className="mt-1">
              {/* <small>KAHE - Karpagam Academy of Higher Education</small> */}
              <a href="#" className="iitm-footer-link">
                Accessibility &nbsp; |
              </a>
              <a href="#" className="iitm-footer-link">
                &nbsp; Privacy Policy &nbsp;|
              </a>
              <a href="#" className="iitm-footer-link">
                &nbsp; Term of Use &nbsp;|
              </a>
              <a href="#" className="iitm-footer-link">
                &nbsp; Sitemap
              </a>
            </div>
            <div>© 2019 All Rights Reserved.</div>
          </div>

          <div className="col-12 col-md-4 mb-2 text-md-end">
            <div>
              Concept By <br className="d-none d-md-block" />{" "}
              <a className="text-white" href="https://irepute.in/">
                Repute
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
