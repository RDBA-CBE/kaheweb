"use client";

import InnerBanner from "../common-components/InnerBanner";
// import data from "../../../JSON/InternationalAdmissions/Testimonials.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import {
  OfficeOfInternationalAffairsJson,
  Research,
} from "@/JSON/ACADEMIC/Overview";
import ImageLink from "../Components/ImageLink";
import PaginationTable from "../Components/PaginationTable";
import SliderContent from "../Components/SliderContent";
import About from "../Components/About/About";
import YoutubeVideoSection from "../Components/YoutubeVideoSection";
import { subMenu } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/ACADEMIC/Arts/dean.json";
import Mission from "../Components/About/Mission";
import StudentsIcon from "@/public/images/Kahe/icons/StudentsIcon";
import IconCard from "../Components/IconCard";
import Commitee from "../Components/About/Commitee";
import ImageCard2 from "../Components/ImageCard2";
import { FirstLetterUp } from "@/utils/functions.utils";

const PerformingArtsDean = (props) => {
  const InterAdmin = data;

  const breadcrumbItems = [
    {
      label: "Academics",
      href: `/academics/`,
    },
    { label: "Arts, Science, Commerce and Management", href: `` },
  ];

  const missionData = [
    {
      icon: <StudentsIcon />,
      description:
        "Organised a wide array of national and international programmes, graced by eminent personalities who have endorsed the excellence of my work.",
    },
    {
      icon: <StudentsIcon />,
      description:
        "Collaborated with leading figures across disciplines to foster innovation and growth in the performing arts.",
    },
    {
      icon: <StudentsIcon />,
      description:
        "Extensively explored and experimented with diverse art forms in music and dance, spanning multiple cultures and languages.",
    },
    {
      icon: <StudentsIcon />,
      description:
        "Conducted in-depth research on vernacular language compositions, with findings published in reputed journals and academic platforms.",
    },
    {
      icon: <StudentsIcon />,
      description:
        "Initiated and sustained community-focused programmes such as Chinnanchiru Kuyilgal and You Too Can Sing, which have received widespread appreciation and support",
    },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={InterAdmin?.PerformingArtsDean?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>

          <div className="section-wid ">
            <ImageLink data={InterAdmin?.PerformingArtsDean} />
          </div>
          <section className="bg-lgreen section-bg1">
            <Mission title="Accomplishments" missionItems={missionData} />
          </section>
          <section className="section-wid section-bg1">
            <IconCard data={InterAdmin?.PerformingArtsDean?.merits} />
          </section>
          <section className="section-wid ">
            <Commitee
              data={InterAdmin?.PerformingArtsDean?.awards}
              paddingtop={true}
            />
          </section>

          <section className="section-wid section-bg1">
            <div className="decor-ti">
              External Research Responsibilities - Adjudicator for Ph.D.{" "}
            </div>

            <ImageCard2
              data={InterAdmin?.PerformingArtsDean?.adjudicator?.items1}
            />
          </section>

          <section className="section-wid ">
            <div className="decor-ti">
            Research Responsibilities – Board Member
            </div>

            <ImageCard2
              data={InterAdmin?.PerformingArtsDean?.boardMember?.items1}
            />
          </section>

          {/* <section className="section-wid">
            <PaginationTable data={InterAdmin?.StudentsList} />
          </section>

          <section className="section-wid">
            <PaginationTable data={InterAdmin?.StudentsList1} />
          </section>

          <section className="section-wid section-bg1">
            <SliderContent data={InterAdmin?.annualResearch} />
          </section> */}

          <Sidebar2 subMenu={subMenu} />
        </Context>
      </Provider>
    </>
  );
};

export default PerformingArtsDean;
