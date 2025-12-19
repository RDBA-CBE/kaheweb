import { FirstLetterUp } from "@/utils/functions.utils";
import React from "react";

const IconCard = ({ data }) => {
  return (
    <section className="fg-wrapper">
      <h2 className="decor-ti">{FirstLetterUp(data.title)}</h2>
      {data?.caption && <p className="main-sub-ti">{data?.caption}</p>}
      <div className="fg-grid">
        {data?.content?.map((item, index) => (
          <div className="fg-card" key={index}>
            <div className="fg-icon mb-5">
              <img src={item.src} alt={item.title} width={50}/>
            </div>
            <h4 className="main-sub-ti mb-4">{item.title}</h4>
            <p className="fg-desc">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconCard;
