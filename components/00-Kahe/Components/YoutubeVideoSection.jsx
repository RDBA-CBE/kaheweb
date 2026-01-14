"use client";

import { FirstLetterUp, truncateText } from "@/utils/functions.utils";
import Link from "next/link";
import React, { useState } from "react";
import "./YoutubeVideoSection.scss";

const YoutubeVideoSection = ({ data }) => {
  const [showShareMenu, setShowShareMenu] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(null);

  const getYouTubeVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleShare = (item) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        url: item.videoUrl
      });
    } else {
      navigator.clipboard.writeText(item.videoUrl);
      alert('Video link copied to clipboard!');
    }
    setShowShareMenu(null);
  };

  return (
    <section className="kahe-youtube-video-section">
      <div className="yt-video-sec">
        {data?.title && (
          <div className="d-flex justify-content-between">
            <div className="decor-ti">{FirstLetterUp(data?.title)}</div>
            {data?.btnLink && (
              <div className="py-4">
                <Link
                  className="kahe-btn-primary rbt-btn hover-icon-reverse"
                  href={data?.btnLink} target={data?.target}
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
                <div className="kahe-yt-video-thumb">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    onClick={() => setShowVideoModal(item.id)}
                  />
                  
                  <div 
                    className="kahe-yt-play-overlay"
                    onClick={() => setShowVideoModal(item.id)}
                  >
                    <i className="feather-play"></i>
                  </div>
                </div>

                {/* {showShareMenu === item.id && (
                  <div className="kahe-yt-share-dropdown">
                    <button 
                      className="kahe-yt-share-option"
                      onClick={() => handleShare(item)}
                    >
                      <i className="feather-share-2"></i>
                      <span>Share</span>
                    </button>
                  </div>
                )} */}

                <div className="yt-video-content">
                  <h6 className="yt-video-title">{truncateText(item.title, 50)}</h6>
                  {/* {item.caption && <span className="yt-video-doctor">{item.caption}</span>} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Video Modal */}
      {showVideoModal && (
        <div 
          className="kahe-yt-video-modal"
          onClick={() => setShowVideoModal(null)}
        >
          <div 
            className="kahe-yt-video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="kahe-yt-modal-close"
              onClick={() => setShowVideoModal(null)}
            >
              <i className="feather-x"></i>
            </button>
            
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(data?.content?.find(item => item.id === showVideoModal)?.videoUrl)}?autoplay=1&controls=1`}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default YoutubeVideoSection;
