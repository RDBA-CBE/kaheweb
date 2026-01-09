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
import ListStyle from "./ListStyle";
import About from "./About/About";
import IconCard from "./IconCard";
import ImageCard2 from "./ImageCard2";
import Link from "next/link";
import ContentCard from "./ContentCard";

const LibraryTab = ({ tabSections, tabContent }) => {
  const tabItems = tabContent;

  console.log("tabItems", tabItems);

  const e_source = tabContent.find((item) => item.tab == "e_resource");
  console.log("✌️e_source --->", e_source);

  const LlbraryContent = tabContent.find((item) => item.tab == "Library");

  const Newsletter = tabContent.find((item) => item.tab == "Newsletter");

  return (
    <>
      <div className="course-details-content tab-in ">
        <div
          className="section-wid rbt-inner-onepage-navigation sticky-top"
          id="Library"
        >
          <TabMenu sections={tabSections} />
        </div>
        <section className=" section-bg1" id="Library">
          <About data={LlbraryContent?.about} />
        </section>
        <section className="section-wid section-bg1" id="Library">
          <div className="">
            <h4 className="decor-ti">{"Library Timings & Transaction"}</h4>
          </div>

          <ImageCard2 data={LlbraryContent?.timing} />
        </section>
        <section className="section-wid " id="Library">
          <IconCard data={LlbraryContent?.membership} />
        </section>
        <section className="section-wid" id="Library">
          <div className="">
            <h4 className="decor-ti">{"Classification System"}</h4>
          </div>

          <ImageCard2 data={LlbraryContent?.ClassificationSystem} />
        </section>

        <div
          className=" rbt-review-wrapper review-wrapper section-bg3"
          id="Library"
        >
          <Infrastructure
            infrastructureContent={LlbraryContent?.LibrarySections}
          />
        </div>

        <div className="section-bg1 section-wid" id="Library">
          <ListStyle data={LlbraryContent?.NscCommittees} />
        </div>
        <section className="section-wid section-bg1" id="Library">
          <IconCard data={LlbraryContent?.PeriodicalSection} />
        </section>

        <div
          className=" rbt-review-wrapper review-wrapper section-bg3"
          id="Library"
        >
          <Infrastructure
            infrastructureContent={LlbraryContent?.PeriodicalSection}
          />
        </div>

        <section className="container section-bg1" id="Library">
          <div className="row">
            <div className="">
              <div className="card library-card shadow-sm border-0">
                <div className="card-body">
                  {/* Title */}
                  <div className="">
                    <h4 className="decor-ti">{"Computerized Library"}</h4>
                  </div>
                  {/* Description */}
                  <p className="text-muted mb-4">
                    The Library is computerized (Web Based) and this provides
                    information about the books to the students and staff. The
                    bar coding technology is installed. Transactions like issue
                    / returning are done using bar coding technology.
                  </p>

                  {/* OPAC Section */}
                  <Link
                    className="opac-title mb-3"
                    href={"http://121.200.52.120/opac/"}
                    target="_blank"
                  >
                    OPAC (Online Public Access Catalogue)
                  </Link>

                  <div className="row">
                    {/* Feature List */}
                    <div className="col-md-8">
                      <ul className="opac-list">
                        <li>Title</li>
                        <li>Author</li>
                        <li>Subject</li>
                        <li>Accession Number</li>
                        <li>Department</li>
                        <li>Student Details</li>
                        <li>Roll No. Wise</li>
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="py-4 ">
                      <Link
                        className="kahe-btn-primary rbt-btn hover-icon-reverse"
                        href={"http://121.200.52.120/opac/"}
                        target="_blank"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text"> Know More</span>
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
            </div>
          </div>
        </section>
        <section className="section-wid " id="Library">
          <div className="">
            <h4 className="decor-ti">{"E-Library"}</h4>
          </div>

          <ImageCard2 data={LlbraryContent?.E_Library} />
        </section>
        {/* <section className="section-wid "> */}
        <div
          className="section-wid rbt-instructor  intructor-wrapper section-bg1"
          id="e_resources"
        >
          {/* {e_source && */}
          <ContentCard data={e_source?.ciaTest} />
          {/* } */}
        </div>

        <div
          className="section-wid rbt-instructor  intructor-wrapper section-bg1"
          id="Newsletter"
        >
          {/* {e_source && */}
          <ContentCard data={Newsletter?.Newsletter} />
          {/* } */}
        </div>
      </div>
    </>
  );
};

export default LibraryTab;
