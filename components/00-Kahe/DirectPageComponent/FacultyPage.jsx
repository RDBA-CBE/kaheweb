"use client";
import { FirstLetterUp } from "@/utils/functions.utils";
import Image from "next/image";
import Link from "next/link";


const FacultyPage = ({ facultyContent }) => {
  return (
    <>
      <div className="section-wid row row--15 mt_dec--30 align-items-stretch events-pg" style={{ padding: "80px 0" }}>
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
    </>
  );
};

export default FacultyPage;
