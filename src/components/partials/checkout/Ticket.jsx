import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Ticket({ setPaymentMethod, handlePlaceOrder }) {
  const cart = useSelector((state) => state.cart);

  const BACK_IMG_URL = import.meta.env.VITE_STORAGE_URL;

  const navigate = useNavigate();

  const shipping = 0;

  let subTotal = 0;
  for (const item of cart) {
    subTotal += item.price * item.count;
  }

  let total = subTotal + shipping;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="container border border-dark">
      <h4 className="my-4 secondary-Font">Product</h4>
      <div className="mb-2" style={{ overflowY: "auto", maxHeight: "350px" }}>
        {cart.map((item) => (
          <div
            className="d-flex justify-content-between pb-3 border-bottom"
            key={item.id}
          >
            <div className="d-flex">
              <img
                src={BACK_IMG_URL + item.image}
                alt="Ruby Rubber Tree Image Avatar"
                id="avatarProduct"
              />
              <div className="ps-3 mt-2">
                <p className="product-Detail">{item.name}</p>
                <p className="product-Detail fw-bold">Quantity: {item.count}</p>
              </div>
            </div>
            <p className="me-2">US$ {item.price * item.count}</p>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between py-3 border-bottom">
        <p className="secondary-Font">Subtotal</p>
        <p>US$ {subTotal}</p>
      </div>
      <div className="d-flex justify-content-between py-3 border-bottom">
        <p className="secondary-Font">Shipping</p>
        <p>US$ {shipping}</p>
      </div>
      <div className="d-flex justify-content-between py-3 border-bottom">
        <p className="secondary-Font">Total</p>
        <p className="fs-5 fw-bolder" id="totalPrice">
          US$ {total}
        </p>
      </div>
      <div className="container border">
        <form action="">
          <ul className="ps-1 mt-3" id="paymentMethodsList">
            <li className="pb-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Mercado Pago"
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="" className="ps-2">
                {" "}
                Mercado Pago
                <i className="fa-regular fa-handshake ps-2"></i>
              </label>
            </li>
            <li className="pb-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="" className="ps-2">
                {" "}
                Credit Card
                <i className="fa-regular fa-credit-card ps-2"></i>
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="paymentMethod"
                value="PayPal"
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="" className="ps-2">
                {" "}
                PayPal
                <i className="fa-brands fa-cc-paypal ps-2"></i>
              </label>
            </li>
          </ul>
        </form>
      </div>
      <div className="d-grid gap-2 mt-4 mb-5">
        <Button
          variant=""
          className="rounded-0 border"
          id="place-Order-Btn"
          onClick={handlePlaceOrder}
          disabled={!selectedPaymentMethod}
        >
          Place Order
        </Button>
        <Button
          variant=""
          className="rounded-0 border btn-Continue-Shopping"
          onClick={() => navigate("/cart")}
        >
          Back to Cart
        </Button>
      </div>
    </div>
  );
}

export default Ticket;
