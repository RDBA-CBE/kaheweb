"use client";
import "venobox/dist/venobox.min.css";

import TabMenu from "./TabMenu";
import Overview from "./tabContentComponents/Overview";
import Events from "./tabContentComponents/Events";
import Faculty from "./tabContentComponents/Faculty";
import Infrastructure from "./tabContentComponents/Infrastructure";
import Publications from "./tabContentComponents/Publications";
import Programmes from "./tabContentComponents/Programmes";
import ProgrammesMbl from "./tabContentComponents/ProgrammesMbl";

const TabInnerSection = ({ tabSections, tabContent }) => {
  const tabItems = tabContent;

  console.log("tabItems", tabItems);

  const overviewContent = tabContent?.find(
    (item) => item.tab == "Overview"
  ).items;
  const programmeContent = tabContent.find((item) => item.tab == "Programme");
  const facultyContent = tabContent.find((item) => item.tab == "Faculty");
  const infrastructureContent = tabContent.find(
    (item) => item.tab == "Infrastructure"
  );
  const publicationsContent = tabContent.find(
    (item) => item.tab == "Publications"
  );
  const eventsContent = tabContent.find((item) => item.tab == "Events");

  return (
    <>
      <div className="course-details-content tab-in">
        <div className="rbt-inner-onepage-navigation sticky-top">
          <TabMenu sections={tabSections} />
        </div>

        {overviewContent && <Overview overviewContent={overviewContent} />}

        {programmeContent && (
          <div
            className="rbt-course-feature-box details-wrapper mt--50"
            id="programme"
          >
            <div className="row g-5 ">
              {/* <Publications programmeContent={programmeContent} /> */}
              <Programmes programmeContent={programmeContent} />
              <ProgrammesMbl programmeContent={programmeContent} />
            </div>
          </div>
        )}
        {facultyContent && (
          <div
            className="rbt-instructor  intructor-wrapper mt--50"
            id="faculty"
          >
            <Faculty facultyContent={facultyContent} />
          </div>
        )}

        {infrastructureContent && (
          <div
            className="rbt-review-wrapper review-wrapper mt--50"
            id="infrastructure"
          >
            <Infrastructure infrastructureContent={infrastructureContent} />
          </div>
        )}

        {publicationsContent && (
          <div
            className="rbt-review-wrapper review-wrapper mt--50"
            id="publications"
          >
            <Publications publicationsContent={publicationsContent} />
          </div>
        )}

        {eventsContent && (
          <div
            className="course-content  coursecontent-wrapper mt--50"
            id="events"
          >
            <Events eventsContent={eventsContent} />
          </div>
        )}
      </div>
    </>
  );
};

export default TabInnerSection;
