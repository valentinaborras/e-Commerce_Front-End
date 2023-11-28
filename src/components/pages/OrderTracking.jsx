import React from "react";
import CartNavbar from "../partials/CartNavbar";
import "./OrderTracking.css";

function OrderDetails() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center flex-column py-4">
        <h2 className="text-center Title">
          <span className="border-bottom border-black border-4">
            Order List
          </span>
        </h2>
        <div className="order-Details d-flex flex-column justify-content-center align-items-center">
          <p className="mt-4">
            To track your order please enter your Order ID in the box below and
            press the "Track" button. This was given to you on your receipt and
            in the confirmation email you should have received.
          </p>
          <form action="" className="w-100 border-0 mb-5 ">
            <label className="p-Size fw-bold mt-3" htmlFor="order">
              Order Id
            </label>
            <input
              id="order"
              name="order"
              type="text"
              placeholder=""
              // value={password}
              // onChange={(e) => setOrder(e.target.value)}
              className="form-control rounded-0 my-Size"
            />
            <label className="p-Size fw-bold mt-3" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder=""
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="form-control rounded-0 pSize"
            />
            <button className="my-Btn bg-black text-white text-center p-2 w-100 my-3">
              Track
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
