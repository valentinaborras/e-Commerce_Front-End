import React from "react";
import { useState } from "react";
import ModalPlantCare from "./ModalPlantCare";
import image from "../../../assets/img/img-good-care-plants.png";
import "./PlantCare.css";

function PlantCare(){
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container-fluid plant-Care-Container mt-5 p-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="mt-5">
                <h6 className="fw-light">Tropical Paradise</h6>
                <h3>How to take Good Care of your Plants?</h3>
                <p className="fw-light mt-5">
                  Taking good care of plants involves providing the right
                  balance of sunlight, water, and nutrients while ensuring
                  proper drainage, regular pruning, and pest control as needed
                  to maintain their health and vitality.
                </p>
                <button className="btn btn-Read-More mt-5 btn-lg" onClick={handleShowModal}>
                  Read more
                </button>
                {showModal && <ModalPlantCare onClose={handleCloseModal} />}
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="rounded-Circle-Container">
                <img src={image} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantCare;
