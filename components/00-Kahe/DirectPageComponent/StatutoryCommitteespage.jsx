"use client";

import InnerBanner from "../common-components/InnerBanner";
import Commitee from "../Components/About/Commitee";
import  data  from "../../../JSON/About/commitee.json";

const StatutoryCommitteespage = () => {
  console.log("data", data);
  const commiteeData = data?.statutaryCommitee;
  return (
    <>
      <InnerBanner data={commiteeData?.bannerCon} />

      <section className="section-wid sta-commitee  py-5">
        
          <Commitee data={commiteeData} />
        
        
      </section>
    </>
  );
};

export default StatutoryCommitteespage;
