import ExamNotification from "@/components/00-Kahe/ExaminationComponents/ExamNotification";
import OfficeOfInternationalAffairs from "@/components/00-Kahe/OfficeOfInternationalCompoenets/OfficeOfInternationalAffairs";
import PlacementCom from "@/components/00-Kahe/Training&PlacementComs/PlacementCom";

export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};
const page = () => {
  return (
    <>
      <OfficeOfInternationalAffairs table={false} />
    </>
  );
};

export default page;
