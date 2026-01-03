import styles from "./NewsCard.module.css";

export default function NewsCard({ data }) {
  return (
    <div className={styles.card}>
      {/* Grey header */}
      <div className={styles.header}>
        <div className={styles.dateBox}>
          <span className={styles.month}>{data.date.month}</span>
          <span className={styles.day}>{data.date.day}</span>
        </div>
      </div>

      {/* Image */}
      <div className={styles.imageWrapper}>
        <img src={data.image} alt={data.title} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.title}>{data.title}</p>
      </div>
    </div>
  );
}
