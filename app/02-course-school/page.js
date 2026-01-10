import BackToTop from "../backToTop";
import CourseSchoolPage from "./(course-school)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Course School - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const CourseSchoolLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <CourseSchoolPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default CourseSchoolLayout;
