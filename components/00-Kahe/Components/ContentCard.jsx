import { FirstLetterUp } from "@/utils/functions.utils";
import React from "react";

const ContentCard = ({ data }) => {
  return (
    <>
      <div className="content-card">
        <h2
          className="decor-ti"
          dangerouslySetInnerHTML={{
            __html: FirstLetterUp(data?.title),
          }}
        ></h2>

        
          <div className=" omb-sec py-4" >
            {data?.content?.map((data, index) => (
            <div className="omb-item1" key={index}>
              <div>
                <span>{data?.title1} : </span>
                <a href={data?.url1}>
                  <span
                    className="main-sub-ti mb-4"
                    dangerouslySetInnerHTML={{
                      __html: FirstLetterUp(data?.content1),
                    }}
                  ></span>
                </a>
              </div>
              <p>
                <span>{data?.title2} : </span>
                <a href={`mailto:${data.url2}`}>
                  {data?.content2}
                </a>
              </p>
            </div>
            ))}
          </div>
        
      </div>
    </>
  );
};

export default ContentCard;
