import React from "react";
import "./IconIdeas.css";
const IconsIdeas = () => {
  return (
    <div className="container">
      <div className="row pt-5 border-black border-top mb-5">
        <div className="col-12 col-md-4 mt-3">
          <div className="my-Card">
            <i className="fa-regular fa-calendar-days icon-Card"></i>
            <h4 className="title-Card">Flexible</h4>
            <p className="p-Card">
              Choose your delivery date to accommodate your schedule. Our
              standard shipping time is two – five days with overnight shipping
              options.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-3">
          <div className="my-Card">
            <i className="fa-solid fa-leaf icon-Card"></i>
            <h4 className="title-Card">Freshly Picked</h4>
            <p className="p-Card">
              Plants will arrive direct from our greenhouse, fresh and ready to
              thrive in their new home. Plants delivery is fast & easy with
              Demia.com.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-3">
          <div className="my-Card">
            <i className="fa-solid fa-earth-africa icon-Card"></i>
            <h4 className="title-Card">Rooted in Happy</h4>
            <p className="p-Card">
              30 day satisfaction guaranteed plus helpful plant care cards
              included with each plant to help keep it happy and growing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsIdeas;
