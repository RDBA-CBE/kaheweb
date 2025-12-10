import CollegeIcon from "@/public/images/Kahe/icons/CollegeIcon";
import LabIcon from "@/public/images/Kahe/icons/LabIcon";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Infrastructure = ({ infrastructureContent }) => {
  console.log("facultyContent", infrastructureContent);

  const [toggle, setToggle] = useState(false);

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

  const labItem = infrastructureContent.items?.find(
    (item) => item.type == "laboratories"
  );
  const equipementItem = infrastructureContent.items?.find(
    (item) => item.type == "equipment"
  );
  const library = infrastructureContent.items?.find(
    (item) => item.type == "library"
  );

  console.log("library", library);

  const visibleFaculty = toggle
    ? equipementItem?.content
    : equipementItem?.content.slice(0, 6);

  return (
    <div
      className={`rbt-dashboard-content infra has-show-more ${
        toggle ? "active" : ""
      }`}
    >
      <div className="content has-show-more-inner-content">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2
                className="main-ti"
                dangerouslySetInnerHTML={{ __html: infrastructureContent.tab }}
              ></h2>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-lg-12">
            {labItem && (
              <div className="row g-5 mb--30">
                <h3
                  className="main-sub-ti"
                  dangerouslySetInnerHTML={{ __html: labItem.title }}
                ></h3>

                {/* <div className="col-lg-12 mt-0">
                  <ul className="rbt-list-style-1">
                    {labItem.content.map((item, i) => (
                      <li key={i}>
                        <i className="feather-check"></i>
                        <span dangerouslySetInnerHTML={{ __html: item }}></span>
                      </li>
                    ))}
                  </ul>
                </div> */}

                <div className="dept-wrapper mt-0">
                  {labItem?.content?.map((item, i) => (
                    <div key={i} className="dept-card">
                      <div className="dept-inner">
                        <p className="dept-title">{item}</p>
                        <CollegeIcon className="dept-icon" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rbt-dashboard-table table-responsive">
              <h3
                className="main-sub-ti"
                dangerouslySetInnerHTML={{ __html: equipementItem?.title }}
              ></h3>

              <div className="dept-wrapper">
                {visibleFaculty?.map((item, i) => (
                  <div
                    key={i}
                    className="dept-card"
                    style={{
                      "--bgImg": `url(/images/Kahe/Innerpages/infra-1.jpg)`,
                    }}
                  >
                    <div className="dept-inner">
                      <LabIcon className="dept-icon" />
                      <p className="dept-title">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lab-container parent-gallery-container">
              {library.images.slice(0, 5).map((item, i) => (
                <Link
                  className="lab-item child-gallery-single"
                  key={i}
                  href={item.src}
                  data-gall="gallery01"
                  title={item.title}
                  style={
                    i === 4 && library.images.length > 5
                      ? { position: "relative" }
                      : {}
                  }
                >
                  <img src={item.src} alt={item.title} />
                  {i === 4 && library.images.length > 5 && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      +{library.images.length - 5} More Images
                    </div>
                  )}
                  <p>{item.title}</p>
                </Link>
              ))}

              {library.images.slice(5).map((item, i) => (
                <Link
                  className="lab-item child-gallery-single"
                  key={i + 10}
                  href={item.src}
                  data-gall="gallery01"
                  title={item.title}
                  style={{ display: "none" }}
                >
                  <img src={item.src} alt={item.title} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "Show Less" : "Show More"}
      </div>
    </div>
  );
};

export default Infrastructure;
