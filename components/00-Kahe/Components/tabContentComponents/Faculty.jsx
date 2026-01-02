import { FirstLetterUp } from "@/utils/functions.utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Faculty = ({ facultyContent }) => {
  const [toggle, setToggle] = useState(false);

  return (
    // <div className="rbt-dashboard-content bg-color-white">
    //   <div className="content">
    //     <div className="row">
    //       <div className="col-lg-12">
    //         <div className="section-title">
    //           <h2
    //             className="decor-ti "
    //             dangerouslySetInnerHTML={{ __html: FirstLetterUp(facultyContent.tab) }}
    //           ></h2>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row gy-5">
    //       <div className="col-lg-12">
    //         <div className="rbt-dashboard-table table-responsive">
    //           <table className="rbt-table table table-borderless">
    //             <thead>
    //               <tr>
    //                 <th>Name</th>
    //                 <th>Qualification</th>
    //                 <th>Designation</th>
    //                 <th>Email ID</th>
    //                 <th>Profile</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {facultyContent.faculty.map((item, i) => (
    //                 <tr key={i}>
    //                   <th><span>{item.name}</span></th>
    //                   <td>{item.qualification}</td>
    //                   <td>{item.designation}</td>
    //                   <td>{item.email}</td>
    //                   <td className="px-2">
    //                     {item.profile && <span className="button-td">
    //                       <Link href={item.profile} target="_blank">
    //                       Click here
    //                     </Link>
    //                     </span>}

    //                   </td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="row row--15 mt_dec--30 align-items-stretch">
      <div className="section-title">
        <h2
          className="decor-ti "
          dangerouslySetInnerHTML={{
            __html: FirstLetterUp(facultyContent.tab),
          }}
        ></h2>
      </div>
      {facultyContent?.faculty?.map((data, index) => (
        <div className="col-lg-3 col-md-3 col-12 mt--30 d-flex" key={index}>
          <div className="rbt-team team-style-default style-three rbt-hover h-100 w-100">
            <div className="inner p-0 h-100 d-flex flex-column">
              <div className="thumbnail">
                <Image
                  src={data.src || "/images/team/team-11.png"}
                  width={415}
                  height={555}
                  priority
                  alt={data.name}
                />
              </div>

              <div className="content p-3 py-5 ">
                <p className="main-sub-ti fw-semibold mb-2">{data.name}</p>

                {data.designation && <p>{data.designation}</p>}

                {data.qualification && (
                  <span className="team-form">
                    <img
                      src={data?.iconSrc || "/images/Kahe/Innerpages/education.png"}
                      alt="icon"
                      width={30}
                      height={30}
                    />
                    <span className="location ms-2">{data.qualification}</span>
                  </span>
                )}

                {data.email && (
                  <span className="team-form ">
                    <i className="feather-mail me-3"></i>
                    <span className="location">{data.email}</span>
                  </span>
                )}

                {data.profile  && (
                  <div className="read-more-btn mt-auto">
                    <Link href={data?.profile} target={data?.target}>
                      <span className="rbt-btn-link">
                        {data?.profileText}{" "}
                        <i className="feather-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faculty;
