import data from "../../../JSON/ACADEMIC/Arts/dean.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import ImageLink from "../Components/ImageLink";
import Breadcrumb from "../common-components/BreadCrumb";

export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description:
    "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};
const breadcrumbItems = [
 
  {
    label: "Dean - R&D and Industry Relations",
    href: ``,
  },
];

const RDDean = () => {
  const BoardOfTrustees = data?.RDDean;

  console.log("BoardOfTrustees", BoardOfTrustees);

  return (
    <>
      <InnerBanner data={BoardOfTrustees?.bannerCon} />
      <Breadcrumb items={breadcrumbItems} />
      {/* <AccordianSidebar subMenu={Administration}/> */}

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-12">
              <ImageLink data={BoardOfTrustees} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RDDean;
