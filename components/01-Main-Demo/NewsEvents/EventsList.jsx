import styles from "./NewsEvents.module.css";

const events = [
  {
    title:
      "One day National Level Technical Fest (MEDICNIK-2026) cum Biomedical project Expo",
    date: "December 02, 2025",
  },
  {
    title:
      "One-day National Conference on Role of Technology in Environmental Sustainability – 2026",
    date: "December 02, 2025",
  },
  {
    title:
      "TNPSC Group Exams Training Programme Regular Classes for UG Final Year",
    date: "December 02, 2025",
  },
  {
    title:
      "Five-Days Faculty Development Program on Advanced Functional Materials",
    date: "December 02, 2025",
  },
];

export default function EventsList() {
  return (
    <div className={styles.list}>
      {events.map((e, i) => (
        <div key={i} className={styles.listItem}>
          <p>{e.title}</p>
          <span>{e.date}</span>
        </div>
      ))}
    </div>
  );
}
