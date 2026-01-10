import BackToTop from "../backToTop";
import ClassicLmsPage from "./(classic-lms)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Home Classic Lms - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const ClassicLmsLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <ClassicLmsPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default ClassicLmsLayout;
