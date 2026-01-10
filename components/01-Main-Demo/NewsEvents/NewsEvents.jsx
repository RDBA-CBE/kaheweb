"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./NewsEvents.module.css";
import NewsCard from "./NewsCard";

// News Data
const newsData = [
  { date: { month: "MAR", day: "3" }, image: "/images/Kahe/home/news1.jpg", title: "Karpagam Academy of Higher Education is conferred with Deemed to be University status under Section 3 of UGC Act, 1956 in 2008." },
  { date: { month: "MAR", day: "2" }, image: "/images/Kahe/home/news2.jpg", title: "Member of Association of Indian Universities." },
  { date: { month: "APRIL", day: "6" }, image: "/images/Kahe/home/news3.jpg", title: "Accredited with A+ Grade by NAAC in the Second cycle." },
  { date: { month: "DEC", day: "4" }, image: "/images/Kahe/home/news4.jpg", title: "India Rankings 2025: University (Rank-band: 101-150), by the NIRF, Ministry of Education, Government of India." },
  { date: { month: "APRIL", day: "29" }, image: "/images/Kahe/home/news1.jpg", title: "NIRF for Innovation Ranking, our institution is ranked as Four-star rank by the Ministry of Education, Government of India." },
  { date: { month: "DEC", day: "6" }, image: "/images/Kahe/home/news2.jpg", title: "ISO 9001 - 2015 Certified (Quality Management System)." },
  { date: { month: "MAY", day: "6" }, image: "/images/Kahe/home/news3.jpg", title: "ISO 14001 - 2015 Certified (Environment Management System)." },
  { date: { month: "DEC", day: "8" }, image: "/images/Kahe/home/news4.jpg", title: "Arts, Science, Commerce and Performing Arts programmes approved by UGC." },
  { date: { month: "DEC", day: "9" }, image: "/images/Kahe/home/news1.jpg", title: "Architecture programmes approved by Council of Architecture." },
  { date: { month: "MAY", day: "10" }, image: "/images/Kahe/home/news2.jpg", title: "Pharmacy Programmes approved by Pharmacy Council of India." },
  { date: { month: "DEC", day: "11" }, image: "/images/Kahe/home/news3.jpg", title: "Engineering, Design, Planning, BCA, BBA, MCA & MBA programmes approved by AICTE." },
  { date: { month: "JUNE", day: "12" }, image: "/images/Kahe/home/news4.jpg", title: "DSIR recognized Research Institution (SIRO)." },
  { date: { month: "AUG", day: "13" }, image: "/images/Kahe/home/news1.jpg", title: "MHRD approved Institution Innovation Council (IIC)." },
  { date: { month: "JULY", day: "14" }, image: "/images/Kahe/home/news2.jpg", title: "CPCSEA – Government of India approved Animal House." },
  { date: { month: "SEP", day: "15" }, image: "/images/Kahe/home/news3.jpg", title: "Drug Testing Laboratory approved by the Drug Controller of Tamil Nadu." },
  { date: { month: "OCT", day: "16" }, image: "/images/Kahe/home/news4.jpg", title: "DST-FIST status awarded to the Departments of Biotechnology & Electrical Sciences." },
  { date: { month: "DEC", day: "17" }, image: "/images/Kahe/home/news1.jpg", title: "NSS approved by Ministry of Youth Affairs, Government of India." },
  { date: { month: "DEC", day: "18" }, image: "/images/Kahe/home/news2.jpg", title: "NCC approved by Ministry of Defence, Government of India." },
];

// Events Data
const eventsData = [
  { title: "National Conference on Advanced Technologies and Sustainable Materials in Electronics, Signal Processing and Circuit Design", date: "13.03.2026" },
  { title: "One-day National Conference on Integrating Life Sciences and Engineering: Innovations in Biotechnology for Sustainable Development (ILE 2026)", date: "05.03.2026" },
  { title: "National Level Hackathon and Pharma Anveshan-2026 (Pharma Expo)", date: "06.03.2026" },
  { title: "2nd National Level Conference on Innovations in Cyber Security and Information Engineering (ICSIE’26) – Hybrid Mode", date: "06.03.2026" },
  { title: "One-day National Level Technical Fest – 2K26", date: "13.02.2026" },
  { title: "One-day National Level Technical Fest (MEDICNIK-2026) cum Biomedical Project Expo", date: "06.02.2026" },
  { title: "One-day National Conference on Role of Technology in Environmental Sustainability (RTES’26) – Hybrid Mode", date: "30.01.2026" },
];

export default function NewsEvents() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);
  const eventsRef = useRef(null);

  // Adjust cardsToShow based on screen width
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth <= 900 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + cardsToShow) % newsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cardsToShow]);

  const prev = () => {
    setStartIndex(
      (startIndex - cardsToShow + newsData.length) % newsData.length
    );
  };

  const next = () => {
    setStartIndex((startIndex + cardsToShow) % newsData.length);
  };

  // Determine visible news cards
  const visibleNews = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleNews.push(newsData[(startIndex + i) % newsData.length]);
  }

  // Auto-scroll events
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
        {/* News Slider */}
        <div className={styles.newsSlider}>
          <button onClick={prev} className={styles.arrow}>‹</button>
          <div className={styles.cardsContainer}>
            {visibleNews.map((item, idx) => (
              <NewsCard key={idx} data={item} />
            ))}
          </div>
          <button onClick={next} className={styles.arrow}>›</button>
        </div>

        {/* Events scrolling */}
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
