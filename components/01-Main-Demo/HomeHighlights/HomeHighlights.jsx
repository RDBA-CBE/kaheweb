"use client";
import styles from "./HomeHighlights.module.css";

const highlights = [
  {
    id: 1,
    title: "LIFE AT KAHE",
    text: "The Karpagam Academy of Higher Education campus exemplifies excellence in every nook and corner. From modern classrooms to hygienic canteens, the highest emphasis is laid on ensuring that student life is enriching in every sense.",
    image: "/images/Kahe/home/students-group.jpg",
  },
  {
    id: 2,
    title: "RESEARCH HIGHLIGHTS",
    text: "At Karpagam Academy of Higher Education , we have always believed that education is endless; the more you delve deeper, the more you realize there is still a lot to discover. Hence, our endeavours are aimed at continuing to foster research activities in every stream.",
    image: "/images/Kahe/home/student-lab.jpg",
  },
  // Add more highlights as needed
];

export default function HomeHighlights() {
  return (
    <section className={styles.heroHighlights}>
      <div className={styles.container}>
        {highlights.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.grid} ${index % 2 === 1 ? styles.reverse : ""}`}
          >
            {/* Image Column */}
            <div className={styles.card}>
              <img src={item.image} alt={item.title} />
            </div>

            {/* Content Column */}
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
