import { Administration } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Administration/BoardOfTrustees.json";
import InnerBanner from "@/components/00-Kahe/common-components/InnerBanner";
import Sidebar from "../common-components/Sidebar";
import ImageLink from "../Components/ImageLink";
import AccordianSidebar from "../common-components/AccordianSidebar";
import Breadcrumb from "../common-components/BreadCrumb";


export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};


const Registrar = () => {
    const BoardOfTrustees = data?.registrar;

    console.log("BoardOfTrustees", BoardOfTrustees);

    const breadcrumbItems = [
    {
      label: "Administration",
      href: `/administration/`,
    },

    

    { label: "Registrar" },
  ];
    

  return (
    <>
      <InnerBanner data={BoardOfTrustees?.bannerCon} />
      {/* <AccordianSidebar subMenu={Administration}/> */}

      <Breadcrumb items={breadcrumbItems} />

      <main className="section-wid d-flex section-bg1 ">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">

              <ImageLink data={BoardOfTrustees}/>
              
            </div>

            <div className="col-lg-3 px-0 d-none d-lg-block sidebar-pg">
              <div className="course-sidebar sticky-top">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar subMenu={Administration} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Registrar
