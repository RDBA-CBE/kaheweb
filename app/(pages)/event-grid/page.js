import BackToTop from "@/app/backToTop";
import EventGridPage from "./(event-grid)";

export const metadata = {
  title: "Event Grid - Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
  description: "Karpagam Academy of Higher Education (KAHE) offers a wide range of UG, PG &amp; research programs in Engineering, Arts &amp; Science, Management, Architecture, and Pharmacy.",
};

const EventGridLayout = () => {
  return (
    <>
      <EventGridPage />

      <BackToTop />
    </>
  );
};

export default EventGridLayout;
