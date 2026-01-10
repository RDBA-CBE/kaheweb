import AcademinArtsDean from "@/components/00-Kahe/DirectPageComponent/AcademinArtsDean";
import ForeignLanguages from "@/components/00-Kahe/OfficeOfInternationalCompoenets/ForeignLanguages";
import StudentsExProCom from "@/components/00-Kahe/OfficeOfInternationalCompoenets/StudentsExProCom";
import Testimonials from "@/components/00-Kahe/OfficeOfInternationalCompoenets/Testimonials";

export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};
const page = () => {
return (
    <>
      <AcademinArtsDean architecture={true}/>
    </>
  );
};

export default page;
