import { FirstLetterUp } from "@/utils/functions.utils";
import React from "react";

const CounterStyle = ({ data }) => {
  return (
    <section
      className="rs-wrapper "
      style={{
        backgroundImage: data?.src
          ? `url("${data?.src}")`
          : "/images/Kahe/Innerpages/image-1.jpg",
      }}
    >
      <div className="rs-container section-wid">
         {data.title && <h4 className="wht decor-ti text-white">{FirstLetterUp(data.title)}</h4>}
        <div className="rs-grid">
          {data?.content?.map((item, index) => (
            <div key={index} className={`rs-item`}>
              {item.icon && <div className={`rs-icon`}>
                <img src="/images/Kahe/Innerpages/wreath.png" alt="" /></div>}

              {item.value && <h3 className="rs-value">{item.value}</h3>}

              {item.label && <p className="rs-label">{item.label}</p>}

              {item.text && (
                <p
                  className="rs-text"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterStyle;
