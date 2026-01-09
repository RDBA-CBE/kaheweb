import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageCard2 from "./ImageCard2";
import SplitArea from "./tabContentComponents/splitArea";
import SliderContent from "./SliderContent";

const StudyIndiaTab = ({ data }) => {
  const [active, setActive] = useState(0);

  const handleTabClick = (index, e) => {
    e.preventDefault();
    setActive(index);
  };

  return (
    <div className="rbt-advance-tab-area">
      <div className="">
        
        {data && (
          <div className="">
            <div className="row g-5 ">
              <div className="col-lg-12 ">
                <div className="tab-content pt-4" id="myTabContent-4">
                  {data.content?.map((item, index) => (
                    <div
                      key={index}
                      className={`tab-pane fade ${
                        active === index ? "show active" : ""
                      }`}
                      id={item.tabId}
                      role="tabpanel"
                      aria-labelledby={item.tabId}
                    >
                      <div className="rbt-advance-tab-content advance-tab-content-2">
                        <section className="section-wid section-bg1">
                          <SliderContent data={item?.annualResearch15} />
                        </section>
                        
                        
                        
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyIndiaTab;
