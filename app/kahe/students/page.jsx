"use client";

import data from "../../../JSON/student.json";
import AboutOverview from "../../../components/00-Kahe/Components/AboutOverview";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import {
  OfficeOfInternationalAffairsJson,
} from "@/JSON/ACADEMIC/Overview";
import Sidebar2 from "@/components/00-Kahe/common-components/Sidebar2";
import Commitee from "@/components/00-Kahe/Components/About/Commitee";
import ImageCard from "@/components/00-Kahe/Components/ImageCard";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Breadcrumb from "@/components/00-Kahe/common-components/BreadCrumb";

const OfficeOfInternationalAffairsOverview = () => {
  const research = data;
  console.log("research", research);

  const breadcrumbItems = [
    {
      label: "Students",
    },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={research?.bannerCon} />
          <section className="bg-white  sticky-top">
            <Breadcrumb items={breadcrumbItems} />
          </section>
          {/* <AboutOverview data={research?.overview} /> */}
          <section className="section-wid section-bg1">
            <Commitee data={research?.student_att} />
            <Commitee data={research?.internal_mark} />
            <Commitee data={research?.complaint} />
            <Commitee data={research?.complaint_against} />

            <div className=" section-bg1 ">
              <div className="decor-ti">
                Student Grievance Redressal Committee{" "}
              </div>

              <ImageCard
                visionItem={research?.vision}
                missionItem={research?.mission}
              />
            </div>
          </section>

          <Sidebar2 subMenu={OfficeOfInternationalAffairsJson} />
        </Context>
      </Provider>
    </>
  );
};

export default OfficeOfInternationalAffairsOverview;
