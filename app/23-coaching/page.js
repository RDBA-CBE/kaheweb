import BackToTop from "../backToTop";
import { getAllPostsMeta } from "@/mdx";
import CoachingPage from "./(coaching)";

export const metadata = {
  title: "Coaching - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const CoachingLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <CoachingPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default CoachingLayout;
