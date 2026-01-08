import { FirstLetterUp } from "@/utils/functions.utils";
import { useRouter } from "next/navigation";
import React from "react";

const Vision = ({ vision, data }) => {
  const router = useRouter();
  const goTofaculty = () => {
    sessionStorage.setItem("facultyData", JSON.stringify(data));
    sessionStorage.setItem("facultyUrl", window.location.href);
    router.push(`/kahe/faculty/${data.slug}`);
  };

  return (
    <section className="vsn-section">
      <div className="vsn-container">
        <div className="vsn-right">
          <img src={vision.src} alt={vision.alt} className="vsn-image" />
        </div>

        <div className="vsn-left">
          <h2
            className="decor-ti"
            dangerouslySetInnerHTML={{ __html: FirstLetterUp(vision?.title) }}
          ></h2>
          <p
            className="vsn-desc"
            dangerouslySetInnerHTML={{ __html: vision.description }}
          ></p>

          {vision?.buttonText && (
            <div className="col-lg-6 col-md-6 col-12 d-flex mt-5">
              <div className="py-0">
                <div
                  onClick={goTofaculty}
                  className="kahe-btn-primary rbt-btn hover-icon-reverse"
                  style={{ cursor: "pointer" }}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">{vision?.buttonText}</span>
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Vision;
