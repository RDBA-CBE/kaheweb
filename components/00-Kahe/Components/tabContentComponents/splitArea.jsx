import Image from "next/image";
import Link from "next/link";
import React from "react";

const SplitArea = ({ data }) => {
  return (
    <div className="col-lg-12 py-5 split-area">
      
        <div className="modern-course-features-box h-100 bg-lgray" >
          
            <div className="inner" >
              <div className="thumbnail">
                <Image
                  src={data?.src}
                  width={604}
                  height={408}
                  alt="Image"
                />
              </div>
              <div className="content">
                {data?.item.map((data, index) => (
                <span key={index} className="rbt-badge-6 py-4 bg-lblue-1 text-white">
                  {data}
                </span>
                ))}
              
              </div>
            </div>
        
        </div>
      
    </div>
  );
};

export default SplitArea;
