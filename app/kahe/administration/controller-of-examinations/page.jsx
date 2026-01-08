import ControllerOfExamination from "@/components/00-Kahe/AdministrationComponents.jsx/ControllerOfExamination";
import President from "@/components/00-Kahe/AdministrationComponents.jsx/President";

export const metadata = {
  title: "COE | Top 10 Arts College in Coimbatore, India",
  description: "KAHE is one of the top arts colleges in Coimbatore providing the best education. The controller of examinations at KAHE ensures the success of our students.",
};

const page = async () => {
  return (
    <>
      
      <ControllerOfExamination />;
    </>
  );
};

export default page;
