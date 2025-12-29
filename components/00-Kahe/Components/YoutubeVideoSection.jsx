"use client";

import { FirstLetterUp, truncateText } from "@/utils/functions.utils";
import Link from "next/link";
import React from "react";

const YoutubeVideoSection = ({ data }) => {
  return (
    <section>
      <div className="yt-video-sec">
        {data?.title && (
          <div className="d-flex justify-content-between">
            <div className="decor-ti">{FirstLetterUp(data?.title)}</div>
            {data?.btnLink && (
              <div className="py-4">
                <Link
                  className="kahe-btn-primary rbt-btn hover-icon-reverse"
                  href={data?.btnLink}
                >
                 
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">{data?.btnText}</span>
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
          </div>
        )}
        <div className="row gy-5">
          {data?.content?.map((item) => (
            <div className="col-xl-3 col-md-4 col-sm-6" key={item.id}>
              <div className="yt-video-card">
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="yt-video-thumb"
                >
                  <img src={item.thumbnail} alt={item.title} />

                  <span className="yt-play-btn">
                    <i className="feather-play"></i>
                  </span>
                </a>

                <div className="yt-video-content">
                  <h6 className="yt-video-title">{truncateText(item.title, 50)}</h6>
                  {/* {item.caption && <span className="yt-video-doctor">{item.caption}</span>} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeVideoSection;
