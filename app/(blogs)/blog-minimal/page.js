import BackToTop from "@/app/backToTop";
import BlogGridMinimalPage from "./(blog-minimal)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog Grid - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const BlogGridMinimalLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <BlogGridMinimalPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default BlogGridMinimalLayout;
