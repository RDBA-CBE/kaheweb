"use client";
import { CustomHook } from "@/utils/customHook";
import { FirstLetterUp } from "@/utils/functions.utils";
import IconCard from "../Components/IconCard";
import Infrastructure from "../Components/tabContentComponents/Infrastructure";
import ListStyle from "../Components/ListStyle";
import SplitArea from "../Components/tabContentComponents/splitArea";
import ImageCard2 from "../Components/ImageCard2";
import data from "../../../JSON/ACADEMIC/regulation.json";
const RegulationPage = () => {
  
  return (
    <>
      <section className="vsn-section  ">
        <div className="vsn-container section-wid">
          <div className="vsn-right">
            <img src={data?.vision.src} alt={data?.vision.alt} className="vsn-image" />
          </div>

          <div className="vsn-left">
            <h2
              className="decor-ti"
              dangerouslySetInnerHTML={{ __html: FirstLetterUp(data?.vision?.title) }}
            ></h2>
            <p
              className="vsn-desc"
              dangerouslySetInnerHTML={{ __html: data?.vision.description }}
            ></p>
          </div>
        </div>

        <div className=" section-bg1 section-wid">
          <IconCard data={data?.attendance} />
        </div>
        <div className=" section-bg1 section-wid">
          <IconCard data={data?.on_duty_attendance} />
        </div>
        <section className="">
          <Infrastructure infrastructureContent={data?.attendanceMarks} />
        </section>
        <section className="section-bg1 section-wid">
          <h2 className="decor-ti">Leave</h2>

          <ImageCard2 data={data?.leaveRules?.items} />
        <div className="section-bg2" >
          <div className="section-wid">
            <div className="remaining-content">
              Note: Submission of leave application with/without medical
              certificate does not entitle that a student can earn attendance
              for the days of his/her absence.
              {/* {splitChar(splitResult.remaining, splitLimit,overviewItem?.tagClasses)} */}
            </div>
          </div>
        </div>
        </section>

        <section className=" section-wid ">
          <h2 className="decor-ti">Fee Regulations</h2>

          <ImageCard2 data={data?.feeRegulations?.items} />
        </section>

        <section className=" section-wid  section-bg1">
          <h2 className="decor-ti">Certificates</h2>

          <ImageCard2 data={data?.certificates?.items} />
          
        </section>
        <div className="section-wid ">
          <ListStyle data={data?.malpractices} />
          <div className="section-bg2" >
          <div className="section-wid">
            <div className="remaining-content">
            Note: The above are only guidelines and any other malpractice not covered under the above mentioned shall be suitably dealt with.
              {/* {splitChar(splitResult.remaining, splitLimit,overviewItem?.tagClasses)} */}
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default RegulationPage;
