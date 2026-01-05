import HomePageLayout from "./(main-demo)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const HomePage = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <HomePageLayout getBlog={blog} />
    </>
  );
};

export default HomePage;
