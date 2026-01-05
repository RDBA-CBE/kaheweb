import { FirstLetterUp } from "@/utils/functions.utils";
import React from "react";

const ContentCard = ({ data }) => {
  return (
    <>
      <div className="content-card">
      { data?.title &&  <h2
          className="decor-ti"
          dangerouslySetInnerHTML={{
            __html: FirstLetterUp(data?.title)
          }}
        ></h2>}

        <div className=" omb-sec py-4">
          {data?.content?.map((data, index) => (
            <div className="omb-item1" key={index}>
              {data?.subtitle && (
                <h3 className="main-sub-ti mb-3 w-100 border-bottom pb-4">
                  {FirstLetterUp(data?.subtitle)}
                </h3>
              )}

              {/* title : content start */}
              
              {(data?.title1 || data?.content1) && (
                <div>
                  <span>{data?.title1} &nbsp; </span>
                  <a href={data?.url1} target={data?.target}>
                    <span
                      className="main-sub-ti mb-4"
                      dangerouslySetInnerHTML={{
                        __html: FirstLetterUp(data?.content1),
                      }}
                    ></span>
                  </a>
                </div>
              )}
              {(data?.title2 || data?.content2) && (
                <p>
                  <span>{data?.title2} &nbsp; </span>
                  <a href={`${data.url2}`}>{data?.content2}</a>
                </p>
              )}

              {/* title : content end */}

              <ul className="list-unstyled">
                {data?.list?.map((item, index) =>
                  item?.src ? (
                    //  para content with image icon
                    <li
                      className="d-flex gap-3 justify-content-between"
                      key={index}
                    >
                      <a href={item?.url} target={item?.target}>{item?.item}</a>
                      {item?.src && (
                        <a href={item?.url} target={item?.target}>
                          <img src={item?.src} alt={item?.item} width={25} />
                        </a>
                      )}
                    </li>
                  ) : (

                    //  list content with image icon or i-tag icon
                    <li className="d-flex gap-3" key={index}>
                      {item?.i_icon && (
                        <i className={`${item?.i_icon} mt-2`}></i>
                      )}
                      {item?.img_icon && (
                        <img src={item?.img_icon} alt={item?.item} />
                      )}
                      <a href={item?.url} target={item?.target}>{item?.item}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContentCard;
