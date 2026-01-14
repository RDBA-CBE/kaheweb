"use client";

import { useEffect } from "react";
import "venobox/dist/venobox.min.css";

const CampusEventGallery = ({ data }) => {
  useEffect(() => {
    let vb;

    import("venobox/dist/venobox.min.js").then((Venobox) => {
      vb = new Venobox.default({
        selector: ".child-gallery-single",
        numeration: true,
        infinigall: true,
        spinner: "rotating-plane",
      });
    });

    return () => {
      if (vb && vb.destroy) vb.destroy();
    };
  }, []);

  const goBack = () => {
    window.history.back();
  };

  console.log("data", data);

  return (
    <section className="section-wid gal-pg section-bg1">
      <div className="section-title d-flex justify-content-between ">
        <h2 className="decor-ti">{data?.title}</h2>

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

      <div className="row g-4 rbt-course-grid">
        {data?.images?.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="rbt-card variation-01 rbt-hover p-0 h-100">
              <div className="rbt-card-img">
                <a
                  href={item.src}
                  className="child-gallery-single"
                  data-gall="image-gallery"
                >
                  <img
                    src={item.src}
                    alt={item.alt ?? "Kahe image"}
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampusEventGallery;
