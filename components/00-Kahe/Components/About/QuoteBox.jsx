import React from "react";
import { FiZap, FiSunrise, FiStar } from "react-icons/fi";

const QuoteBox = ({ data }) => {
  return (
    <section className="qm-section bg-lgreen">
      <div className="qm-container">

        {/* QUALITY POLICY */}
        <div className="qm-box qm-left">
          <h2 className="qm-title">{data.qualityPolicyTitle}</h2>
          <p className="qm-text">{data.qualityPolicyText}</p>
          {data.list &&  (
              <ul className="rbt-list-style-1">
                {data.list.map((v, i) => (
                  <li key={i}>
                    <i className="feather-check"></i>
                    <span
                      className="text-start"
                      dangerouslySetInnerHTML={{ __html: v }}
                    ></span>
                  </li>
                ))}
              </ul>
            )}
        </div>

        {/* MOTTO */}
        <div className="qm-box qm-right">
          <h2 className="qm-title">{data.mottoTitle}</h2>
          { data.mottContnet &&<p className="qm-text">{data.mottContnet}</p>}

          {data.motto && <div className="qm-motto-icons">
            {data.motto.map((item, index) => (
              <React.Fragment key={index}>
                <div className="qm-motto-item">
                  {item.icon === "zap" && <FiZap className="qm-motto-icon" />}
                  {item.icon === "sunrise" && <FiSunrise className="qm-motto-icon" />}
                  {item.icon === "star" && <FiStar className="qm-motto-icon" />}
                  <span>{item.label}</span>
                </div>

                {index !== data.motto.length - 1 && (
                  <div className="qm-divider">|</div>
                )}
              </React.Fragment>
            ))}
          </div>}
        </div>

      </div>
    </section>
  );
};

export default QuoteBox;
