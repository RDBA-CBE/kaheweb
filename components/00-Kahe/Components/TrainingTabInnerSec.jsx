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

const TrainingTabInnerSec = ({ tabSections, tabContent }) => {
  const tabItems = tabContent;

  console.log("tabItems", tabItems);

  const trainerContent = tabContent?.find((item) => item?.tab == "trainers");
  const funcOfTrainingContent = tabContent.find(
    (item) => item.tab == "func_of_training_placement"
  );
  const trainMethodContent = tabContent.find(
    (item) => item.tab == "training_methodology"
  );

  console.log("trainerContent", trainerContent);

  return (
    <>
      <div className="course-details-content tab-in ">
        <div className=" rbt-inner-onepage-navigation sticky-top">
          <TabMenu sections={tabSections} DontshowNav={true} />
        </div>

        {trainerContent && (
          <section className="section-bg1" id="trainers">
            <TableCom data={trainerContent?.publications} />
          </section>
        )}

        {funcOfTrainingContent && (
          <section id="func_of_training_placement">
            <h2 className="decor-ti">{funcOfTrainingContent?.title}</h2>
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
            </section>

            {funcOfTrainingContent?.OtherActivities && (
              <section className="section-bg1">
                <h4 className="main-sub-ti ">
                  {FirstLetterUp(funcOfTrainingContent?.OtherActivities?.title)}
                </h4>

                <ImageCard2
                  data={funcOfTrainingContent?.OtherActivities?.items1}
                />
              </section>
            )}

            <section className="mb-5">
              <div className=" training">
                <ImageCard
                  visionItem={funcOfTrainingContent?.offerToTheStudent}
                  missionItem={funcOfTrainingContent?.responsibilities}
                />
              </div>
            </section>
          </section>
        )}

        <section className="section-bg1" id="training_methodology">
          <h2 className="decor-ti">
            {FirstLetterUp(trainMethodContent?.title)}
          </h2>
          <section className="section-bg1 pt-0">
            <h2 className="main-sub-ti">
              {FirstLetterUp(trainMethodContent?.engineering?.title)}
            </h2>
            <TimeLine data={trainMethodContent?.engineering} />
          </section>

          <section className="section-bg1 pb-0">
            <h2 className="main-sub-ti">
              {FirstLetterUp(trainMethodContent?.arts_science?.title)}
            </h2>
            <TimeLine data={trainMethodContent?.arts_science} />
          </section>
        </section>
      </div>
    </>
  );
};

export default TrainingTabInnerSec;
