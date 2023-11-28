import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./CartCanvas.css";
import FooterCartCanvas from "./FooterCartCanvas";
import MainCartCanvas from "./MainCartCanvas";
import { useSelector } from "react-redux";
import ModalLogin from "../../pages/ModalLogin";

function CartCanvas({ handleOpenModal }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    cart.forEach((item) => {
      items += item.qty;
    });
    setTotalItems(items);
  }, [cart]);

  return (
    <>
      <Button
        className="bg-black border-0 text-white fs-4 btn-Cart-Canvas btn btn-dark"
        onClick={handleShow}
      >
        <i className="bi bi-cart"></i>
        <span className="position-absolute  top-0 start-75 translate-middle badge rounded-pill bg-danger badge-Cart-Canvas">
          {cart.reduce((total, item) => total + item.count, 0)}
          <span className="visually-hidden">unread messages</span>
        </span>
      </Button>

      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header className="bg-body-secondary" closeButton>
          <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <div className="main-Canvas">
            <MainCartCanvas handleClose={handleClose} />
            <FooterCartCanvas
              handleClose={handleClose}
              handleOpenModal={handleOpenModal}
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartCanvas;
