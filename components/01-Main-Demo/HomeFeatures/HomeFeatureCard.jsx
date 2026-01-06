"use client";
import styles from "./HomeFeatures.module.css";

export default function HomeFeatureCard({ image, title, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.content}>
        <h3>
          <span className={styles.bar}></span>
          {title}
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
