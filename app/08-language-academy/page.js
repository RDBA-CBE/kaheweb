import BackToTop from "../backToTop";
import LanguageAcademyPage from "./(language-academy)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Language Academy - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const LanguageAcademyLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <LanguageAcademyPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default LanguageAcademyLayout;
