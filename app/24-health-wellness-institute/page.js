import BackToTop from "../backToTop";
import { getAllPostsMeta } from "@/mdx";
import HealthInstitutePage from "./(health-wellness-institute)";

export const metadata = {
  title:
    "Health & Wellness Institute - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const HealthInstituteLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <HealthInstitutePage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default HealthInstituteLayout;
