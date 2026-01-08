import ExamNotification from "@/components/00-Kahe/ExaminationComponents/ExamNotification";

export const metadata = {
  title: "Examinations | Top Computer Technology Colleges",
  description: "With a focus on research &amp; innovation, we offer a wide range of courses at KAHE, one of the top computer technology colleges in Coimbatore.",
};
const page = () => {
  return (
    <>
      <ExamNotification  table={false}/>
    </>
  );
};

export default page;
