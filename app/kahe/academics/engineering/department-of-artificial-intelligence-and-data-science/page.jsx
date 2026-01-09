import DepartmentOfArtificialIntelligence from '@/components/00-Kahe/AcademicsComponents/Engineering/DepartmentOfArtificialIntelligence';
import AcademicsPage from '@/components/00-Kahe/DirectPageComponent/AcademicsPage';
import Homepage from '@/components/00-Kahe/DirectPageComponent/Homepage';
import { usePageData } from '@/utils/customHook';

export const metadata = {
  title: "Best Colleges in Coimbatore for Computer Science Engineering",
  description: "KAHE&#039;s CSE department offers programme like B Tech Cyber Security and Btech Artificial Intelligence and Data Science in Coimbatore, Tamilnadu. Join KAHE now!",
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
