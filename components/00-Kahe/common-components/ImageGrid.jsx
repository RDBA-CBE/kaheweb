"use client";

import { useEffect } from "react";
import "venobox/dist/venobox.min.css";

const ImageGrid = ({ data }) => {
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

  console.log("data", data);

  return (
    <div>
      <h2 className="decor-ti">{data?.title}</h2>

      <div className="row g-4 rbt-course-grid">
        {data?.images?.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
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
              {item?.desc && (
                <div className="py-4 px-3">
                  <p>{item?.desc}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
