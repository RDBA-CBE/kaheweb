import React from "react";
import Link from "next/link";
import mediaCentreData from "@/JSON/studio_360.json";

export default function KaheMediaCentreStudio360() {
  return (
    <div className="section-wid py-5">
      {/* Main Heading */}
      <div className="row mb-5">
        <div className="col-12 ">
          <h1 className="display-4 fw-bold  mb-4">
            {mediaCentreData.title}
          </h1>
        </div>
      </div>

      {/* Video Section */}
      <div className="row mb-5">
        <div className="col-12 col-lg-8 mx-auto">
          <div className="ratio ratio-16x9">
            <iframe
              src={mediaCentreData.video.src}
              title={mediaCentreData.video.title}
              allowFullScreen
              className="rounded shadow"
            ></iframe>
          </div>
        </div>
      </div>

      {/* 7 Images Gallery */}
      <div className="row g-4 mb-5">
        {mediaCentreData.images.map((image, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <img
              src={image.src}
              alt={image.alt}
              className="img-fluid rounded shadow"
            />
          </div>
        ))}
      </div>

      {/* Sub Heading and Text */}
      <div className="row">
        <div className="col-12 col-lg-12 mx-auto ">
          <h3 className="h2 fw-semibold mb-4">
            {mediaCentreData.subHeading}
          </h3>
          <p className="lead mb-4">
            {mediaCentreData.description}
          </p>
          <Link
            target={mediaCentreData.link.target}
            href={mediaCentreData.link.url}
            className="btn btn-primary btn-lg px-4 py-2"
          >
            {mediaCentreData.link.text}{" "}
            <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
