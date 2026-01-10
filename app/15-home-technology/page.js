import BackToTop from "../backToTop";
import HomeTechnologyPage from "./(home-technology)";

export const metadata = {
  title: "Home Technology - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const HomeTechnologyLayout = () => {
  return (
    <>
      <HomeTechnologyPage />
      <BackToTop />
    </>
  );
};

export default HomeTechnologyLayout;
