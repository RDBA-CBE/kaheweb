import Link from "next/link";
import React, { useState } from "react";

const Infrastructure = ({ infrastructureContent }) => {
  console.log("facultyContent", infrastructureContent);

  const [toggle, setToggle] = useState(false);

  const labItem = infrastructureContent.items?.find(
    (item) => item.type == "laboratories"
  );
  const equipementItem = infrastructureContent.items?.find(
    (item) => item.type == "equipment"
  );
  const library = infrastructureContent.items?.find(
    (item) => item.type == "library"
  );

  const visibleFaculty = toggle
    ? equipementItem.content
    : equipementItem.content.slice(0, 6);
  return (
    <div className="rbt-dashboard-content bg-color-white " id="infrastructure">
      <div className="content">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h4
                className="rbt-title-style-3"
                dangerouslySetInnerHTML={{ __html: infrastructureContent.tab }}
              ></h4>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-lg-12">

             {labItem && (
            <div className="row g-5 mb--30">
             
                <h5
                  className=""
                  dangerouslySetInnerHTML={{ __html: labItem.title }}
                ></h5>
              
              <div className="col-lg-12 mt-0">
                <ul className="rbt-list-style-1">
                  {labItem.content.map((item, i) => (
                    <li key={i}>
                      <i className="feather-check"></i>
                      <span dangerouslySetInnerHTML={{ __html: item }}></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

            <div className="rbt-dashboard-table table-responsive">
                 <h5
                  className=""
                  dangerouslySetInnerHTML={{ __html: equipementItem.title }}
                ></h5>
              <table className="rbt-table table table-borderless">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name of the Equipment</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleFaculty.map((item, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <th>
                        <span>{item}</span>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div class="lab-container">
              <div class="lab-item">
                <img src="https://kahedu.edu.in/n/wp-content/uploads/2019/11/Eqiupments1-150x150.jpg" alt="" />
                <p>Visible Spectrometer – Top Science College in Coimbatore</p>
              </div>

              <div class="lab-item">
                <img src="https://kahedu.edu.in/n/wp-content/uploads/2019/11/Eqiupments1-150x150.jpg" alt="" />
                <p>
                  Liquid Chromatography – Best college for Science in Coimbatore
                </p>
              </div>

              <div class="lab-item">
                <img src="https://kahedu.edu.in/n/wp-content/uploads/2019/11/Eqiupments1-150x150.jpg" alt="" />
                <p>Gas Chromatography – Best Engineering college in India</p>
              </div>

              <div class="lab-item">
                <img src="https://kahedu.edu.in/n/wp-content/uploads/2019/11/Eqiupments1-150x150.jpg" alt="" />
                <p>Gas Chromatography – Best Engineering college in India</p>
              </div>

              <div class="lab-item">
                <img src="https://kahedu.edu.in/n/wp-content/uploads/2019/11/Eqiupments1-150x150.jpg" alt="" />
                <p>Gas Chromatography – Best Engineering college in India</p>
              </div>

              <div class="lab-item">
                <img src="https://kahedu.edu.in/n/wp-content/uploads/2019/11/Eqiupments1-150x150.jpg" alt="" />
                <p>Gas Chromatography – Best Engineering college in India</p>
              </div>
            </div>

            {equipementItem.content.length > 8 && (
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

export default Infrastructure;
