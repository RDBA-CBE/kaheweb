import DepartmentOfArtificialIntelligence from '@/components/00-Kahe/AcademicsComponents/Engineering/DepartmentOfArtificialIntelligence';
import AcademicsPage from '@/components/00-Kahe/DirectPageComponent/AcademicsPage';
import Homepage from '@/components/00-Kahe/DirectPageComponent/Homepage';
import { usePageData } from '@/utils/customHook';

export const metadata = {
  title: "Karpagam Academy of Higher Education - Deemed University",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const HomePage = async () => {
  return (
    <>
      {/* <Homepage /> */}
      <DepartmentOfArtificialIntelligence />;
    </>
  );
};

export default HomePage;
