import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import "venobox/dist/venobox.min.css";

const PublicationPage = ({ publicationsContent }) => {
  console.log("Content", publicationsContent);

  const [activeIndex, setActiveIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".child-gallery-single",
        numeration: true,
        infinigall: true,
        spinner: "rotating-plane",
      });
    });
  }, []);

  const bannerCon = {
    bannerImg: "/images/Kahe/breadcrumb/banner-inner1.jpg",
    title: "Events",
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="section-wid mt-5 section-title d-flex justify-content-lg-between ">
        <h2 className="decor-ti "></h2>

        <div className=" d-flex ">
          <div className="py-0">
            <div
              onClick={goBack}
              className="kahe-btn-primary rbt-btn hover-icon-reverse"
              style={{ cursor: "pointer" }}
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Go Back</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {publicationsContent?.researchContent && (
        <section className="section-wid  section-bg1 pb-0">
          <div className="section-title">
            <h2 className="decor-ti">
              {FirstLetterUp(publicationsContent?.researchContent.title)}
            </h2>
          </div>

          <p>{FirstLetterUp(publicationsContent?.researchContent.desc)}</p>
        </section>
      )}

      <section className="section-wid gal-pg section-bg1">
        <div className={`rbt-course-feature-box publication  mt--30`}>
          <div className="research-acc-wrapper has-show-more-inner-content">
            <div className="section-title">
              <h2 className="decor-ti">
                {FirstLetterUp(publicationsContent.subtitle)}
              </h2>
            </div>

            <h3 className="main-sub-ti">
              {FirstLetterUp(publicationsContent?.title)}
            </h3>

            {publicationsContent?.content?.map((item, index) => (
              <div className="research-acc-item" key={index}>
                <button
                  className={`research-acc-header ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#a2d0aa" : "#f2fff9",
                    color: index % 2 === 0 ? "#000" : "#153b1c",
                  }}
                >
                  <span className="faculty-ti">{item.faculty_name}</span>
                  <span className="research-acc-icon">
                    <i class="feather-chevron-down"></i>
                  </span>
                </button>

                <div
                  className="research-acc-body"
                  style={{
                    display: activeIndex === index ? "block" : "none",
                    backgroundColor: index % 2 === 0 ? "#f2fff9" : "#f2fff9",
                  }}
                >
                  <ol>
                    {item.content?.map((pub, idx) => (
                      <li key={idx}>{pub}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {publicationsContent?.researchProjects && (
        <section className="section-wid ">
          <div className={`rbt-course-feature-box publication`}>
            <div className="research-acc-wrapper has-show-more-inner-content">
              {publicationsContent?.researchProjects?.subtitle && (
                <div className="section-title">
                  <h2 className="decor-ti">
                    {FirstLetterUp(
                      publicationsContent?.researchProjects?.subtitle
                    )}
                  </h2>
                </div>
              )}

              {publicationsContent?.researchProjects?.title && (
                <h3 className="main-sub-ti">
                  {FirstLetterUp(publicationsContent?.researchProjects?.title)}
                </h3>
              )}

              {publicationsContent?.researchProjects?.content?.map(
                (item, index) => (
                  <div className="research-acc-item" key={index}>
                    <button
                      className={`research-acc-header ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => toggleAccordion(index)}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#a2d0aa" : "#f2fff9",
                        color: index % 2 === 0 ? "#000" : "#153b1c",
                      }}
                    >
                      <span className="faculty-ti">{item.title}</span>
                      <span className="research-acc-icon">
                        <i class="feather-chevron-down"></i>
                      </span>
                    </button>

                    <div
                      className="research-acc-body"
                      style={{
                        display: activeIndex === index ? "block" : "none",
                        backgroundColor:
                          index % 2 === 0 ? "#f2fff9" : "#f2fff9",
                      }}
                    >
                      <ol>
                        {item.content.map((pub, idx) => (
                          <li key={idx}>{pub}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PublicationPage;
