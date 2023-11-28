import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Login from "../pages/Login";
import { useState } from "react";
import "./ModalLogin.css";

function ModalLogin({ openModal, handleCloseModal }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "60vh",
    bgcolor: "#f5f5f5",
    border: "2px solid #000",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    p: 4,
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{ marginBottom: "0px" }}
        >
          <div className="alert alert-danger rounded-0 d-flex flex-column align-items-center justify-content-center h-10">
            <h4 className="fs-5">Please login to proceed to checkout</h4>
            <p className="fs-6">Your cart will be waiting for you</p>
          </div>
        </Typography>
        <Login style={{ marginBottom: "20px" }} />
      </Box>
    </Modal>
  );
}

export default ModalLogin;
