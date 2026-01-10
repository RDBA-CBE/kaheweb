import UniversityStatusPage from "./(university-status)";
import BackToTop from "../backToTop";

export const metadata = {
  title: "University Status - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const UniversityStatusLayout = () => {
  return (
    <>
      <UniversityStatusPage />
      <BackToTop />
    </>
  );
};

export default UniversityStatusLayout;
