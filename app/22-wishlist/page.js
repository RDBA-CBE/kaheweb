import BackToTop from "../backToTop";
import { getAllPostsMeta } from "@/mdx";
import WishlistPage from "./(wishlist)";

export const metadata = {
  title: "Wishlist - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const WishlistLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <WishlistPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default WishlistLayout;
