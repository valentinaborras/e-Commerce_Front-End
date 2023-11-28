import React from "react";
import "./NoConnection.css";
function NotConnection() {
  return (
    <div className="container p-0">
      <div className="d-flex justify-content-center align-items-center flex-column  bg-Marco ">
        <p>
          <i className="fa-solid fa-triangle-exclamation p-2 fs-3 text-warning intermitente"></i>
          Oops...
          <i className="fa-solid fa-plant-wilt fs-3 ms-2"></i>
        </p>
        <p>An error occurs. </p>
        <p className="sub-Title">Try again later...</p>
      </div>
    </div>
  );
}

export default NotConnection;
