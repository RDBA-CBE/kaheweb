"use client";
import "venobox/dist/venobox.min.css";

import TabMenu from "../TabMenu";
import TableCom from "../TableCom";
import ImageCard from "../ImageCard";
import SliderContent from "../SliderContent";
import Commitee from "../About/Commitee";
import AddContentCard from "../AddContentCard";
import IconCard from "../IconCard";
import ImageLink from "../ImageLink";
import Link from "next/link";

const TBIInnerTab = ({ tabSections, tabContent }) => {
  const tabItems = tabContent;

  console.log("tabItems", tabItems);

  const overviewContent = tabContent?.find((item) => item?.tab == "overview");
  const facilityContent = tabContent.find((item) => item.tab == "facility");
  const seedContent = tabContent.find((item) => item.tab == "seed-funding");

  const processContent = tabContent.find((item) => item.tab == "process");

  const policyContent = tabContent.find((item) => item.tab == "policy");

  const ApplyContent = tabContent.find((item) => item.tab == "how-to-apply");

   const bottomContent = tabContent.find((item) => item.tab == "bottomContent");

  return (
    <>
      <div className="course-details-content tab-in Tbitab">
        <div className=" section-wid rbt-inner-onepage-navigation sticky-top">
          <TabMenu sections={tabSections} DontshowNav={true} />
        </div>

        {overviewContent && (
          <section id="overview" className="">
            <section className="">
              <div className="section-wid training section-bg1">
                <ImageCard visionItem={overviewContent?.objectives?.Overview} />
              </div>

              <div className=" section-bg3">
                {" "}
                <div className="section-wid mt-5">
                  <Commitee data={overviewContent?.objectives?.establishment} />
                </div>
              </div>

              <section className="section-wid section-bg1" id="contact">
                <AddContentCard data={overviewContent?.objectives?.contact} />
              </section>
            </section>
          </section>
        )}

        {facilityContent && (
          <section className="section-bg3" id="facility">
            <div className="section-wid">
              <IconCard data={facilityContent?.facilities} />
            </div>
          </section>
        )}

        {seedContent && (
          <section className="section-bg1" id="facility">
            <div className="section-wid">
              <ImageLink
                data={seedContent?.seedFunding}
                firstParaLimit={9999}
                firstParaSplit={9999}
              />
            </div>
          </section>
        )}

        {processContent && (
          <div
            className="section-bg2"
            style={{ margin: "40px 0" }}
            id="process"
          >
            <div className="section-wid">
              <div className="remaining-content">
                {processContent?.process?.map((item, i) => (
                  <div className="">
                    <h2 className="decor-ti">{item?.title}</h2>
                    {item?.desc && <p>{item?.desc}</p>}
                    {item?.content && (
                      <ul className="rbt-list-style-1">
                        {item?.content?.map((v, i) => (
                          <li key={i}>
                            <i className="feather-check"></i>
                            <span
                              className="text-start"
                              dangerouslySetInnerHTML={{ __html: v }}
                            ></span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item?.desc1 && <p className="mt-5 mb-5">{item?.desc1}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {policyContent && (
          <section className="mom" id="policy">
            <div className="section-wid">
              <SliderContent data={policyContent?.policy} />
            </div>
          </section>
        )}

        {ApplyContent && (
          <section className="section-wid section-bg1" id="how-to-apply">
             <div className="row justify-content-center" >
            <div className="col-lg-8 col-md-10">
              <div className="text-center mb-4">
                <h2 className="w-decor-ti text-center">{ApplyContent?.howtoapply?.title}</h2>
                <img
                  src={ApplyContent?.howtoapply?.image}
                  alt="Research Programme"
                  className="img-fluid rounded border"
                  style={{ maxWidth: "500px", width: "100%" }}
                />
              </div>
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center py-4">
                  <Link
                    className="kahe-btn-primary rbt-btn hover-icon-reverse btn-lg px-5 py-4"
                    href={ApplyContent?.howtoapply?.btnUrl}
                    target="blank"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">
                        {ApplyContent?.howtoapply?.btnText}
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </section>
         
        )}

        {bottomContent && (
          <section className="section-wid section-bg1" id="how-to-apply">
             <div className="row justify-content-center" >
            <div className="col-lg-8 col-md-10">
              <div className="text-center mb-4">
               
                <img
                  src={bottomContent?.image}
                  alt="Research Programme"
                  className="img-fluid rounded border"
                  style={{ maxWidth: "500px", width: "100%" }}
                />
              </div>
             
            </div>
          </div>
          </section>
         
        )}
      </div>
    </>
  );
};

export default TBIInnerTab;
