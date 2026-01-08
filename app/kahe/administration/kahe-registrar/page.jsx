import Registrar from "@/components/00-Kahe/AdministrationComponents.jsx/Registrar";

export const metadata = {
  title: "Registrar | List of Engineering Colleges in Coimbatore",
  description: "KAHE offers excellence in engineering education with experienced faculty &amp; top infrastructure. Choose KAHE from the list of engineering colleges in Coimbatore.",
};

const page = async () => {
  return (
    <>
      
      <Registrar />;
    </>
  );
};

export default page;
