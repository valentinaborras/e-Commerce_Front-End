import React from "react";
import { useState } from "react";
import "./TotalCart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ModalLogin from "../../pages/ModalLogin";

function TotalCart({ handleOpenModal }) {
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.login);

  const navigate = useNavigate();

  let subTotal = 0;
  cart.forEach((item) => {
    subTotal += item.price * item.count;
  });

  const handleProceedToCheckout = () => {
    if (isLoggedIn) {
      navigate("/checkout");
    } else {
      handleOpenModal();
    }
  };

  return (
    <>
      <div className="col-lg-1"></div>
      <div className="col-lg-3 mt-5 mt-lg-0">
        <div className="bg-light">
          <div className="title-Container-Div p-3">
            <h6 className="ms-1 fw-bold">Cart Totals</h6>
          </div>
          <div className="p-3">
            <div className="d-flex justify-content-between mt-md-3">
              <span className="fs-Custom">Subtotal</span>
              <span className="fs-5">US$ {subTotal}</span>
            </div>
            <div className="d-flex justify-content-between mt-md-4">
              <span className="fs-Custom">Shipping</span>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="freeShippingCheckbox"
                />
                <label
                  className="form-check-label"
                  htmlFor="freeShippingCheckbox"
                >
                  Free Shipping
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-md-4">
              <span className="fs-Custom">Total</span>
              <span className="fs-4 fw-bold">US$ {subTotal}</span>
            </div>
            <div className="d-flex justify-content-between mt-md-5">
              <button
                className="btn mt-1 btn-Checkout"
                onClick={handleProceedToCheckout}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalCart;
