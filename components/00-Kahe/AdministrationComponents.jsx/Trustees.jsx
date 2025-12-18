import { Administration } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Administration/BoardOfTrustees.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";
import AccordianSidebar from "../common-components/AccordianSidebar";
import UserCard from "../Components/UserCard";


export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};


const Trustees = () => {
    const BoardOfTrustees = data?.trustees;

    console.log("BoardOfTrustees", BoardOfTrustees);
    

  return (
    <>
      <InnerBanner data={BoardOfTrustees?.bannerCon} />
      {/* <AccordianSidebar subMenu={Administration}/> */}

      <main className="section-wid d-flex gap-4 section-bg1">
        <div className="rbt-course-details-area w-100">
          <div className="row">
            <div className="col-lg-9">

              <UserCard data = {BoardOfTrustees}/>
              
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

export default Trustees;
