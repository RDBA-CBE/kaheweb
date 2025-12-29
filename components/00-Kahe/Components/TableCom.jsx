import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";
import React from "react";

const TableCom = ({ data }) => {
  return (
    <div className="rbt-dashboard-content bg-color-white tab-in">
      <div className="content">
        {/* Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2
                className="decor-ti"
                dangerouslySetInnerHTML={{
                  __html: FirstLetterUp(data.title),
                }}
              />
            </div>
          </div>
        </div>

        {/* MULTIPLE TABLES */}
        <div className="row gy-5">
          <div className="col-lg-12">
            {data?.content?.map((table, tableIndex) => (
              <div
                key={tableIndex}
                className="rbt-dashboard-table table-responsive mb-4"
              >
                <table className="rbt-table table table-borderless">
                  {/* TABLE HEAD */}
                  <thead>
                    <tr>
                      {table?.head?.map((col) => (
                        <th key={col?.id}>{col?.label && col?.label}</th>
                      ))}
                    </tr>
                  </thead>

                  {/* TABLE BODY */}
                  <tbody>
                    {table.data.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {table.head.map((col) => {
                          const cell = row[col.id];

                          return (
                            <td key={col.id}>
                              {cell ? (
                                cell.url ? (
                                  <span>
                                    <Link
                                      href={cell.url}
                                      target={cell.target}
                                      className="d-flex justify-content-between align-items-center"
                                    >
                                      <span>{cell.text}</span>
                                      {cell.img_icon && (
                                        <img
                                          src={cell.img_icon}
                                          alt={cell.text}
                                          width={25}
                                          height={15}
                                        />
                                      )}
                                    </Link>
                                  </span>
                                ) : (
                                  <span>{cell.text}</span>
                                )
                              ) : (
                                "-"
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCom;

