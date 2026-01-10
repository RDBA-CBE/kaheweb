import BackToTop from "../backToTop";
import UniversityPage from "./(university-classic)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "University Classic - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const UniversityLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <UniversityPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default UniversityLayout;
