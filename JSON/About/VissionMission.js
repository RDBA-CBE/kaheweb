import StudentsIcon from "@/public/images/Kahe/icons/StudentsIcon";
import BatchIcon from "@/public/images/Kahe/icons/BatchIcon";
import Honesty from "@/public/images/Kahe/icons/Honesty";
import Innovation from "@/public/images/Kahe/icons/Innovation";
import Responsible from "@/public/images/Kahe/icons/Responsible";

export const VissionMissiondata = {
  data: {
    bannerImg: "/images/Kahe/breadcrumb/banner-inner1.jpg",
    title: "Our Vision & Mission",
    bannerCon:
      "To be a leading institution in the field of education, providing quality education and training to students and professionals.",
    applyLink: "/",
  },

  vision: {
    title: "Vision",
    description:
      "To impart value based quality education, to undertake scientific, socially relevant research and instil creativity among the learners, to enable, enlighten and enrich them to serve and lead the society.",
    src: "/images/Kahe/Innerpages/vission.jpg",
    alt: "Vision Image",
  },

  missionData: [
    {
      icon: <StudentsIcon />,
      description:
        "Educating the learners to acquire latest knowledge and skills in their respective domain through e-platforms.",
    },
    {
      icon: <StudentsIcon />,
      description:
        "Undertaking research in socially relevant, scientific and technology oriented projects.",
    },
    {
      icon: <StudentsIcon />,
      description:
        "Empowering women, rural and marginalised sections of the society.",
    },
    {
      icon: <StudentsIcon />,
      description:
        "Imbibing culture of creativity and innovation among learners.",
    },
    {
      icon: <StudentsIcon />,
      description:
        "Making the learners to be self-reliant and moulding them as responsible citizens.",
    },
  ],

  values: [
    {
      title: "EXCELLENCE",
      color: "#fddada",
      icon: <BatchIcon width="60" height="60" />,
      text: "Institution’s commitment to excellence impels the stakeholder to consistently strive for exemplary outcomes from all the ventures of the Institution such as teaching, research, campus facilities and outreach activities.",
    },
    {
      title: "INTEGRITY",
      color: "#d2d3f9",
      icon: <Honesty width="60" height="60" />,
      text: "Ensuring honesty, fairness and ethical manners in all academic and allied activities.",
    },
    {
      title: "INCLUSIVENESS",
      color: "#f9efd2",
      icon: <Innovation width="60" height="60" />,
      text: "Nurturing an inclusive and learning environment that ensures openness, ideation and systematic approach towards excellence.",
    },
    {
      title: "RESPONSIBILITY",
      color: "#ddffef",
      icon: <Responsible width="60" height="60" />,
      text: "Committed to be responsible and accountable in all activities of the Institution.",
    },
    {
      title: "COLLABORATION",
      color: "#edf9d2",
      icon: <Honesty width="60" height="60" />,
      text: "Collaborating with other Universities, Industries, professional bodies and Society to realize excellence.",
    },
    {
      title: "INNOVATION",
      color: "#d5f3f9",
      icon: <Innovation width="60" height="60" />,
      text: "Encouraging and supporting development of ideas by fostering individual creativity and providing an environment with opportunities for growth.",
    },
    {
      title: "Sustainability",
      color: "#eddaf5",
      icon: <BatchIcon width="60" height="60" />,
      text: "Creating systems and procedures to upkeep environmental, economic and social sustainability.",
    },
  ],

  qualityMottoData: {
    qualityPolicyTitle: "QUALITY POLICY",
    qualityPolicyText:
      "To provide quality and excellence in all its spheres and services that exceeds the expectations of the stakeholders.",

    mottoTitle: "MOTTO",

    motto: [
      { label: "Enable", icon: "zap" },
      { label: "Enlighten", icon: "sunrise" },
      { label: "Enrich", icon: "star" },
    ],
  },
};
