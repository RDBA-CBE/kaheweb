"use client";
import { CustomHook } from "@/utils/customHook";
import { FirstLetterUp } from "@/utils/functions.utils";
import IconCard from "../Components/IconCard";
import ListStyle from "../Components/ListStyle";
import data from "../../../JSON/ACADEMIC/dicipline.json";
import AboutOverview from "../Components/AboutOverview";

const DiciplinePage = () => {
  return (
    <>
      <section className="vsn-section section-wid ">
        <div className="vsn-container">
        <AboutOverview data={data?.overview} />

         
        </div>
        <section className="section-bg1">
          <div className="">
            <ListStyle data={data?.Behaviour} />
          </div>
        </section>
      </section>
    </>
  );
};

export default DiciplinePage;
