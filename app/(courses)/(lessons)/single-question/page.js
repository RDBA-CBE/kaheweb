import BackToTop from "@/app/backToTop";
import SingleQuestionLayout from "./(single)";

export const metadata = {
  title: "Single Question - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const LessonLayout = () => {
  return (
    <>
      <SingleQuestionLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
