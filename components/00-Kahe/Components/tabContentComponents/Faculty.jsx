import Link from "next/link";
import React, { useState } from "react";

const Faculty = ({ facultyContent }) => {

  const [toggle, setToggle] = useState(false);

  // Show 10 initially, else show full list
  const visibleFaculty = toggle
    ? facultyContent.faculty
    : facultyContent.faculty.slice(0, 6);

  return (
    <div className="rbt-dashboard-content bg-color-white" id="faculty">
      <div className="content">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h4
                className="rbt-title-style-3"
                dangerouslySetInnerHTML={{ __html: facultyContent.tab }}
              ></h4>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-lg-12">
            <div className="rbt-dashboard-table table-responsive">
              <table className="rbt-table table table-borderless">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Qualification</th>
                    <th>Designation</th>
                    <th>Email ID</th>
                    <th>Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleFaculty.map((item, i) => (
                    <tr key={i}>
                      <th><span>{item.name}</span></th>
                      <td>{item.qualification}</td>
                      <td>{item.designation}</td>
                      <td>{item.email}</td>
                      <td>
                        <Link href={item.profile} target="_blank">
                          Click here
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {facultyContent.faculty.length > 8 && (
              <div
                className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
                onClick={() => setToggle(!toggle)}
                style={{ cursor: "pointer", marginTop: "15px" }}
              >
                {toggle ? "Show Less" : "Show More"}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
