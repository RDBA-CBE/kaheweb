import BackToTop from "../backToTop";
import OnlineSchoolPage from "./(online-school)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Online School - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const OnlineSchoolLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <OnlineSchoolPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default OnlineSchoolLayout;
