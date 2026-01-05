"use client";

import BatchIcon from "@/public/images/Kahe/icons/BatchIcon";
import { FirstLetterUp } from "@/utils/functions.utils";
import Image from "next/image";
import Link from "next/link";

const AddContentCard = ({ data }) => {
  console.log("data", data);

  return (
    <div className=" ">
     {data?.title && <div className="decor-ti">{FirstLetterUp(data?.title)} </div>}

      <div className="row py-5 align-items-stretch gy-5">
        {data?.content?.map((item, index) => (
          <div
            className={`${
              item?.gridCls
                ? item?.gridCls
                : "col-lg-4 col-md-6 col-sm-6 col-12"
            } d-flex px-4`}
            key={index}
          >
            <div
              className={`rbt-cat-box rbt-cat-box-1 text-center d-flex w-100 `}
            >
              <div
                className={`inner d-flex flex-column w-100 ${
                  item?.bgcolor ? item?.bgcolor : ""
                }`}
              >
                {item.src && (
                  <div className="icons">
                    <img src={item.src} alt={item.title} />
                  </div>
                )}

                <div className="content d-flex flex-column flex-grow-1 px-4">
                  {item.title && (
                    <h5
                      className="main-sub-ti mb-4"
                      dangerouslySetInnerHTML={{
                        __html: FirstLetterUp(item.title),
                      }}
                    />
                  )}
                  {item.title1 && (
                    <h5
                      className="w-decor-ti mb-4"
                      dangerouslySetInnerHTML={{
                        __html: FirstLetterUp(item.title1),
                      }}
                    />
                  )}

                  {item?.btnText && (
                    <div className="py-4">
                      <Link
                        className="kahe-btn-primary rbt-btn hover-icon-reverse"
                        href={item?.btnUrl} target={item?.target && item?.target}
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">{item?.btnText}</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  )}

                  {item?.subtitle && (
                    <p
                      className={`py-0 mb-0 px-4 fw-semibold ${
                        item?.ConClsName ? item?.ConClsName : ""
                      }`}
                      dangerouslySetInnerHTML={{ __html: item?.subtitle }}
                    ></p>
                  )}

                  {item?.content && (
                    <>
                      <p
                        className={`py-4 px-4 ${item?.ConClsName || ""}`}
                        dangerouslySetInnerHTML={{ __html: item?.content }}
                      ></p>

                      {(item?.links || item?.socialLinks) && (
                        <hr className=" mx-4 bg-black" />
                      )}
                    </>
                  )}

                  {item?.links && (
                    <>
                      <ul
                        className={item?.ulcls || ""}
                        style={{ listStyle: "none" }}
                      >
                        {item?.links.map((linkItem, linkIndex) => (
                          <li
                            key={linkIndex}
                            className={` my-0 d-flex align-items-center gap-4 ${
                              linkItem?.clsname || ""
                            }`}
                          >
                            <span>
                              {linkItem?.icon && (
                                <i className={linkItem?.icon}></i>
                              )}
                              {linkItem?.title && (
                                <p className="me-2 fw-semibold">
                                  {linkItem?.title}:
                                </p>
                              )}
                            </span>
                            <a
                              href={linkItem?.url}
                              className="text-decoration-none"
                            >
                              {linkItem?.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {data?.btnText && (
                    <div className="read-more-btn mt-auto">
                      <span className="rbt-btn-link">
                        {data?.btnText}{" "}
                        <i className="feather-arrow-up-right"></i>
                      </span>
                    </div>
                  )}

                  {item?.socialLinks && (
                    <ul className="kahe-social-icons px-4">
                      {item?.socialLinks?.map((item, index) => (
                        <li key={index}>
                          <a href={item?.url} aria-label={item?.name} target= {item?.target && item?.target}>
                            <i className={item?.icon}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddContentCard;
