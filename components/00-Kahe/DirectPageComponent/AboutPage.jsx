"use client";

import InnerBanner from "../common-components/InnerBanner";
import { VissionMissiondata } from "@/JSON/About/VissionMission";
import About from "../Components/About/About";
import  data  from "../../../JSON/About/Overview.json";
import AboutOverview from "../Components/AboutOverview";
import IconCard from "../Components/IconCard";
import Recognition from "../Components/About/Recognition";


const VissionPage = () => {

  const aboutData = data
  console.log("aboutData", aboutData);
  
  return (
    <>
      <InnerBanner data={VissionMissiondata?.data} />
      <section className=" section-bg1">
        <About data={aboutData?.about}/>
      </section>
      
      <AboutOverview data={aboutData?.abtOverview}/>

      <section className="section-wid section-bg1">
        <IconCard data = {aboutData?.merits}/>
      </section>

      <section className="section-wid section-bg1 mb-4">
        <Recognition data = {aboutData?.recognition}/>
      </section>
      

      
    </>
  );
};

export default VissionPage;
