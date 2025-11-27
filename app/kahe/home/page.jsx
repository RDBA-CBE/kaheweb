
import { getAllPostsMeta } from "@/mdx";
import HomePageLayout from "../01-main-demo/(main-demo)";

export const metadata = {
  title: "Histudy - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
