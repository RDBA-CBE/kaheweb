import BackToTop from "../backToTop";
import UdemyAffiliatePage from "./(udemy-affiliate)";

export const metadata = {
  title: "Udemy Affiliate - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const UdemyAffiliateLayout = () => {
  return (
    <>
      <UdemyAffiliatePage />
      <BackToTop />
    </>
  );
};

export default UdemyAffiliateLayout;
