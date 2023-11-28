import React from "react";
import { useState } from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import PlantCss from "../partials/PlantCss";
function NotFound({ myBottom }) {
  const [flag, setFlag] = useState(false);
  setTimeout(function () {
    setFlag(true);
  }, 2000);
  return (
    flag && (
      <div className="not-Fount-Height border-black border-top border-bottom container   py-4">
        <div className="d-flex justify-content-center my-5 ">
          <div className="d-flex flex-column justify-content-center text-center">
            <h1 className="title intermitente">404</h1>
            <p className="subtitle">Oops! That page can't be found.</p>
            <p className="content">
              We're really sorry but we can't seem to find the page you were
              looking for.
            </p>

            <Link to="/" className="back-Btn ms-auto me-auto px-3 mb-4">
              Back the Homepage &#8594;
            </Link>
            <PlantCss myBottom={myBottom} />
          </div>
        </div>
      </div>
    )
  );
}

export default NotFound;
