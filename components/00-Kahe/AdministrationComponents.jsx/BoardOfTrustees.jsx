import { Administration } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Administration/BoardOfTrustees.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";
import UserCard from "../Components/UserCard";
import Breadcrumb from "../common-components/BreadCrumb";

export const metadata = {
  title: "Board of Trustees | Top BBA Colleges in Coimbatore",
  description:
    "The List of the Board of Trustees at the top BBA Colleges in Coimbatore-Karpagam Academy of Higher Education. Become a part of this vibrant learning community.",
};

const BoardOfTrustees = () => {
  
  const breadcrumbItems = [
    {
      label: "Administration",
      href: `/administration/`,
    },

    { label: "Board Of Trustees" },
  ];

  const BoardOfTrustees = data?.BoardofTrustees;
  // console.log("BoardOfTrustees", BoardOfTrustees);

  return (
    <>
      <InnerBanner data={BoardOfTrustees?.bannerCon} />
      <Breadcrumb items={breadcrumbItems} />

      <main className="section-wid d-flex gap-4 py-5">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              <UserCard data={BoardOfTrustees} />
            </div>

            <div className="col-lg-3 px-0 d-none d-lg-block sidebar-pg">
              <div className="course-sidebar sticky-top">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar subMenu={Administration} />
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

export default BoardOfTrustees;
