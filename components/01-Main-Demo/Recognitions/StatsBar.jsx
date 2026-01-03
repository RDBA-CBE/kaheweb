export default function StatsBar() {
  const stats = [
    { value: "1990", label: "Established" },
    { value: "250+", label: "Acres Green campus" },
    { value: "50,000+", label: "Students" },
    { value: "120+", label: "Departments" },
  ];

  return (
    <div className="stats-fullwidth">
      <div className="stats-inner">
        {stats.map((item, index) => (
          <div className="stat-item" key={index}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
