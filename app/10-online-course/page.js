import BackToTop from "../backToTop";
import OnlineCoursePage from "./(online-course)";

export const metadata = {
  title: "Online Course - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const OnlineCourseLayout = () => {
  return (
    <>
      <OnlineCoursePage />
      <BackToTop />
    </>
  );
};

export default OnlineCourseLayout;
