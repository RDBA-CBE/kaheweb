"use client";

import React from "react";
import "./UniversityGallery.css";

const images = [
  "/images/Kahe/home/student1.jpg",
  "/images/Kahe/home/student2.jpg",
  "/images/Kahe/home/student3.jpg",
  "/images/Kahe/home/student4.jpg",
  "/images/Kahe/home/student5.jpg",
  "/images/Kahe/home/student6.jpg",
];

export default function UniversityGallery() {
  return (
    <section className="university-section">
      <div className="content">
        <h2>University at Glance</h2>
        <p>
        Karpagam Academy of Higher Education (KAHE) established under Section 3 of UGC Act 1956 is approved by Ministry of Human Resource Development, Government of India. Dr. R. Vasanthakumar, the president of Karpagam Charity trust (KCT), philanthropist, industrialist, entrepreneur and culture promoter.</p>
        <p>Contemporary infrastructure, modern teaching methodologies, career oriented training, excellent placements and the finest faculty have always become the Karpagam’s hallmark. Besides technical expertise, Karpagam Academy of Higher Education (KAHE) has made a mark since its inception by developing communication and soft skills, ensuring enlightening knowledge, extending holistic education and creating a strong value system. Today, with strength of 8000 students and over 750 teaching & non-teaching staff, Karpagam Academy of Higher Education is setting new benchmarks in the educational sphere.
        </p>
      </div>

      <div className="gallery">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`student-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
