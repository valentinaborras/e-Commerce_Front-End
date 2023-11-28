import React from "react";
import CartNavbar from "../partials/CartNavbar";
import ProductList from "../partials/cart/ProductList";
import TotalCart from "../partials/cart/TotalCart";
import ModalLogin from "./ModalLogin";
import { useState } from "react";
import "./Cart.css";

function Cart() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "unset";
  };
  return (
    <>
      <div className="cart">
        <div className="container  py-4">
          <h2 className="text-center">
            <span className="border-bottom border-black border-4">Cart</span>
          </h2>
          <div className="row mt-5 mb-5">
            <ProductList />
            <TotalCart handleOpenModal={handleOpenModal} />
            <ModalLogin
              openModal={openModal}
              handleCloseModal={handleCloseModal}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
