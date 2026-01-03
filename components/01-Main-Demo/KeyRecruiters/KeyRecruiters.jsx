"use client";
import { useState } from "react";
import styles from "./KeyRecruiters.module.css";

const recruiters = [
  { name: "TCS", logo: "/logos/tcs.png" },
  { name: "Zoho", logo: "/logos/zoho.png" },
  { name: "Accenture", logo: "/logos/accenture.png" },
  { name: "Zifo", logo: "/logos/zifo.png" },
  { name: "LTIMindtree", logo: "/logos/ltimindtree.png" },
  { name: "Infosys", logo: "/logos/infosys.png" },
];

export default function KeyRecruiters() {
  const visibleCount = 5;
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev < recruiters.length - visibleCount ? prev + 1 : prev
    );
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>KEY RECRUITERS</h2>

      <div className={styles.row}>
        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <h3>1196+</h3>
            <p>Placements</p>
          </div>

          <span className={styles.divider}></span>

          <div className={styles.statItem}>
            <h3>154+</h3>
            <p>Companies</p>
          </div>
        </div>

        {/* Slider */}
        <div className={styles.slider}>
          <button onClick={prev} className={styles.arrow}>‹</button>

          <div className={styles.viewport}>
            <div
              className={styles.logos}
              style={{ transform: `translateX(-${index * 180}px)` }}
            >
              {recruiters.map((item, idx) => (
                <div key={idx} className={styles.logoCard}>
                  <img src={item.logo} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          <button onClick={next} className={styles.arrow}>›</button>
        </div>
      </div>
    </section>
  );
}
