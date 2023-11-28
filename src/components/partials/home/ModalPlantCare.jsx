import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ModalPlantCare.css";

function ModalPlantCare({ onClose }) {
  return (
    <Modal show={true} onHide={onClose} className="my-custom-modal">
      <Modal.Header closeButton className="custom-Modal">
        <Modal.Title className="fw-bolder mt-3 ms-3">
          Essential Tips for Plant Lovers
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-Modal">
        <p>
          Caring for your plants is a delightful journey that rewards you with a
          greener, more vibrant space. To ensure your plants thrive, remember
          these essential tips:
        </p>
        <ul className="list-unstyled">
          <li className="modal-Care-List text-decoration-none">
            <i className="fa-solid fa-leaf me-2"></i>
            <span className="fw-bold">Right Plant, Right Place:</span> Choose
            plants that match your space and lighting conditions.
          </li>
          <li className="modal-Care-List mt-2">
            <i className="fa-solid fa-leaf me-2"></i>
            <span className="fw-bold">Light Matters:</span> Provide the right
            amount of light based on each plant's preferences.
          </li>
          <li className="modal-Care-List mt-2">
            <i className="fa-solid fa-leaf me-2"></i>
            <span className="fw-bold">Water Wisely:</span> Avoid overwatering;
            let the top soil dry before watering again.
          </li>
          <li className="modal-Care-List mt-2">
            <i className="fa-solid fa-leaf me-2"></i>
            <span className="fw-bold">Fertilize Regularly:</span> Feed your
            plants during the growing season with suitable fertilizer.
          </li>
          <li className="modal-Care-List mt-2">
            <i className="fa-solid fa-leaf me-2"></i>
            <span className="fw-bold">Pruning and Maintenance: </span> Regularly
            trim dead leaves and spent flowers to encourage new growth.
          </li>
          <li className="modal-Care-List mt-2">
            <i className="fa-solid fa-leaf me-2"></i>
            <span className="fw-bold"> Pest Control:</span> Keep an eye out for
            pests and act promptly to protect your plants.
          </li>
          <li className="modal-Care-List mt-2">
            <i className="fa-solid fa-leaf me-2"></i>
            <span className="fw-bold"> Love and Attention:</span> Lastly, give
            your plants love and attention to create a thriving indoor garden.
          </li>
        </ul>
        <p>
          Explore our plant collection at{" "}
          <Link
            to="https://seedling-shop.vercel.app/products"
            className="text-decoration-none text-dark"
          >
            <span className="fw-bold">Seedling</span>
          </Link>{" "}
          and create your green haven today!
        </p>
      </Modal.Body>
      <Modal.Footer className="custom-Modal">
        <Button variant="secondary mt-2 me-3 mb-2" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPlantCare;
