"use client";

import { Examinations } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Examination/CiaTest.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";

import ContentCard from "../Components/ContentCard";
import Sidebar from "../common-components/Sidebar";
import nepOverview from "../../../JSON/ACADEMIC/nepOverview.json";

export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const CIATestCom = (props) => {
  const { overview = false } = props;
  const Examination = data;
  const nepOverviewData = nepOverview;

  return (
    <>
      <InnerBanner
        data={overview ? nepOverviewData?.bannerCon : Examination?.bannerCon}
      />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              {!overview &&
              <ContentCard data={Examination?.timeTable} />
            }
              {!overview &&
<>
              <div className="mt-5">
                <ContentCard data={Examination?.circular} />
              </div>
              <div className="mt-5">
                <ContentCard data={Examination?.instructions} />
              </div>
              </>
}
              <ContentCard
                data={
                  overview ? nepOverviewData?.ciaTest : Examination?.ciaTest
                }
              />
              {overview && <ContentCard data={nepOverviewData?.ciaTest1} />}
              {overview && <ContentCard data={nepOverviewData?.ciaTest2} />}
            </div>

            <div className="col-lg-3 px-0 d-none d-lg-block sidebar-pg">
              <div className="course-sidebar sticky-top">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar subMenu={Examinations} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CIATestCom;
