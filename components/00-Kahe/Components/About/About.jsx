const About = ({ data }) => {
    console.log("data",data);
    
  return (
    <>
      <div className="rbt-about-area about-style-1 mt-5">
        <div className="container">
          {data && (
            <div className="row g-5 align-items-start">
              <div className="col-lg-6">
                <div className="content">
                  <h2
                    className="title mb--0"
                   
                  >
                    {data.title}
                  </h2>
                </div>
              </div>
              <div
                className="col-lg-6"
              
              >
                <p className="mb--40 mb_sm--20">{data.content}</p>
                {data.btn && <div className="readmore-btn">
                  <Link className="rbt-moderbt-btn" href={data.btnLink}>
                    <span className="moderbt-btn-text">
                      {data.btn}
                    </span>
                    <i className="feather-arrow-right"></i>
                  </Link>
                </div>}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
