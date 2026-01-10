import BackToTop from "@/app/backToTop";
import { getAllPostsMeta } from "@/mdx";
import BlogWithSidebarPage from "./(blog-sidebar)";

export const metadata = {
  title: "Blog With Sidebar- Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const BlogWithSidebarLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <BlogWithSidebarPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default BlogWithSidebarLayout;
