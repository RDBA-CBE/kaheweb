import BackToTop from "@/app/backToTop";
import BlogListPage from "./(blog-list)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog List - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const BlogListLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <BlogListPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default BlogListLayout;
