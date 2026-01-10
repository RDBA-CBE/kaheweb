import BackToTop from "@/app/backToTop";
import CourseFilteTwoOpen from "./index";

export const metadata = {
  title:
    "Course Filter Two Open - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};
const CourseFilteTwoOpenLayout = () => {
  return (
    <>
      <CourseFilteTwoOpen />
      <BackToTop />
    </>
  );
};

export default CourseFilteTwoOpenLayout;
