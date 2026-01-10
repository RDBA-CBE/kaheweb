import BackToTop from "../backToTop";
import { getAllPostsMeta } from "@/mdx";
import IslamicCenterPage from "./(islamic-center)";

export const metadata = {
  title: "Islamic Center - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const IslamicCenterLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <IslamicCenterPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default IslamicCenterLayout;
