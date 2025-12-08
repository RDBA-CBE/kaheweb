import AcademicsPage from "@/components/00-Kahe/AcademicsPage";
import Homepage from "@/components/00-Kahe/Homepage";
import { usePageData } from "@/utils/customHook";

export const metadata = {
  title: "Histudy - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const HomePage = async () => {
  return (
    <>
      {/* <Homepage /> */}
      <AcademicsPage />;
    </>
  );
};

export default HomePage;
