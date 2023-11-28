import React from "react";
import WhatIsSeedling from "../partials/about/WhatIsSeedling";
import TecAndTools from "../partials/about/TecAndTools";
import "./About.css";
import OurTeam from "../partials/about/OurTeam";
import AdminDashboard from "../partials/about/AdminDashboard";
import Footer from "../partials/Footer";

function AboutThisPr() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="snap-Scroll">
        <div className="slider-Scroll">
          <WhatIsSeedling />
        </div>
        <div className="slider-Scroll">
          <TecAndTools />
        </div>
        <div className="slider-Scroll">
          <AdminDashboard />
        </div>
        <div className="slider-Scroll">
          <OurTeam />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AboutThisPr;
