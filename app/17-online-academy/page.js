import BackToTop from "../backToTop";
import OnlineAcademyPage from "./(online-academy)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Online Academy - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const OnlineAcademyLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <OnlineAcademyPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default OnlineAcademyLayout;
