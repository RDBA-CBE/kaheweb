import BackToTop from "../backToTop";
import SingleCoursePage from "./(single-course)";

export const metadata = {
  title: "Single Course - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const SingleCourseLayout = () => {
  return (
    <>
      <SingleCoursePage />
      <BackToTop />
    </>
  );
};

export default SingleCourseLayout;
