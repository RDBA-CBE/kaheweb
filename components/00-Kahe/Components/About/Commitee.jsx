"use client";

import BatchIcon from "@/public/images/Kahe/icons/BatchIcon";
import { FirstLetterUp } from "@/utils/functions.utils";
import Image from "next/image";
import Link from "next/link";

const Commitee = ({ data }) => {
  console.log("data", data);

  return (
    <div className="commitee">
      <div className="decor-ti">{FirstLetterUp(data?.title)}</div>

      <div className="row py-5 align-items-stretch">
        {data?.content?.map((item, index) => (
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 d-flex" key={index}>
            <Link
              href={item?.url}
              className="rbt-cat-box rbt-cat-box-1 text-center d-flex w-100"
            >
              <div className="inner d-flex flex-column w-100">
                <div className="icons">
                  <BatchIcon width="60" height="60" />
                </div>

                <div className="content d-flex flex-column flex-grow-1">
                  <h5
                    className="main-sub-ti mb-4"
                    dangerouslySetInnerHTML={{
                      __html: FirstLetterUp(item.title),
                    }}
                  />

                  <div className="read-more-btn mt-auto">
                    <span className="rbt-btn-link">
                      View <i className="feather-arrow-up-right"></i>
                    </span>
                  </div>
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
