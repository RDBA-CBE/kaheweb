import FundedResearch from "@/components/00-Kahe/DirectPageComponent/FundedResearch";
import Patent from "@/components/00-Kahe/DirectPageComponent/Patent";


export const metadata = {
  title: "List of Ph.D Guides for Research | Research Programs",
  description: "Explore and Check the list of Research Programs in Coimbatore at the Karpagam Academy of Higher Education and further enhance your knowledge in the field.",
};
const page = () => {
  return (
    <>
      <Patent phd_guide={true}/>
    </>
  );
};

export default page;
