// "use client";

import React from "react";

import Cart from "@/components/Header/Offcanvas/Cart";

import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import { getAllPostsMeta } from "@/mdx";
import HeroSlider from "@/components/01-Main-Demo/Home-Sections/HeroSlider";
import UniversityGallery from "@/components/01-Main-Demo/UniversityGallery/UniversityGallery";
import Recognition from "../Components/About/Recognition";
import RecognitionsSection from "@/components/01-Main-Demo/Recognitions/RecognitionsSection";
import AcademicPrograms from "@/components/01-Main-Demo/AcademicPrograms/AcademicPrograms";
import HomeHighlights from "@/components/01-Main-Demo/HomeHighlights/HomeHighlights";
import NewsEvents from "@/components/01-Main-Demo/NewsEvents/NewsEvents";
import KeyRecruiters from "@/components/01-Main-Demo/KeyRecruiters/KeyRecruiters";
import VirtualCampusTour from "@/components/01-Main-Demo/VirtualTour/VirtualTour";
import HomeFeaturesSection from "@/components/01-Main-Demo/HomeFeatures/HomeFeaturesSection";

const Homepage = async ({ getBlog }) => {
  const blog = await getAllPostsMeta();
  return (
    <main>
      <HeroSlider />
      <UniversityGallery />
      <RecognitionsSection/>
      <HomeHighlights />
      <AcademicPrograms />
      <HomeFeaturesSection />
      <NewsEvents />
      <KeyRecruiters />
      <VirtualCampusTour />
      {/* <MainDemo blogs={blog} />
      <Cart /> */}
    </main>
  );
};

export default Homepage;
