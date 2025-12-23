import { FirstLetterUp } from "@/utils/functions.utils";
import React from "react";

const RowContent = ({ data }) => {
  const items = data?.content || [];

  return (
    <section className="po-wrapper">
      <h2 className="decor-ti">{FirstLetterUp(data.title)}</h2>

      <div className="po-list-grid">
        {items.map((item, index) => (
          <div className="po-item" key={index}>
            <div className="po-left">
              <span className="po-title main-sub-ti">{FirstLetterUp(item.title)}</span>
            </div>

            <div className="po-right">
              <p dangerouslySetInnerHTML={{ __html: item.content1 }}></p>
              <ul className="ps-0">
                {item?.links && item?.links.length > 0 && (
                  item?.links.map((item, index) => (
                     <li key={index} >
                      <span className="fw-semibold"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></span>
                    <span ><a href={item.url}>&nbsp;{item.content}</a></span>
                    
                  </li>
                  ))
                 
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RowContent;
