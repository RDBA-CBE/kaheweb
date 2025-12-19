import React from "react";

const Recognition = ({ data }) => {
  return (
    <section className="hospital-overview py-5">
      <div className="">
        <div className="row align-items-start">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12 mb-4">
            <h2 className="decor-ti">{data?.title}</h2>
            <h3 className="main-ti">{data?.subTitle}</h3>

            <div className="d-flex align-items-center gap-5">
              <img src="/images/Kahe/Innerpages/naac.png" alt=""  width={200} />
              <p className="text-black">
                {data?.content1?.item1}
              </p>
            </div>

            <div className="item2">{data?.content1?.item2}</div>
          </div>

          {/* RIGHT STATS */}
          <div className="col-lg-6 col-md-12">
            <div className="row g-4">
              <div className="col-md-4"></div>
              {data?.content2?.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="overview-stat">
                    <span className="stat-icon">
                      <img src={item.src} alt={item?.title} width={50} />
                    </span>
                    <h4 className="main-sub-ti">{item?.title}</h4>
                    {/* <p>{item?.caption}</p> */}
                    <p> {item?.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
