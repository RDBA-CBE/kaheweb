"use client";

import BatchIcon from "@/public/images/Kahe/icons/BatchIcon";
import { FirstLetterUp } from "@/utils/functions.utils";
import Image from "next/image";
import Link from "next/link";

const Commitee = ({ data, paddingtop = false }) => {
  console.log("data", data);

  return (
    <div className="commitee">
      {data?.title && (
        <div className="decor-ti">{FirstLetterUp(data?.title)} </div>
      )}

      <div
        className={`row ${
          paddingtop ? "" : "py-5"
        } py-5 align-items-stretch gy-4`}
      >
        {data?.content?.map((item, index) => (
          <div
            className={`${
              data?.clsName
                ? data?.clsName
                : "col-lg-3 col-md-6 col-sm-6 col-12"
            } d-flex`}
            key={index}
          >
            <Link
              href={item?.url || "#"}
              target={item?.target && item?.target}
              className="rbt-cat-box rbt-cat-box-1 text-center d-flex w-100"
            >
              <div className="inner d-flex flex-column w-100">
                <div className="icons">
                  {item?.src ? (
                    <img src={item?.src} alt={item?.title} />
                  ) : (
                    <BatchIcon width="60" height="60" />
                  )}
                </div>

                <div className="content d-flex flex-column flex-grow-1">
                  <h5
                    className="main-sub-ti mb-4"
                    dangerouslySetInnerHTML={{
                      __html: FirstLetterUp(item.title),
                    }}
                  />

                  {data?.btnText && (
                    <div className="read-more-btn mt-auto">
                      <span className="rbt-btn-link">
                        {data?.btnText}{" "}
                        <i className="feather-arrow-up-right"></i>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commitee;
