import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";
import React, { useState } from "react";

const TableCom = ({ data }) => {
  const tablehead = data?.content?.head || [];
  const tablebody = data?.content?.data || [];

  return (
    <div className="rbt-dashboard-content bg-color-white tab-in">
      <div className="content">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2
                className="decor-ti "
                dangerouslySetInnerHTML={{ __html: FirstLetterUp(data.title) }}
              ></h2>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-lg-12">
            <div className="rbt-dashboard-table table-responsive">
              <table className="rbt-table table table-borderless">
                <thead>
                  <tr>
                    {tablehead.map((item) => (
                      <th key={item.id}>{item.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tablebody.map((item) => (
                    <tr key={item.id}>
                      {tablehead.map((col) => (
                        <td key={col.id}>
                          {item[col.id] ? (
                            item[col.id].url ? (
                              <Link href={item[col.id].url}>
                                {item[col.id].text}
                              </Link>
                            ) : (
                              <span>{item[col.id].text}</span>
                            )
                          ) : (
                            "-"
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCom;
