"use client";
import { CustomHook } from "@/utils/customHook";
import { FirstLetterUp } from "@/utils/functions.utils";
import IconCard from "../Components/IconCard";

const AcademicsPage = () => {
  const vision = {
    title: "ACADEMICS",
    description:
      "Karpagam Academy of Higher Education was founded with the mission to impart value based and holistic education that enriches the knowledge and skills of students and empowering their lives by way of educating is what is truly believed at Karpagam.",
    src: "/images/Kahe/Innerpages/vission.jpg",
    alt: "Vision Image",
  };
  const merits = {
    title: "RECOGNITION",
    content: [
       {
        title: "Karpagam Academy of Higher Education is conferred with Deemed to be University status under Section 3 of UGC Act, 1956 in 2008.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title: "Member of Association of Indian Universities.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title: "Accredited with A+ Grade by NAAC in the Second cycle.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title:
          "India Rankings 2025: University (Rank-band: 101-150), by the NIRF, Ministry of Education, Government of India.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title:
          "NIRF for Innovation Ranking, our institution is ranked as Four-star rank by the Ministry of Education, Government of India.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title: "ISO 9001 -2015 Certified (Quality Management System).",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title: "ISO 14001- 2015 Certified (Environment Management System).",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title:
          "Arts, Science, Commerce, Performing Arts programmes approved by UGC.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title: "Architecture programmes approved by Council of Architecture.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title: "Pharmacy Programmes approved by Pharmacy Council of India.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title:
          "Engineering, Design, Planning, BCA, BBA, MCA & MBA approved by AICTE.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title: "DSIR recognized Research Institution (SIRO).",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title: "MHRD approved Institution Innovation Council (IIC).",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title: "CPCSEA -Government of India approved Animal House.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title:
          "Drug Testing Laboratory approved by the Drug Controller of Tamil Nadu.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title:
          "DST-FIST status to Department of Biotechnology & Electrical Sciences.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title:
          "NSS approved by Ministry of Youth Affairs, Government of India.",
        src: "/images/Kahe/Innerpages/group.png",
      },
      {
        title: "NCC approved by Ministry of Defence, Government of India.",
        src: "/images/Kahe/Innerpages/group.png",
      },
    ],
  };

  return (
    <>
      <section className="vsn-section section-wid ">
        <div className="vsn-container">
          <div className="vsn-right">
            <img src={vision.src} alt={vision.alt} className="vsn-image" />
          </div>

          <div className="vsn-left">
            <h2
              className="decor-ti"
              dangerouslySetInnerHTML={{ __html: FirstLetterUp(vision?.title) }}
            ></h2>
            <p
              className="vsn-desc"
              dangerouslySetInnerHTML={{ __html: vision.description }}
            ></p>
          </div>
        </div>
      </section>
      <section className="section-wid mb--50">
        <IconCard data={merits} />
      </section>
    </>
  );
};

export default AcademicsPage;
