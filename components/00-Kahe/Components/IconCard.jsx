import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";
import React from "react";

const IconCard = ({ data }) => {
  return (
    <section className="fg-wrapper">
      {data.title &&
      <h2 className="decor-ti">{FirstLetterUp(data.title)}</h2>
    }
      {data?.caption && <p className="main-sub-ti">{data?.caption}</p>}
      <div className="fg-grid">
        {data?.content?.map((item, index) => (
          <div className="fg-card" key={index}>
            {item?.src &&
            <div className="fg-icon mb-5">
              <img src={item.src} alt={item.title} width={50} />
            </div>
            }
            {item.title && <h4 className="main-sub-ti mb-4">{item.title}</h4>}
            {item.content && <p className="fg-desc">{item.content}</p>}
            {item?.url && (
              <div className="read-more-btn mt-auto">
                <Link href={item?.url} target={item?.target && item?.target}>
                  <span className="rbt-btn-link">
                    {item?.btnText} <i className="feather-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconCard;
