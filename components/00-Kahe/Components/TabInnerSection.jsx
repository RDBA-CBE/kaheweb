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
import Gal_Pub_Event from "./tabContentComponents/Gal_Pub_Event";
import StudentsCom from "./tabContentComponents/StudentsCom";
import QuoteBox from "./About/QuoteBox";
import Testimonial from "./Testimonial";
import AddContentCard from "./AddContentCard";

const TabInnerSection = ({ tabSections, tabContent }) => {
  const tabItems = tabContent;

  console.log("tabItems", tabItems);

  const overviewContent = tabContent?.find(
    (item) => item?.tab == "Overview"
  )?.items;
  const programmeContent = tabContent.find((item) => item.tab == "Programme");
  const facultyContent = tabContent.find((item) => item.tab == "Faculty");
  const infrastructureContent = tabContent.find(
    (item) => item.tab == "Infrastructure"
  );
  const publicationsContent = tabContent.find(
    (item) => item.tab == "Publications"
  );
  const eventsContent = tabContent.find((item) => item.tab == "Events");

  const laboratoryContent = tabContent.find((item) => item.tab == "Laboratory");

  const InfraGallery = infrastructureContent?.items?.find(
    (item) => item.type == "gallery"
  );

  const studentsContent = tabContent.find((item) => item.tab == "students");

  const patentsContent = tabContent.find((item) => item.tab == "patents");

  const galleryContent = tabContent.find((item) => item.tab == "gallery");

  const placementContent = tabContent.find((item) => item.tab == "placements");

  const testimionialContent = tabContent.find(
    (item) => item.tab == "testimonial"
  );

  const contactContent = tabContent.find(
    (item) => item.tab == "contact"
  );
   const researchFacilities = tabContent.find((item) => item.tab == "research");

  return (
    <>
      <div className="course-details-content tab-in ">
        <div className="section-wid rbt-inner-onepage-navigation sticky-top">
          <TabMenu sections={tabSections} />
        </div>

        {overviewContent && (
          <Overview
            overviewContent={overviewContent}
            firstParaLimit={9999}
            firstParaSplit={9999}
          />
        )}

        {programmeContent && (
          <div
            className="rbt-course-feature-box details-wrapper section-bg1"
            id="programme"
          >
            <div className="row mx-0 px-0 ">
              <Programmes programmeContent={programmeContent} />
              <ProgrammesMbl programmeContent={programmeContent} />
            </div>
          </div>
        )}

        {facultyContent && (
          <div
            className="section-wid rbt-instructor  intructor-wrapper section-bg1"
            id="faculty"
          >
            <Faculty facultyContent={facultyContent} />
          </div>
        )}

        {infrastructureContent && (
          <div
            className=" rbt-review-wrapper review-wrapper section-bg3"
            id="infrastructure"
          >
            <Infrastructure
              infrastructureContent={
                infrastructureContent && infrastructureContent
              }
            />
          </div>
        )}

        {studentsContent && (
          <div className=" section-bg1" id="students">
            <StudentsCom data={studentsContent}/>
          </div>
        )}

        {patentsContent && (
          <div className=" section-bg1" id="patents">
            <QuoteBox data={patentsContent?.items} />
          </div>
        )}

        <div
          className="section-bg1  course-content  coursecontent-wrapper"
          style={{ padding: "80px 0" }}
        >
          <Gal_Pub_Event
            InfraGallery={InfraGallery && InfraGallery}
            publicationsContent={publicationsContent && publicationsContent}
            eventsContent={eventsContent && eventsContent}
            galleryContent={galleryContent && galleryContent}
            researchFacilities={researchFacilities && researchFacilities}
            laboratoryContent={laboratoryContent && laboratoryContent}
            placementContent={placementContent && placementContent}
          />
        </div>

        {contactContent && (
          <section className="mb-3" id="contact">
            <div className="section-wid " >
              <AddContentCard data={contactContent?.contact} />
            </div>
          </section>
        )}

        {testimionialContent && (
          <section className="section-bg3" id="testimonial">
            <div className="section-wid " >
              <Testimonial data={testimionialContent?.testimonial} />
            </div>
          </section>
        )}



        {/* {publicationsContent && (
          <div
            className="section-wid rbt-review-wrapper review-wrapper section-bg1"
            id="publications"
          >
            <Publications publicationsContent={publicationsContent} />
          </div>
        )}

        {eventsContent && (
          <div
            className="section-bg2 course-content  coursecontent-wrapper"
            id="events"
          >
            <Events eventsContent={eventsContent} />
          </div>
        )} */}
      </div>
    </>
  );
};

export default TabInnerSection;
