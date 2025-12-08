"use client";

import { useEffect } from "react";

import "venobox/dist/venobox.min.css";

import Requirements from "@/components/Course-Details/Course-Sections/Requirements";
import Instructor from "@/components/Course-Details/Course-Sections/Instructor";
import Review from "@/components/Course-Details/Course-Sections/Review";
import Featured from "@/components/Course-Details/Course-Sections/Featured";
import Content from "@/components/Course-Details/Course-Sections/Content";
import TabMenu from "./TabMenu";
import Overview from "./tabContentComponents/Overview";
import Events from "./tabContentComponents/Events";
import Faculty from "./tabContentComponents/Faculty";
import Infrastructure from "./tabContentComponents/Infrastructure";
import Publications from "./tabContentComponents/Publications";

const TabInnerSection = ({ checkMatchCourses, tabSections, tabContent }) => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);

  const tabItems = tabContent;

  console.log("tabItems", tabItems);

  const overviewContent = tabContent.find(
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
      <div className="course-details-content">
        <div className="rbt-inner-onepage-navigation sticky-top">
          <TabMenu sections={tabSections} />
        </div>

        <Overview overviewContent={overviewContent} />

        <div
          className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
          id="programme"
        >
          <div className="row g-5">
            <Publications programmeContent={programmeContent} />
          </div>
        </div>
        <div
          className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
          id="intructor"
        >
          <Faculty facultyContent={facultyContent} />
        </div>
        <div
          className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30"
          id="infrastructure"
        >
          <Infrastructure infrastructureContent={infrastructureContent} />
        </div>

        <div
          className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
          id="events"
        >
          <Events eventsContent={eventsContent} />
        </div>
      </div>
    </>
  );
};

export default TabInnerSection;
