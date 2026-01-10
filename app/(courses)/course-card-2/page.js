import BackToTop from "@/app/backToTop";
import CourseCardTwoPage from "./index";

export const metadata = {
  title: "Course Four - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const CourseCardFourLayout = () => {
  return (
    <>
      <CourseCardTwoPage />

      <BackToTop />
    </>
  );
};

export default CourseCardFourLayout;
