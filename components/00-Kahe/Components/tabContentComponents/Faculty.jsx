import { FirstLetterUp } from "@/utils/functions.utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Vision from "../About/Vission";

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
      <section className="">
        <Vision vision={facultyContent?.basic} data={facultyContent} />
      </section>
    </div>
  );
};

export default Faculty;
