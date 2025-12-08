
import React, { useState } from "react";

const Publications = ({ programmeContent }) => {
  console.log("facultyContent", programmeContent);

  const [toggle, setToggle] = useState(false);



  return (
    <div className="rbt-dashboard-content bg-color-white mb--60 d-flex gap-2" id="programme">
     <div className="col-lg-6">
        <div className="section-title">
          <h4 className="rbt-title-style-3 mb--20">{programmeContent.programmes.title}</h4>
        </div>
        <ul className="rbt-list-style-1">
          {programmeContent.programmes.content.map((item, innerIndex) => (
            <li key={innerIndex}>
              <i className="feather-check"></i>
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="col-lg-6">
        <div className="section-title">
          <h4 className="rbt-title-style-3 mb--20">{programmeContent.curriculum.title}</h4>
        </div>
        <ul className="rbt-list-style-1">
          {programmeContent.curriculum.content.map((item, innerIndex) => (
            <li key={innerIndex}>
              <i className="feather-check"></i>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Publications;
