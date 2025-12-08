import Link from "next/link";
import React from "react";

const Events = ({ eventsContent }) => {

  return (
    <>
      <div className="rbt-course-feature-inner">
        <div className="section-title">
          <h4 className="rbt-title-style-3">{eventsContent.tab}</h4>
        </div>
        <div className="rbt-accordion-style rbt-accordion-02 accordion">
          <div className="accordion" id="accordionExampleb2">
            {eventsContent.items.map((item, i) => (
              <div className="accordion-item card" key={i}>
                <h2
                  className="accordion-header card-header"
                  id={`headingTwo${i}`}
                >
                  <button
                    className={`accordion-button ${
                      !item.collapsed ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseTwo${i + 1}`}
                    aria-expanded={item.expand}
                    aria-controls={`collapseTwo${i + 1}`}
                  >
                    {item.title}
                   
                  </button>
                </h2>
                <div
                  id={`collapseTwo${i + 1}`}
                  className={`accordion-collapse collapse ${
                    item.isShow ? "show" : ""
                  }`}
                  aria-labelledby={`headingTwo${i}`}
                  data-bs-parent="#accordionExampleb2"
                >
                  <div className="accordion-body card-body pr--0">
                    <ul className="rbt-course-main-content liststyle">
                      {item.content.map((list, subIndex) => (
                        <li key={subIndex}>
                          <Link href="/lesson">
                            <div className="course-content-left">
                              <i className="feather-file-text"></i>

                              <span className="text">{list}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
