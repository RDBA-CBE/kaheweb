// import BreadCrumb from "@/components/00-Kahe/common-components/BreadCrumb";
// import MenuData from "@/data/kahe/MegaMenu.json";
// import BreadcrumbImage from "../../../../../public/images/Kahe/breadcrumb/banner-inner1.jpg";
// import CourseData from "../../../../../data/course-details/courseData.json";
import TabInnerSection from "@/components/00-Kahe/Components/TabInnerSection";
import { subMenu } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/ACADEMIC/Arts/dept_of_biochemistry.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";

export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};
console.log("data", data);

const DeptOfBioChemPage = () => {
  return (
    <>
      {/* <BreadCrumb img={BreadcrumbImage} /> */}

      <InnerBanner data={data}/>

      <main className="section-wid d-flex gap-4 py-5">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              <TabInnerSection
                tabSections={data.tabs}
                tabContent={data.tabContent}
              />
            </div>

            <div className="col-lg-3 px-0 d-none d-md-block">
              <div className="course-sidebar sticky-top rbt-shadow-box rbt-gradient-border ">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar subMenu={subMenu} />
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

export default DeptOfBioChemPage;

