import Image from "next/image";

const AboutOverview = ({ data }) => {
  return (
    <>
      <div className="rbt-splite-style section-bg1 mission">
        <div className="split-wrapper">
          {data && (
            <div className="row g-0 ">
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="thumbnail image-left-content h-100">
                  <Image
                    className="h-100"
                    src={data.src}
                    width={960}
                    height={650}
                    alt="split Images"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-12 d-flex align-items-center">
                <div className="split-inner">
                  {data.icon && (
                    <div className="shape">
                      <Image
                        src={data.icon}
                        width={96}
                        height={96}
                        alt="Shape Images"
                      />
                    </div>
                  )}
                  {data.title && <h4 className="decor-ti">{data.title}</h4>}
                  {data?.sub_title && (
                    <p
                      className="fw-bold fs-3"
                      dangerouslySetInnerHTML={{ __html: data?.sub_title }}
                    ></p>
                  )}
                  {data.content && (
                    <p
                      className="description sal-animate mb-1"
                      dangerouslySetInnerHTML={{ __html: data.content }}
                    ></p>
                  )}
                  {data?.links && data?.links.length > 0 && (
                    <ul className="split-list sal-animate">
                      {data.links.map((item, innerIndex) => (
                        <li className="d-flex py-0 my-0" key={innerIndex}>
                          <span className="fw-semibold">
                            {item.title}&nbsp;
                          </span>
                          <span>
                            <a href={item.url}>{item.content}</a>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {data.list && (
                    <ul className="split-list sal-animate">
                      {data.list.map((item, innerIndex) => (
                        <li className="d-flex" key={innerIndex}>
                          <span className="flex-1">-</span>
                          <span>&nbsp;{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {data?.btn && (
                    <div className="view-more-button mt--35 sal-animate">
                      <a className="rbt-moderbt-btn" href={data?.btnLink}>
                        <span className="moderbt-btn-text">{data?.btn}</span>
                        <i className="feather-arrow-right"></i>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutOverview;
