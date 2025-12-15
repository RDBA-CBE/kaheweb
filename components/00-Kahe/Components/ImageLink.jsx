"use client";

import BatchIcon from "@/public/images/Kahe/icons/BatchIcon";
import { titleCaseWithAcronyms } from "@/utils/functions.utils";
import Image from "next/image";
import Link from "next/link";

const ImageLink = ({ data }) => {
  console.log("data", data);

  return (
    <div className=" commitee">
      <div className="decor-ti">{titleCaseWithAcronyms(data?.title)}</div>
      <div className="row py-5">
        {data?.content?.map((item, index) => (
          <div className="imageLink-sec" key={index}>
            <div className="imageLink-item1">
              <p>{item.content}</p>
              <a href={item?.url} className="read-more-btn">
                <span className="rbt-btn-link">
                  For More Information
                  <i className="feather-arrow-up-right"></i>
                </span>
              </a>
            </div>
            <div className="imageLink-item2">
              <img src={item?.src} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageLink;
