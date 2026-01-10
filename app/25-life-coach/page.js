import BackToTop from "../backToTop";
import { getAllPostsMeta } from "@/mdx";
import LifeCoachPage from "./(life-coach)";

export const metadata = {
  title: "Life Coach - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const LifeCoachLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <LifeCoachPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default LifeCoachLayout;
