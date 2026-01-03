"use client";

import RecognitionCards from "./RecognitionCards";
import LogoSlider from "./LogoSlider";
import StatsBar from "./StatsBar";
import "./recognitions.css";

export default function RecognitionsSection() {
  return (
    <section className="recognitions">
      <h2>RECOGNITIONS & APPROVALS/RANKINGS</h2>

      <RecognitionCards />

      <div className="know-more-wrap">
        <button className="know-more">KNOW MORE</button>
      </div>

      <LogoSlider />

      <StatsBar />
    </section>
  );
}
