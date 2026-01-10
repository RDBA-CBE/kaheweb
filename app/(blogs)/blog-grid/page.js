import BackToTop from "@/app/backToTop";
import BlogGridPage from "./(blog-grid)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog Grid - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const BlogGridLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <BlogGridPage getAllBlogs={blog} />

      <BackToTop />
    </>
  );
};

export default BlogGridLayout;
