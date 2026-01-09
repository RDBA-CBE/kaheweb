"use client";
import { CustomHook } from "@/utils/customHook";
import { FirstLetterUp } from "@/utils/functions.utils";
import IconCard from "../Components/IconCard";
import ListStyle from "../Components/ListStyle";
import data from "../../../JSON/ACADEMIC/dicipline.json";

const DiciplinePage = () => {
  return (
    <>
      <section className="vsn-section section-wid ">
        <div className="vsn-container">
          <div className="vsn-right">
            <img
              src={data?.vision.src}
              alt={data?.vision.alt}
              className="vsn-image"
            />
          </div>

          <div className="vsn-left">
            <h2
              className="decor-ti"
              dangerouslySetInnerHTML={{
                __html: FirstLetterUp(data?.vision?.title),
              }}
            ></h2>
            <p
              className="fw-bold fs-3"
              dangerouslySetInnerHTML={{ __html: data?.vision.sub_title }}
            ></p>
            <p
              className="vsn-desc"
              dangerouslySetInnerHTML={{ __html: data?.vision.description }}
            ></p>
          </div>
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
