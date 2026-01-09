import ExamNotification from "@/components/00-Kahe/ExaminationComponents/ExamNotification";
import OfficeOfInternationalAffairs from "@/components/00-Kahe/OfficeOfInternationalCompoenets/OfficeOfInternationalAffairs";
import PlacementCom from "@/components/00-Kahe/Training&PlacementComs/PlacementCom";

export const metadata = {
  title: "Office of the International Affairs | Best Mechanical Engineering College",
  description: "Looking for the Best Mechanical Engineering Colleges in Tamilnadu? KAHE offers extensive courses and international relations along with job prospects.",
};
const page = () => {
  return (
    <>
      <OfficeOfInternationalAffairs table={false} />
    </>
  );
};

export default page;
