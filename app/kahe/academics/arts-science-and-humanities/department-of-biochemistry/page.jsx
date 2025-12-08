import BreadCrumb from "@/components/00-Kahe/common-components/BreadCrumb";
import MenuData from "@/data/kahe/MegaMenu.json";
import BreadcrumbImage from "../../../../../public/images/Kahe/breadcrumb/banner-inner1.jpg";
import CourseData from "../../../../../data/course-details/courseData.json";
import TabInnerSection from "@/components/00-Kahe/Components/TabInnerSection";
import { subMenu } from "@/JSON/ACADEMIC/Overview";
import Sidebar from "@/components/00-Kahe/common-components/Sidebar";
import { data } from "@/JSON/ACADEMIC/Arts/dept_of_biochemistry";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";

export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};
const page = () => {
  const selectedMenu = MenuData.menuData.find(
    (menu) => menu.menuType === "academics"
  );

  const postId = 13;

  let getCourse;

  getCourse = JSON.parse(JSON.stringify(CourseData.courseTab));

  const checkMatch = getCourse.find((course) => course.id === postId);

  return (
    <>
      {/* <BreadCrumb img={BreadcrumbImage} /> */}
      {/* <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3 version-02"> */}
         <InnerBanner checkMatch={checkMatch !== undefined ? checkMatch : ""}/>
      {/* </div> */}
     

      <main className="section-wid d-flex gap-4 py-5">

        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              <TabInnerSection
                checkMatchCourses={checkMatch !== undefined ? checkMatch : ""}
                tabSections= {data.tabs}
                tabContent = {data.tabContent}
              />
            </div>

            <div className="col-lg-3 px-0">
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

export default page;
