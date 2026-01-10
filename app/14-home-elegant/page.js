import BackToTop from "../backToTop";
import HomeElegantPage from "./(home-elegant)";

export const metadata = {
  title: "Home Elegant - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const HomeElegantLayout = () => {
  return (
    <>
      <HomeElegantPage />
      <BackToTop />
    </>
  );
};

export default HomeElegantLayout;
