import FundedResearch from "@/components/00-Kahe/DirectPageComponent/FundedResearch";
import Patent from "@/components/00-Kahe/DirectPageComponent/Patent";


export const metadata = {
  title: "List of Ph.D Scholars |Phd biotechnology colleges in India",
  description: "Get ready to conduct your research under the guidance of our industry-experienced faculty members. Join KAHE - the best Ph.D. biotechnology college.",
};
const page = () => {
  return (
    <>
      <Patent phd_research={true} />
    </>
  );
};

export default page;
