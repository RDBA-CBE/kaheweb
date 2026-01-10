import BackToTop from "@/app/backToTop";
import CourseMasonryLayout from "./index";

export const metadata = {
  title: "Course Masonry - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const CourseMasonryPage = () => {
  return (
    <>
      <CourseMasonryLayout />

      <BackToTop />
    </>
  );
};

export default CourseMasonryPage;
