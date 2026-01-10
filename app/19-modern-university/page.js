import BackToTop from "../backToTop";
import ModernUniversityPage from "./(modern-university)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Modern University - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const ModernUniversityLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <ModernUniversityPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default ModernUniversityLayout;
