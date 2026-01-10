import BackToTop from "../backToTop";
import { getAllPostsMeta } from "@/mdx";
import MultilingualPage from "./(multilingual)";

export const metadata = {
  title: "Multilingual - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const MultilingualLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <MultilingualPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default MultilingualLayout;
