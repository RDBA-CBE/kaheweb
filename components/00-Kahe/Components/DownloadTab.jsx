import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageCard2 from "./ImageCard2";
import SplitArea from "./tabContentComponents/splitArea";
import SliderContent from "./SliderContent";

const DownloadTab = ({ data }) => {
  console.log("✌️data --->", data);
  const [active, setActive] = useState(0);

  const handleTabClick = (index, e) => {
    e.preventDefault();
    setActive(index);
  };

  return (
    <div className="rbt-advance-tab-area">
      <div className="">
        <div className="row mb--40">
          <div className="col-lg-12">
            <div className="text-center">
              <h2 className="w-decor-ti">{data?.title}</h2>
            </div>
          </div>
        </div>

        {data && (
          <div className="">
            <div className="row g-5 ">
            
            <div className="section-wid ">

              <div className="col-lg-12 pt-0 mt-0">
                <div className="advance-tab-button ">
                  <ul
                    className="nav nav-tabs tab-button-style-2 pb-0 my-0 mb-2"
                    id="myTab-4"
                    role="tablist"
                  >
                    {data.content?.map((item, index) => (
                      <li role="presentation" key={index}>
                        <Link
                          href="#"
                          className={`tab-button ${
                            active === index ? "active" : ""
                          }`}
                          id={item.tabId}
                          role="tab"
                          aria-controls={item.tabId}
                          aria-selected={active === index}
                          onClick={(e) => handleTabClick(index, e)}
                        >
                          <span className="title">{item.tabTi}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>

              </div>

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
                        <div className="section-bg3">
                          <section className="section-wid">
                            <SliderContent
                              data={item?.annualResearch14}
                              order={"imageFirst"}
                            />
                          </section>
                        </div>
                        <section className="section-wid section-bg1">
                          <SliderContent data={item?.annualResearch13} />
                        </section>
                        {item?.annualResearch12 &&
                        <div className="section-bg3">
                          <section className="section-wid">
                            <SliderContent
                              data={item?.annualResearch12}
                              order={"imageFirst"}
                            />
                          </section>
                        </div>
                        }
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

export default DownloadTab;
