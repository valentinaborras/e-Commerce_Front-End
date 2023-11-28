import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Favorites from "../partials/home/Favorites";
import Categories from "../partials/home/Categories";
import PlantCare from "../partials/home/PlantCare";
import Carousel from "../partials/home/Carousel";
import Carousel_home from "../partials/home/Carousel";
import IconIdeas from "../partials/home/IconsIdeas";
import { useSelector, useDispatch } from "react-redux";
import { hideWelcome } from "../redux/welcomeSlice";

import OrderTracking from "./OrderDetails";
import { Modal, Button } from "react-bootstrap";

function Home() {
  const show = useSelector((state) => state.welcome);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(hideWelcome());
  };

  const BACK_URL = import.meta.env.VITE_BACK_URL;

  const handleReset = async () => {
    dispatch(hideWelcome());
    toast.success("Database is being restored", { icon: "🔄" });
    const response = await axios({
      method: "GET",
      url: BACK_URL + "resetdatabase",
    });
    if (response) toast("Database has been restored", { icon: "👌" });
  };

  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="d-flex flex-column">
        <Carousel_home />
        <Categories />
        <PlantCare />
        <Favorites />
        <IconIdeas />
      </div>

      {/* Modal to reset database */}
      <Modal show={show} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Welcome to <span className="fw-bold">Seedling</span>!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>For a better experience you may want to reset database.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success rounded-0" onClick={handleReset}>
            Reset Database
          </Button>
          <Button variant="secondary rounded-0" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
