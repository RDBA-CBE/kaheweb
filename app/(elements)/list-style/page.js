import BackToTop from "@/app/backToTop";
import ListStylePage from "./(list-style)";

export const metadata = {
  title: "List Style - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const ListStyleLayout = () => {
  return (
    <>
      <ListStylePage />
      <BackToTop />
    </>
  );
};

export default ListStyleLayout;
