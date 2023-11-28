import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./ProductList.css";
import { useSelector } from "react-redux";
import MyInput from "../MyInput";
import { useDispatch } from "react-redux";
import { addItem, subItem } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

function ProductList() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleAddBtn = (item) => {
    dispatch(addItem(item));
  };

  const handleSubBtn = (item) => {
    dispatch(subItem(item));
  };

  const URL_IMG = import.meta.env.VITE_STORAGE_URL;

  return (
    <>
      <div className="col-lg-8">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="align-middle">
                  <div className="d-flex align-items-center">
                    <img
                      src={URL_IMG + item.image}
                      alt=""
                      className="img-fluid me-3"
                      style={{ maxWidth: "100px" }}
                    />
                    <span className="fw-light">{item.name}</span>
                  </div>
                </td>
                <td className="align-middle">US$ {item.price}</td>
                <td className="align-middle">
                  <div className="d-flex justify-content-start">
                    <ButtonGroup size="sm">
                      <Button
                        variant=""
                        className="rounded-0"
                        id="quantityBtn"
                        onClick={() => handleSubBtn(item)}
                      >
                        -
                      </Button>
                      <label htmlFor=""></label>
                      <MyInput count={item.count} id={item.id} />
                      <Button
                        variant=""
                        className="rounded-0"
                        id="quantityBtn"
                        onClick={() => handleAddBtn(item)}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </div>
                </td>
                <td className="align-middle">US$ {item.price * item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-end align-items-center">
          <Link
            className="btn btn-Continue-Shopping btn-sm px-4 py-2"
            to="/products"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductList;
