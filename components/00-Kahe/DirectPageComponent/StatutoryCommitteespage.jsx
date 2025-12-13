"use client";

import InnerBanner from "../common-components/InnerBanner";
import { VissionMissiondata } from "@/JSON/About/VissionMission";
import Commitee from "../Components/About/Commitee";
import  data  from "../../../JSON/About/commitee.json";

const StatutoryCommitteespage = () => {
  console.log("data", data);
  return (
    <>
      <InnerBanner data={VissionMissiondata?.data} />

      <section className="section-wid sta-commitee">
        
          <Commitee data={data} />
        
        
      </section>
    </>
  );
};

export default StatutoryCommitteespage;
