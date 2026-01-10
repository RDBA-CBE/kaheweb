import BackToTop from "../backToTop";
import MarketplacePage from "./(marketplace)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Marketplace - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const MarketplaceLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <MarketplacePage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default MarketplaceLayout;
