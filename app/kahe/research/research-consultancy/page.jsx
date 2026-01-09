import FundedResearch from "@/components/00-Kahe/DirectPageComponent/FundedResearch";
import Patent from "@/components/00-Kahe/DirectPageComponent/Patent";


export const metadata = {
  title: "Research Consultancy | Top Ph.D Colleges in Tamil Nadu",
  description: "KAHE is the top Ph.D. college in Tamil Nadu, offering world-class education and research opportunities. Get ready to take your career to next level.",
};
const page = () => {
  return (
    <>
      <Patent consultancy={true} />
    </>
  );
};

export default page;
