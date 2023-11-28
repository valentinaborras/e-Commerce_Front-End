import React, { useEffect } from "react";
import CartNavbar from "../partials/CartNavbar";
import "./OrderDetails.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeOrders } from "../redux/orderSlice";
import { cleanCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";

function OrderTraking() {
  const [flagSpinner, setFlagSpinner] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const order = useSelector((state) => state.order);

  const IMG_URL = import.meta.env.VITE_STORAGE_URL;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const today = new Date();

  let total = 0;
  order[0].cart.forEach((item) => {
    total += item.price * item.count;
  });

  const handleGoHome = () => {
    dispatch(removeOrders());
    dispatch(cleanCart());
    navigate("/");
  };

  const handleLinkOrders = () => {
    dispatch(removeOrders());
    dispatch(cleanCart());
    navigate(`/customers/customerOrders/${order[0].customerId}`);
  };
  setTimeout(function () {
    setFlagSpinner(false);
  }, 3000);
  return flagSpinner ? (
    <div
      className="d-flex w-100 justify-content-center align-items-center flex-column"
      style={{ height: "80vh" }}
    >
      <h2>We're processing your order...</h2>
      <div>
        <i class="fa-solid fa-sack-dollar  fs-3 flicker text-warning me-4"></i>
        <Spinner animation="border" variant="warning" />

        <i class="fa-solid fa-truck-fast fs-3 wobble-horizontal-top2 text-warning ms-4"></i>
      </div>
    </div>
  ) : (
    <>
      <div className="order-Details-Page">
        <div className="container d-flex justify-content-center align-items-center flex-column flex-grow-1">
          <div className="row">
            <div className="col-12 text-center">
              <h1> Great!</h1>
              <h2>We are now working on your order</h2>
              <img
                src={`${IMG_URL}order-placed.png`}
                alt="order placed img"
                className="order-Placed-Img"
              />
            </div>
          </div>
          <h2 className="text-center mt-4">
            <span className="border-bottom border-black border-4">
              Order Details
            </span>
          </h2>
          <div className="justify-content-center align-items-center order-Details-Table mt-5">
            <div className="row text-center justify-content-around">
              <div className="col-6 col-md-2 mb-5 ">
                Order number: <strong>{order[0].id}</strong>
              </div>
              <div className="col-6 col-md-2 mb-5 ">
                Date: <strong>{today.toDateString()}</strong>
              </div>
              <div className="col-6 col-md-2 mb-5 ">
                Total: <strong>US$ {total}</strong>
              </div>
              <div className="col-6 col-md-2 mb-5 ">
                Payment method: <strong>{order[0].payment}</strong>
              </div>
              <div className="col-6 col-md-2 mb-5">
                Status: <strong>Pending</strong>
              </div>
            </div>
            <h4 className="mb-4">Order details</h4>
            <table className="table mb-4">
              <thead>
                <tr>
                  <th scope="col border border-end-0">Product</th>
                  <th scope="col border border-0">Total</th>
                </tr>
              </thead>
              <tbody className="table-bordered">
                {order[0].cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span>
                        {item.name} <strong>x{item.count}</strong>
                      </span>
                    </td>
                    <td>
                      <span>US$ {item.price * item.count}</span>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <strong>Subtotal:</strong>
                  </td>
                  <td>
                    <span>US$ {total}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping:</strong>
                  </td>
                  <td>
                    <span>Free</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Payment method:</strong>
                  </td>
                  <td>
                    <span>{order[0].payment}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Total:</strong>
                  </td>
                  <td>
                    <span>US$ {total}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-dark mb-5 rounded-0"
                onClick={handleGoHome}
              >
                Back to Home
              </button>
              <button
                className="btn btn-dark mb-5 rounded-0"
                onClick={handleLinkOrders}
              >
                See your orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderTraking;
