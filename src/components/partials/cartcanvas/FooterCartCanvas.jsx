import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function FooterCartCanvas({ handleClose, handleOpenModal }) {
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.login);

  const navigate = useNavigate();

  const handleProceedToCheckoutCanva = () => {
    if (isLoggedIn) {
      handleClose();
      navigate("/checkout");
      window.scrollTo(0, 0);
    } else {
      handleClose();
      toast.error("You must be logged in to place an order.");
    }
  };

  let subTotal = 0;
  cart.forEach((item) => {
    subTotal += item.price * item.count;
  });

  return (
    <div>
      <div className="p-4 shadow-Footer-Canvas">
        <div className="d-flex ">
          <p>SubTotal: </p> <p className="ms-auto">US$ {subTotal}</p>
        </div>
        <button
          onClick={() => {
            handleProceedToCheckoutCanva();
          }}
          className="btn w-100 rounded-0  bg-black text-white"
        >
          Check Out
        </button>
        <Link
          to="/cart"
          onClick={() => {
            handleClose();
            window.scrollTo(0, 0);
          }}
          className="btn w-100 rounded-0  mt-2 bg-dark-subtle"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
}

export default FooterCartCanvas;
