"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./NewsEvents.module.css";
import NewsCard from "./NewsCard";

const newsData = [
  {
    date: { month: "DEC", day: "9" },
    image: "/images/Kahe/home/news1.jpg",
    title:
      '2nd National Level Conference on "Innovations in Cyber Security and Information Engineering" (ICSIE’26) (Hybrid Mode) on 06.03.2026.',
  },
  {
    date: { month: "DEC", day: "10" },
    image: "/images/Kahe/home/news2.jpg",
    title:
      '2nd National Level Conference on "Innovations in Cyber Security and Information Engineering" (ICSIE’26) (Hybrid Mode) on 06.03.2026.',
  },
  {
    date: { month: "DEC", day: "11" },
    image: "/images/Kahe/home/news3.jpg",
    title: "Another News Item Example.",
  },
  {
    date: { month: "DEC", day: "12" },
    image: "/images/Kahe/home/news4.jpg",
    title: "More news coming soon!",
  },
];

const eventsData = [
  { title: "One day National Level Technical Fest (MEDICNIK-2026)", date: "06.02.2026" },
  { title: "One-day National Conference on 'Role of Technology in Environmental Sustainability' - 2026 (RTES’26) through Hybrid mode", date: "30.01.2026" },
  { title: "TNPSC Group Exams Training Programme Regular Classes for UG Final Year (Computer Science stream)", date: "03.12.2025 - 16.12.2025" },
  { title: "Five-Days Faculty Development Program on 'Advanced Functional Materials and Energy Systems'", date: "08.12.2025 - 12.12.2025" },
];

export default function NewsEvents() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 2;

  const prev = () => {
    setStartIndex((startIndex - cardsToShow + newsData.length) % newsData.length);
  };

  const next = () => {
    setStartIndex((startIndex + cardsToShow) % newsData.length);
  };

  const visibleNews = [
    newsData[startIndex],
    newsData[(startIndex + 1) % newsData.length],
  ];

  const eventsRef = useRef(null);

  useEffect(() => {
    const list = eventsRef.current;
    let scrollHeight = list.scrollHeight / 2;
    let current = 0;

    const step = () => {
      current += 1;
      if (current >= scrollHeight) current = 0;
      list.scrollTop = current;
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>NEWS & EVENTS</h2>

      <div className={styles.wrapper}>
        {/* Left: News Slider */}
        <div className={styles.newsSlider}>
          <button onClick={prev} className={styles.arrow}>‹</button>
          <div className={styles.cardsContainer}>
            {visibleNews.map((item, idx) => (
              <NewsCard key={idx} data={item} />
            ))}
          </div>
          <button onClick={next} className={styles.arrow}>›</button>
        </div>

        {/* Right: Events scrolling */}
        <div className={styles.eventsList} ref={eventsRef}>
          <ul className={styles.eventsScrolling}>
            {eventsData.concat(eventsData).map((event, idx) => (
              <li key={idx}>
                <p>{event.title}</p>
                <span>{event.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.centerBtn}>
        <button className={styles.knowMore}>KNOW MORE</button>
      </div>
    </section>
  );
}
