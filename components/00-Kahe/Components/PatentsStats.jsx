import { FirstLetterUp } from "@/utils/functions.utils";
import React from "react";

const PatentsWithIcon = ({ data }) => {
  

  return (
    <section className="pci-wrapper">
      <div className="pci-container">
        
        <div className="col-12">
          <div className="row mb--30">
            <div className="text-center">
              {data.title && (
                <h3
                  className="decor-ti"
                  dangerouslySetInnerHTML={{
                    __html: FirstLetterUp(data.title),
                  }}
                ></h3>
              )}
            </div>

            <div className="simple-counter-grid">
              {data?.content?.map((item, i) => (
                <div key={i} className="simple-counter-card">
                  <p className="simple-counter-number">{item?.value}</p>
                  <div>
                    <img src={item?.src} alt={item?.label} width={40} />
                    <p className="simple-counter-title">{item?.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {data.src && (
          <div className="col-lg-12 img-con mb--30">
            <img src={data.src} alt={data.title} />
          </div>
        )}
        
      </div>
    </section>
  );
};

export default PatentsWithIcon;
