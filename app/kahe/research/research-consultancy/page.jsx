import FundedResearch from "@/components/00-Kahe/DirectPageComponent/FundedResearch";
import Patent from "@/components/00-Kahe/DirectPageComponent/Patent";


export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};
const page = () => {
  return (
    <>
      <Patent consultancy={true} />
    </>
  );
};

export default page;
