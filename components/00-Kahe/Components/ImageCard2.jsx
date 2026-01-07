import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ImageCard2 = ({ data }) => {
  console.log("data", data);
  const router = useRouter();

  const handleClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <>
      <div className="row g-5 mb-5">
        {data &&
          data.map((item, innerIndex) => {
            return (
              <div
                onClick={() => handleClick(item?.url)}
                className={`${
                  item?.clsName
                    ? item?.clsName
                    : "col-lg-3 col-md-6 col-sm-6 col-12"
                }${item?.url ? 'cursor-pointer' : ''}`}
                key={innerIndex}
                style={{ cursor: item?.url ? 'pointer' : 'default' }}
              >
                <div className="rbt-cat-box rbt-cat-box-1 list-style">
                  <div className="inner">
                    <div className="thumbnail">
                      <Image
                        src={item.src}
                        width={300}
                        height={300}
                        priority
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <p className="">{item.content}</p>
                      {item.btnText && (
                        <div className="read-more-btn">
                          <span className="rbt-btn-link">
                            {item.btnText}
                            <i className="feather-arrow-right"></i>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ImageCard2;
