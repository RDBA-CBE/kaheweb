import BackToTop from "../backToTop";
import InstructorsCoachesPage from "./(instructors-coaches)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Instructors & Coaches - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const InstructorsCoachesLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <InstructorsCoachesPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default InstructorsCoachesLayout;
