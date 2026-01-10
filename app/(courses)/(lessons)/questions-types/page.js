import BackToTop from "@/app/backToTop";
import QuestionTypeLayout from "./(types)";

export const metadata = {
  title: "Question Type - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const LessonLayout = () => {
  return (
    <>
      <QuestionTypeLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
