import React from "react";
import { Link } from "react-router-dom";
import animationImage from "../../assets/img/animation-atp-2.png";
import "./RotatingAnimation.css";
import { useState } from "react";
import { useEffect } from "react";

function RotatingAnimation() {
  const [classOfImg, setClassOfImg] = useState(
    "rotating-Circle  jello-horizontal "
  );

  useEffect(() => {
    setTimeout(function animationStart() {
      setClassOfImg(classOfImg + " " + " tracking-in-expand");
      setTimeout(function () {
        setClassOfImg(classOfImg + " " + "wobble-horizontal-top");
        setTimeout(function () {
          setClassOfImg(classOfImg + " " + "scale-down-center ");
          setTimeout(function () {
            setClassOfImg(classOfImg + " " + " jello-diagonal");
            setTimeout(function () {
              setClassOfImg(classOfImg + " " + " ");
              setTimeout(function animationStart() {
                setClassOfImg(classOfImg + " " + " ");
              }, 2000);
            }, 2000);
          }, 2000);
        }, 3000);
      }, 4000);
    }, 2500);
  }, []);
  return (
    <div className="position-Circle d-none d-md-block">
      <div className="circle ">
        <Link to="/aboutthisproject" className="text-decoration-none ">
          <div className="position-relative d-inline-block">
            <img
              src={animationImage}
              alt="Animation About This Project  "
              className={classOfImg}
            />
            <i
              class="fa-regular fa-hand-pointer fw-bold text-black position-absolute fs-1 heartbeat "
              style={{ top: "105px", left: "110px", translate: "{50% 50%}" }}
            ></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RotatingAnimation;
