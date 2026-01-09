"use client";
import "venobox/dist/venobox.min.css";

import TabMenu from "./TabMenu";
import TableCom from "./TableCom";

import Commitee from "./About/Commitee";

import ImageCard from "./ImageCard";
import { FirstLetterUp } from "@/utils/functions.utils";

import SliderContent from "./SliderContent";
import AddContentCard from "./AddContentCard";

const ReportTab = ({ tabSections, tabContent }) => {
  const tabItems = tabContent;

  console.log("tabItems", tabItems);

  const initiativesContent = tabContent.find(
    (item) => item.tab == "annual_report"
  );

  const IQAC = tabContent.find((item) => item.tab == "iqac");
  const NIRF = tabContent.find((item) => item.tab == "NIRF");
  const NAAC = tabContent.find((item) => item.tab == "NAAC");
  const SDG = tabContent.find(
    (item) => item.tab == "SDG" && item?.title == "SDG"
  );
  const SDG1 = tabContent.find(
    (item) => item.tab == "SDG" && item?.title == "SDG1"
  );

  const SDG5 = tabContent.find(
    (item) => item.tab == "SDG" && item?.title == "SDG5"
  );

  const SDG7 = tabContent.find(
    (item) => item.tab == "SDG" && item?.title == "SDG7"
  );

  const SDG10 = tabContent.find(
    (item) => item.tab == "SDG" && item?.title == "SDG10"
  );

  const SDG17 = tabContent.find(
    (item) => item.tab == "SDG" && item?.title == "SDG17"
  );

  const MandatoryDisclosures = tabContent.find(
    (item) => item.tab == "MandatoryDisclosures"
  );

  const Approvals = tabContent.find((item) => item.tab == "Approvals");

  return (
    <>
      <div className="course-details-content tab-in section-wid">
        <div className=" rbt-inner-onepage-navigation sticky-top">
          <TabMenu sections={tabSections} DontshowNav={true} />
        </div>
        {initiativesContent && (
          <section className="section-bg1 " id="annual_report">
            {initiativesContent?.title && (
              <h2 className="decor-ti ">
                {FirstLetterUp(initiativesContent?.title)}
              </h2>
            )}
            {initiativesContent?.annual_report?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}
        {IQAC && (
          <section className="" id="IQAC">
            {IQAC?.title && <h2 className="decor-ti ">IQAC</h2>}
            {IQAC?.IQAC?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}
        {NIRF && (
          <section className="" id="NIRF">
            {NIRF?.title && <h2 className="decor-ti ">NIRF</h2>}
            {NIRF?.NIRF?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}

        {NAAC && (
          <section className="" id="NAAC">
            {NAAC?.title && <h2 className="decor-ti ">NAAC</h2>}
            {NAAC?.NAAC?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}

        {Approvals && (
          <section className="" id="Approvals">
            {Approvals?.title && <h2 className="decor-ti ">Approvals</h2>}
            {Approvals?.Approvals?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}

        {MandatoryDisclosures && (
          <section className="" id="MandatoryDisclosures">
            {MandatoryDisclosures?.title && (
              <h2 className="decor-ti ">MandatoryDisclosures</h2>
            )}
            {MandatoryDisclosures?.MandatoryDisclosures?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}
        {SDG1 && (
          <section className="" id="SDG">
            {SDG1?.title && <h2 className="decor-ti ">SDG 2</h2>}
            {SDG1?.SDG1?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}
        {SDG && (
          <section className="" id="SDG">
            {SDG?.title && <h2 className="decor-ti ">SDG 3</h2>}
            {SDG?.SDG?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}

        {SDG5 && (
          <section className="" id="SDG">
            {SDG5?.title && <h2 className="decor-ti ">SDG 5</h2>}
            {SDG5?.SDG5?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}

        {SDG7 && (
          <section className="" id="SDG">
            {SDG7?.title && <h2 className="decor-ti ">SDG 7</h2>}
            {SDG7?.SDG7?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}

        {SDG10 && (
          <section className="" id="SDG">
            {SDG10?.title && <h2 className="decor-ti ">SDG 10</h2>}
            {SDG10?.SDG10?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}

        {SDG17 && (
          <section className="" id="SDG">
            {SDG17?.title && <h2 className="decor-ti ">SDG 17</h2>}
            {SDG17?.SDG17?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default ReportTab;
