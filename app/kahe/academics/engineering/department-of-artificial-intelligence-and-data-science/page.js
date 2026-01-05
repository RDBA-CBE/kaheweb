import DepartmentOfArtificialIntelligence from '@/components/00-Kahe/AcademicsComponents/Engineering/DepartmentOfArtificialIntelligence';
import AcademicsPage from '@/components/00-Kahe/DirectPageComponent/AcademicsPage';
import Homepage from '@/components/00-Kahe/DirectPageComponent/Homepage';
import { usePageData } from '@/utils/customHook';

export const metadata = {
  title: 'Histudy - Online Courses & Education NEXTJS14 Template',
  description: 'Online Courses & Education NEXTJS14 Template',
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
