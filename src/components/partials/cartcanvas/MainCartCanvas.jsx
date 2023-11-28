import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { addItem, subItem, removeItem } from "../../redux/cartSlice";
import MyInput from "../MyInput";
import { Link } from "react-router-dom";

function MainCartCanvas({ handleClose }) {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const BACK_IMG_URL = import.meta.env.VITE_STORAGE_URL;

  const handleAddBtn = (item) => {
    dispatch(addItem(item));
  };

  const handleSubBtn = (item) => {
    dispatch(subItem(item));
  };

  const handleDelItem = (item) => {
    dispatch(removeItem(item));
  };
  return cart.length > 0 ? (
    <div
      className="flex-grow-1 p-4"
      style={{ overflowY: "auto", maxHeight: "700px" }}
    >
      <div className="container">
        {cart.map((item) => (
          <div className="row mt-3" key={item.id}>
            <div className="col-4 ">
              <img
                src={BACK_IMG_URL + item.image}
                alt="Product Image"
                className="img-fluid"
                id="productImage"
              ></img>
            </div>

            <div className="col-8 p-3">
              <div className="d-flex flex-column">
                <h5 className="my-Size">{item.name}</h5>
                <div className="d-flex">
                  <ButtonGroup className="my-Size">
                    <Button
                      variant=""
                      className="rounded-0 fw-bold py-0 px-2"
                      id="quantityBtn"
                      onClick={() => handleSubBtn(item)}
                    >
                      -
                    </Button>
                    <label htmlFor=""></label>
                    <MyInput count={item.count} id={item.id} />
                    <Button
                      variant=""
                      className="rounded-0 my-Size fw-bold py-0 px-2"
                      id="quantityBtn"
                      onClick={() => handleAddBtn(item)}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                  <div className="d-flex alig-items-center">
                    <p className="fw-bolder m-0 ms-2 my-Size pt-1">
                      US$ {item.price * item.count}
                    </p>
                  </div>
                </div>
                <button
                  className="btn border-0 rounded-0 border-bottom border-black my-Size me-auto p-0 mt-2"
                  onClick={() => handleDelItem(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className=" flex-grow-1 p-4">
      <div className="container">
        <p>Your cart is empty!</p>
        <Link to="/products" onClick={handleClose}>
          Go get some products!
        </Link>
      </div>
    </div>
  );
}

export default MainCartCanvas;
