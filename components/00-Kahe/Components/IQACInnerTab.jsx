"use client";
import "venobox/dist/venobox.min.css";

import TabMenu from "./TabMenu";
import TableCom from "./TableCom";

import Commitee from "./About/Commitee";

import ImageCard from "./ImageCard";
import { FirstLetterUp } from "@/utils/functions.utils";

import SliderContent from "./SliderContent";
import AddContentCard from "./AddContentCard";

const IQACInnerTab = ({ tabSections, tabContent }) => {
  const tabItems = tabContent;

  console.log("tabItems", tabItems);

  const objectivesContent = tabContent?.find(
    (item) => item?.tab == "objectives"
  );
  const membersContent = tabContent.find((item) => item.tab == "members");
  const momContent = tabContent.find((item) => item.tab == "mom");

  const initiativesContent = tabContent.find(
    (item) => item.tab == "initiatives"
  );

  const nirfContent = tabContent.find((item) => item.tab == "nirf");

  const aqarContent = tabContent.find((item) => item.tab == "aqar");

  const naacContent = tabContent.find((item) => item.tab == "naac");

  const contactContent = tabContent.find((item) => item.tab == "contact");

  return (
    <>
      <div className="course-details-content tab-in ">
        <div className=" rbt-inner-onepage-navigation sticky-top">
          <TabMenu sections={tabSections} DontshowNav={true} />
        </div>

        {objectivesContent && (
          <section id="objectives">
            {/* <h2 className="decor-ti">{funcOfTrainingContent?.title}</h2>
            <section>
              <ImageLink data={funcOfTrainingContent?.trainingPlacement} />
            </section>
            <section className="section-bg1">
              <h4 className="main-sub-ti mb-2">
                {FirstLetterUp(funcOfTrainingContent?.trainingEdge?.title1)}
              </h4>
              <Commitee data={funcOfTrainingContent?.trainingEdge} />
            </section>

            <section>
              <h4 className="main-sub-ti">
                {FirstLetterUp(funcOfTrainingContent?.activities?.title)}
              </h4>

              <ImageCard2 data={funcOfTrainingContent?.activities?.items1} />
            </section> */}

            <section className="section-bg1">
              <div className=" training">
                <ImageCard
                  visionItem={objectivesContent?.objectives?.offerToTheStudent}
                  missionItem={objectivesContent?.objectives?.responsibilities}
                />
              </div>
            </section>
          </section>
        )}

        {membersContent && (
          <section className="section-bg1" id="members">
            <TableCom data={membersContent?.members} />
          </section>
        )}

        {momContent && (
          <section className="mom" id="mom">
            <SliderContent data={momContent?.mom} />
          </section>
        )}

        {initiativesContent && (
          <section className="section-bg1 " id="initiatives">
            {initiativesContent?.title && (
              <h2 className="decor-ti mb-2">
                {FirstLetterUp(initiativesContent?.title)}
              </h2>
            )}
            {initiativesContent?.initiatives?.map((item, index) => (
              <SliderContent
                key={index}
                data={item}
                order={index % 2 === 0 ? "imageFirst" : ""}
              />
            ))}
          </section>
        )}

        {nirfContent && (
          <section className=" " id="nirf">
            <Commitee data={nirfContent?.nirf} />
          </section>
        )}

        {aqarContent && (
          <section className="mom" id="aqar">
            <SliderContent data={aqarContent?.aqar} />
          </section>
        )}

        {naacContent && (
          <section className="mom" id="naac">
            <SliderContent data={naacContent?.naac} />
          </section>
        )}

        {contactContent && (
          <section id="contact">
            <AddContentCard data={contactContent?.contact} />
          </section>
        )}
      </div>
    </>
  );
};

export default IQACInnerTab;
