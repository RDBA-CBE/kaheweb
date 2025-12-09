// import React from "react";

// const Programmes = () => {
//   return (
//     <section className="kahe-transfer-wrapper"  id="programme">
//       <div className={`kahe-transfer-left tab-pane fade advance-tab-content-1 `}>
//         <div className="kahe-transfer-img-overlay">
//           <div className="kahe-transfer-text-box" >
//             <p>
//               B.Sc Chemistry
//             </p>

//             <button className="kahe-transfer-btn">
//                Student Programmes →
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="kahe-transfer-right">
//         <div className="kahe-transfer-yellow main-ti">
//           Student Programmes
//         </div>

//         <div className="kahe-transfer-link-box">
//           <h3>Programmes</h3>
//           <ul>
//             <li>Under Graduate Programme</li>
//             <li >Post Graduate Programmes</li>
//             <li>Research Programmes</li>

//           </ul>

//            <h3>Curriculum</h3>
//           <ul>
//             <li>B.Sc. Chemistry</li>
//             <li >M.Sc. Chemistry</li>
//             <li>Ph.D. Chemistry</li>

//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Programmes;

"use client";

import React, { useState } from "react";

const Programmes = () => {
  // Tab data directly inside component (since no JSON)
  const programmeTabs = [
    {
      key: "ug",
      title: "Under Graduate Programme",
      img: "/images/others/health-b-02.png",
      text: "B.Sc Chemistry",
    },
    {
      key: "pg",
      title: "Post Graduate Programmes",
      img: "/images/others/health-b-02.png",
      text: "M.Sc Chemistry",
    },
    {
      key: "res",
      title: "Research Programmes",
      img: "/images/others/health-b-02.png",
      text: "Ph.D. Chemistry",
    },
  ];

  const curriculumTabs = [
    {
      key: "bsc",
      title: "B.Sc. Chemistry",
      img: "/images/others/health-b-02.png",
      text: "B.Sc Chemistry Programme",
    },
    {
      key: "msc",
      title: "M.Sc. Chemistry",
      img: "/images/others/health-b-02.png",
      text: "M.Sc Chemistry Programme",
    },
    {
      key: "phd",
      title: "Ph.D. Chemistry",
      img: "/images/others/health-b-02.png",
      text: "Ph.D Chemistry Programme",
    },
  ];

  // We store active content
  const [activeData, setActiveData] = useState(programmeTabs[0]);

  return (
    <section className="kahe-transfer-wrapper" id="programme">
      {/* ==== LEFT SIDE CONTENT DYNAMIC ==== */}
      <div
        className="kahe-transfer-left tab-pane fade advance-tab-content-1 active show"
        style={{ backgroundImage: `url(${activeData.img})` }}
      >
        <div className="kahe-transfer-img-overlay">
          <div className="kahe-transfer-text-box">
            <p>{activeData.text}</p>

            <button className="kahe-transfer-btn">Student Programmes →</button>
          </div>
        </div>

        
      </div>

      {/* ==== RIGHT SIDE - CLICKABLE TABS ==== */}
      <div className="kahe-transfer-right">
        <h2 className="kahe-transfer-yellow main-ti">Student Programmes</h2>

        <div className="kahe-transfer-link-box">
          <h3 className="main-sub-ti">Programmes</h3>
          <ul>
            {programmeTabs.map((item) => (
              <li
                key={item.key}
                style={{ cursor: "pointer" }}
                className={activeData.key === item.key ? "active" : ""}
                onClick={() => setActiveData(item)}
              >
                {item.title}
              </li>
            ))}
          </ul>

          <h3 className="main-sub-ti">Curriculum</h3>
          <ul>
            {curriculumTabs.map((item) => (
              <li
                key={item.key}
                style={{ cursor: "pointer" }}
                className={activeData.key === item.key ? "active" : ""}
                onClick={() => setActiveData(item)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Programmes;
