import React from "react";
import "./PlantCss.css";
function PlantCss({ myBottom }) {
  return (
    <div className="position-relative plant-Animation-Father ">
      <div className="plant-animation" style={{ bottom: myBottom }}>
        <div className="plant plant-one">
          <div className="stem"></div>
          <div className="petals">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="plant plant-two">
          <div className="stem"></div>
          <div className="petals">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="plant plant-three">
          <div className="stem"></div>
          <div className="petals">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* <div class="pot">
        <span class="top"></span>
        <span class="shape">
          <div class="pattern">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </span>
        <span class="base"></span>
      </div>
      <div class="shadow"></div> */}
      </div>
    </div>
  );
};

export default PlantCss;
