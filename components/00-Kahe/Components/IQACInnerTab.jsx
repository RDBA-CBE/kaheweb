"use client";
import "venobox/dist/venobox.min.css";

import TabMenu from "./TabMenu";
import TableCom from "./TableCom";
import ImageLink from "./ImageLink";
import Commitee from "./About/Commitee";
import ImageCard2 from "./ImageCard2";
import ImageCard from "./ImageCard";
import { FirstLetterUp } from "@/utils/functions.utils";
import TimeLine from "./TimeLine";

const IQACInnerTab = ({ tabSections, tabContent }) => {
  const tabItems = tabContent;

  console.log("tabItems", tabItems);

  const objectivesContent = tabContent?.find((item) => item?.tab == "objectives");
  const membersContent = tabContent.find(
    (item) => item.tab == "members"
  );
  const trainMethodContent = tabContent.find(
    (item) => item.tab == "training_methodology"
  );



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

       
      </div>
    </>
  );
};

export default IQACInnerTab;
