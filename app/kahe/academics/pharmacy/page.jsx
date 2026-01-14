import AcademinArtsDean from "@/components/00-Kahe/DirectPageComponent/AcademinArtsDean";


export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};
const page = () => {
return (
    <>
      <AcademinArtsDean pharmacy={true}/>
    </>
  );
};

export default page;
