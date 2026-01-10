import BackToTop from "@/app/backToTop";
import CourseFilteTwoTogglePage from "./index";

export const metadata = {
  title:
    "Course Filter Two Toggle - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const CourseFilteTwoToggleLayout = () => {
  return (
    <>
      <CourseFilteTwoTogglePage />
      <BackToTop />
    </>
  );
};

export default CourseFilteTwoToggleLayout;
