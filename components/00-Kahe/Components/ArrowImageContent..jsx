"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";

const ArrowImageContent = ({ data, imageOrder, contentOrder, className }) => {
  return (
    <section
      className={`kahe-transfer-wrapper d-none d-md-grid ${
        className ? className : ""
      }`}
      id="programme"
    >
      {/* LEFT SIDE CONTENT */}
      <div
        className={`kahe-transfer-left`}
        style={{ backgroundImage: `url(${data.img})` }}
      ></div>

      {/* RIGHT SIDE LISTING */}
      <div className={`kahe-transfer-right `}>
        <h2 className="kahe-transfer-yellow w-decor-ti">{data?.title}</h2>

        <div className="kahe-transfer-link-box">
          {data?.content?.title && (
            <h3 className="main-sub-ti">
              {FirstLetterUp(data?.content?.title)}
            </h3>
          )}
          <p>{data?.desc}</p>
          {data?.content && data?.content?.length > 0 && (
            <ul>
              {data?.content?.map((item, index) => (
                <li key={index}>
                  <i className="feather-arrow-right pt-1"></i>{" "}
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArrowImageContent;
