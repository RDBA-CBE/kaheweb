import BackToTop from "@/app/backToTop";
import CourseCardThreeLayout from "./index";

export const metadata = {
  title: "Course Five - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const CourseCardThreePage = () => {
  return (
    <>
      <CourseCardThreeLayout />
      <BackToTop />
    </>
  );
};

export default CourseCardThreePage;
