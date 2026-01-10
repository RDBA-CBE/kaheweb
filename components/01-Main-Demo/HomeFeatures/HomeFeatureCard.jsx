"use client";
import styles from "./HomeFeatures.module.css";

export default function HomeFeatureCard({ image, title, text, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.content}>
        <h3>
          <span className={styles.bar}></span>
          <a href={link} className={styles.titleLink}>
            {title}
          </a>
        </h3>

        <p>{text}</p>
      </div>
    </div>
  );
}
