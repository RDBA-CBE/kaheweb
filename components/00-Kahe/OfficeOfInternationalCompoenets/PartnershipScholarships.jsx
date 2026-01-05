"use client";

import InnerBanner from "../common-components/InnerBanner";
import data from "../../../JSON/InternationalAdmissions/PartnershipScholarships.json";
import StickyBreadcrumb from "../common-components/StickyNavBan";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import Sidebar2 from "../common-components/Sidebar2";
import { Research } from "@/JSON/ACADEMIC/Overview";
import ImageLink from "../Components/ImageLink";
import PaginationTable from "../Components/PaginationTable";
import YoutubeVideoSection from "../Components/YoutubeVideoSection";
import { FirstLetterUp } from "@/utils/functions.utils";

const PartnershipScholarships = () => {
  const InterAdmin = data;

  const breadcrumbItems = [
    { label: "Research", href: `research` },
    { label: "Research Publications", href: `publications` },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={InterAdmin?.bannerCon} />
          <section className="bg-white breadcrumb sticky-top">
            <StickyBreadcrumb items={breadcrumbItems} />
          </section>

          <section className="section-wid mt-5">
            {InterAdmin?.title && (
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2
                      className="decor-ti mb-0"
                      dangerouslySetInnerHTML={{
                        __html: FirstLetterUp(InterAdmin?.title),
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="section-wid section-bg1">
            <PaginationTable data={InterAdmin?.AsiaList} />
          </section>

          <section className="section-wid section-bg1">
            <PaginationTable data={InterAdmin?.EuropeList} />
          </section>

          <section className="section-wid section-bg1">
            <PaginationTable data={InterAdmin?.FacultyList} />
          </section>

          <Sidebar2 subMenu={Research} />
        </Context>
      </Provider>
    </>
  );
};

export default PartnershipScholarships;
