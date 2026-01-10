import BackToTop from "../backToTop";
import InstructorPortfolioPage from "./(instructor-portfolio)";

export const metadata = {
  title: "Instructor Portfolio - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const InstructorPortfolioLayout = () => {
  return (
    <>
      <InstructorPortfolioPage />
      <BackToTop />
    </>
  );
};

export default InstructorPortfolioLayout;
