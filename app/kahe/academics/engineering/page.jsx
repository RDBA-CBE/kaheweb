import AcademinArtsDean from "@/components/00-Kahe/DirectPageComponent/AcademinArtsDean";
import ForeignLanguages from "@/components/00-Kahe/OfficeOfInternationalCompoenets/ForeignLanguages";
import StudentsExProCom from "@/components/00-Kahe/OfficeOfInternationalCompoenets/StudentsExProCom";
import Testimonials from "@/components/00-Kahe/OfficeOfInternationalCompoenets/Testimonials";

export const metadata = {
  title: "Engineering | Top 10 Engineering Colleges in Coimbatore",
  description: "KAHE is one of the top 10 engineering colleges in Coimbatore, offering UG, PG, and Ph.D. programs across a wide range of disciplines.",
};
const page = () => {
return (
    <>
      <AcademinArtsDean engineering={true}/>
    </>
  );
};

export default page;
