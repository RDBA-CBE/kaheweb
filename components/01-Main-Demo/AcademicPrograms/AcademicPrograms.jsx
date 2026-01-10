"use client";
import { useEffect, useRef } from "react";
import styles from "./AcademicPrograms.module.css";


const programs = [
  {
    title: "Faculty Of Arts, Science, Commerce And Management",
    link: "/kahe/academics/arts-science-and-humanities",
    image: "/images/Kahe/home/course-1.jpg",
  },
  {
    title: "Faculty Of Engineering",
    link: "/kahe/academics/engineering",
    image: "/images/Kahe/home/course-2.jpg",
  },
  {
    title: "Faculty Of Architecture",
    link: "/kahe/academics/architecture",
    image: "/images/Kahe/home/course-3.jpg",
  },
  {
    title: "Faculty Of Pharmacy",
    link: "/kahe/academics/pharmacy",
    image: "/images/Kahe/home/course-4.jpg",
  },
  {
    title: "Faculty Of Performing Arts",
    link: "kahe/academics/performing-arts",
    image: "/images/Kahe/home/course-5.jpg",
  },
];;

export default function AcademicPrograms() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* First Row */}
      <div className={styles.firstRow}>
        <div className={styles.titleBox}>
          <h2>ACADEMIC PROGRAMS</h2>
          <p>Karpagam Academy of Higher Education was founded with the mission to impart value based and holistic education that enriches the knowledge and skills of students and empowering their lives by way of educating is what is truly believed at Karpagam.</p>

        </div>

        {programs.slice(0, 2).map((item, i) => (
          <ProgramCard key={i} item={item} index={i} />
        ))}
      </div>

      {/* Second Row */}
      <div className={styles.secondRow}>
        {programs.slice(2).map((item, i) => (
          <ProgramCard key={i} item={item} index={i + 2} />
        ))}
      </div>
    </section>
  );
}

function ProgramCard({ item, index }) {
  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className={styles.imageWrap}>
        <img src={item.image} alt={item.title} />
      </div>

      <div className={styles.cardContent}>
  <h4>
    <a href={item.link} className={styles.titleLink}>
      {item.title}
    </a>
  </h4>
  <p className={styles.degree}>
    BACHELOR <span>|</span> MASTER <span>|</span> Ph.D
  </p>
</div>

    </div>
  );
}
