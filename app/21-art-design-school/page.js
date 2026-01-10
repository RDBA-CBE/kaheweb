import BackToTop from "../backToTop";
import { getAllPostsMeta } from "@/mdx";
import ArtDesignSchoolPage from "./(art-design-school)";

export const metadata = {
  title: "ArtDesignSchool - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const ArtDesignSchoolLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <ArtDesignSchoolPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default ArtDesignSchoolLayout;
