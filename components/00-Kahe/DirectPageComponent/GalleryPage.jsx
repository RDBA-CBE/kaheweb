import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import "venobox/dist/venobox.min.css";

const GalleryPage = ({ content }) => {

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
      <section className="section-wid gal-pg section-bg1">
        <div className="section-title d-flex justify-content-between ">
          <h2
            className="decor-ti "
            dangerouslySetInnerHTML={{
              __html: FirstLetterUp(content.title),
            }}
          ></h2>

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
        {content?.multiImages ? (
          content.multiImages?.map((item, i) => (
            <>
            <div>
              <h3 className="main-ti text-black pt-4 mb-0">{item?.title}</h3>
            </div>            <div className="lab-container parent-gallery-container">
              {item.images.map((item, i) => (
                <Link
                  className="lab-item child-gallery-single"
                  key={i}
                  href={item.src}
                  data-gall="gallery01"
                  title={item.title}
                  // style={
                  //   i === 4 && content.images.length > 5
                  //     ? { position: "relative" }
                  //     : {}
                  // }
                >
                  <img src={item.src} alt={item.alt} />

                  {item.title && <p>{item.title}</p>}
                </Link>
              ))}
            </div>
            </>
            
          ))
        ) : content?.images ? (
          <div className="lab-container parent-gallery-container">
            {content.images.map((item, i) => (
              <Link
                className="lab-item child-gallery-single"
                key={i}
                href={item.src}
                data-gall="gallery01"
                title={item.title}
                // style={
                //   i === 4 && content.images.length > 5
                //     ? { position: "relative" }
                //     : {}
                // }
              >
                <img src={item.src} alt={item.alt} />

                {item.title && <p>{item.title}</p>}
              </Link>
            ))}
          </div>
        ) : null}
      </section>
    </>
  );
};

export default GalleryPage;
