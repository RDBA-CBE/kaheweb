"use client";
import styles from "./HomeFeatures.module.css";
import HomeFeatureCard from "./HomeFeatureCard";

const features = [
  {
    id: 1,
    title: "Webinar Schedule",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    image: "/images/Kahe/home/IMAGE-14.jpg",
  },
  {
    id: 2,
    title: "Achievements",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    image: "/images/Kahe/home/IMAGE-15.jpg",
  },
  {
    id: 3,
    title: "Student Support Services",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    image: "/images/Kahe/home/news3.jpg",
  },
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
        <button className={styles.cta}>KNOW MORE</button>
      </div>
    </section>
  );
}
