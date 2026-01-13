"use client";
import styles from "./HomeFeatures.module.css";
import HomeFeatureCard from "./HomeFeatureCard";
import Link from "next/link";

const features = [
  {
    id: 1,
    title: "Webinar Schedule",
    link:"https://kahedu.edu.in/n/wp-content/uploads/2020/05/Webinar-01.04.2020.pdf",
    text: "Explore upcoming webinars, dates, speakers, and session details.",
    image: "/images/Kahe/home/IMAGE-14.jpg",
  },
  {
    id: 2,
    title: "Achievements",
    link:"/kahe/achievements/",
    text: "Discover academic, research, and institutional achievements here.",
    image: "/images/Kahe/home/IMAGE-15.jpg",
    target: "_blank",
  },
  // {
  //   id: 3,
  //   title: "Student Support Services",
  //   link:"",
  //   text: "Access academic guidance, counselling, and student support resources.",
  //   image: "/images/Kahe/home/news3.jpg",
  // },
  {
    id: 3,
    title: "KAHE E-CONTENT",
    link:"https://kahedu.edu.in/n/wp-content/uploads/2019/11/SSS-V3-2018-2019.pdf",
    text: "Browse digital learning materials, videos, and academic resources.",
    image: "/images/Kahe/home/news4.jpg",
    target: "_blank",
  }
];

export default function HomeFeaturesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {features.map((item) => (
          <HomeFeatureCard key={item.id} {...item} />
        ))}
      </div>

      <div className={styles.ctaWrap}>
       <Link href={"/kahe/achievements"}><button className={styles.cta}>KNOW MORE</button></Link> 
      </div>
    </section>
  );
}
