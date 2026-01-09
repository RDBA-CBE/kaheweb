"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./KeyRecruiters.module.css";

const recruiters = [
  { name: "TCS", logo: "/images/Kahe/home/key/LOGO-2.jpg" },
  { name: "Zoho", logo: "/images/Kahe/home/key/LOGO-4.jpg" },
  { name: "Accenture", logo: "/images/Kahe/home/key/LOGO-11.jpg" },
  { name: "Zifo", logo: "/images/Kahe/home/key/LOGO-6.jpg" },
  { name: "LTIMindtree", logo: "/images/Kahe/home/key/LOGO-12.jpg" },
  { name: "Infosys", logo: "/images/Kahe/home/key/LOGO-1.jpg" },
  { name: "CTS", logo: "/images/Kahe/home/key/LOGO-8.jpg" },
  { name: "Capgemini", logo: "/images/Kahe/home/key/LOGO-9.jpg" },
  { name: "Amazon", logo: "/images/Kahe/home/key/LOGO-10.jpg" },
  { name: "IBM", logo: "/images/Kahe/home/key/LOGO-11.jpg" },
  { name: "Verizon", logo: "/images/Kahe/home/key/LOGO-12.jpg" },
  { name: "Hexaware", logo: "/images/Kahe/home/key/LOGO-13.jpg" },
  { name: "Paypal", logo: "/images/Kahe/home/key/LOGO-14.jpg" },
  { name: "Urjanet", logo: "/images/Kahe/home/key/LOGO-15.jpg" },
  { name: "Moonraft", logo: "/images/Kahe/home/key/LOGO-16.jpg" },
  { name: "DXC Technology", logo: "/images/Kahe/home/key/LOGO-17.jpg" },
  { name: "Aspire", logo: "/images/Kahe/home/key/LOGO-18.jpg" },
  { name: "Odessa", logo: "/images/Kahe/home/key/LOGO-19.jpg" },
  { name: "Vernalis", logo: "/images/Kahe/home/key/LOGO-20.jpg" },
];

const data = [...recruiters, ...recruiters];
const CARD_WIDTH = 200; // card + gap

export default function KeyRecruiters() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => i + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index >= recruiters.length) {
      setTimeout(() => setIndex(0), 450);
    }
  }, [index]);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) setIndex((i) => i + 1);
    if (diff < -50) setIndex((i) => Math.max(i - 1, 0));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>KEY RECRUITERS</h2>

      <div className={styles.layout}>
        {/* STATS */}
        <div className={styles.stats}>
          <div>
            <h3>1196+</h3>
            <p>Placements</p>
          </div>

          <span className={styles.divider} />

          <div>
            <h3>154+</h3>
            <p>Companies</p>
          </div>
        </div>

        {/* SLIDER */}
        <div className={styles.slider}>
          <button
            className={styles.arrow}
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          >
            «
          </button>

          <div
            className={styles.viewport}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={styles.track}
              style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
            >
              {data.map((item, i) => (
                <div key={i} className={styles.card}>
                  <img src={item.logo} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          <button
            className={styles.arrow}
            onClick={() => setIndex((i) => i + 1)}
          >
            »
          </button>
        </div>
      </div>
    </section>
  );
}
