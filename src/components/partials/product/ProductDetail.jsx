import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addItem, subItem, removeItem } from "../../redux/cartSlice";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import soldOut from "../../../../public/soldOut.png";
import trendingLogo from "../../../../public/star.png";

function ProductDetail({ product, category, handleOpenModal }) {
  const IMG_URL = import.meta.env.VITE_STORAGE_URL;
  const BACK_URL = import.meta.env.VITE_BACK_URL;

  const isLoggedIn = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [items, setItems] = useState(1);

  const notify = (items) => {
    toast.success(`(${items}) Product(s) added to the cart!`);
  };

  const handleSubBtn = () => {
    if (items > 1) {
      setItems(items - 1);
    }
  };

  const handleAddBtn = () => {
    setItems(items + 1);
  };

  const handleAddToCart = async () => {
    product.count = items;
    dispatch(addItem(product));
    notify(items);
    setItems(1);
  };

  const handleBuyNow = async () => {
    if (!isLoggedIn) {
      handleOpenModal();
      return;
    }
    product.count = items;
    dispatch(addItem(product));
    notify(items);
    setItems(1);
    navigate("/checkout");
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="position-relative">
              <img
                src={IMG_URL + product.image}
                alt="Product Image"
                className="img-fluid"
                id="productImage"
              ></img>
              {product.stock < 1 && (
                <img
                  src={soldOut}
                  alt="Sold Out Product Tag"
                  className="img-fluid position-absolute"
                  style={{ top: "5%", left: "5%", width: "120px" }}
                />
              )}
              {product.trending === true && (
                <img
                  src={trendingLogo}
                  alt="Trending Product Tag"
                  className="img-fluid position-absolute"
                  style={{ top: "5%", right: "5%", width: "10%" }}
                />
              )}
            </div>
          </div>
          <div className="col-12 col-md-6 ps-5">
            <h1>{product.name}</h1>

            <p className="fw-bolder mb-5 py-3 border-bottom price">
              US$ {product.price}{" "}
            </p>
            <div className="d-flex">
              <ButtonGroup>
                <Button
                  variant=""
                  className="rounded-0 quantity-Btn"
                  onClick={handleSubBtn}
                >
                  -
                </Button>
                <label htmlFor=""></label>
                <input
                  type="text"
                  inputMode="numeric"
                  className="text-center quantity-Btn"
                  size="4"
                  value={items}
                  readOnly
                />
                <Button
                  variant=""
                  className="rounded-0 quantity-Btn"
                  onClick={handleAddBtn}
                >
                  +
                </Button>
              </ButtonGroup>

              <Button
                variant=""
                className="rounded-0 ms-2 px-4 color-Secondary border-bottom"
                onClick={() => handleAddToCart()}
              >
                Add to cart
              </Button>
            </div>
            <div className="mt-3 border-bottom pt-3">
              <Button
                variant=""
                className="text-white rounded-0 color-Primary border-0 px-5 mb-5"
                onClick={handleBuyNow}
              >
                Buy now
              </Button>
            </div>
            <div className="mt-5 mb-4 py-4 d-flex justify-content-center pay-Methods">
              <i className="fa-regular fa-handshake fs-3 pe-3"></i>
              <i className="fa-regular fa-credit-card fs-3 pe-3"></i>
              <i className="fa-brands fa-cc-paypal fs-3"></i>
            </div>
            <div className="my-4">
              <div>
                <p>
                  <i className="fa-brands fa-expeditedssl fs-4 pe-2"></i> Secure
                  Payment
                </p>
                <p className="mb-3">
                  <i className="bi bi-truck fs-4 pe-2"></i> Free shipping on all
                  orders
                </p>
                <p className="pb-4 border-bottom">
                  <i className="bi bi-calendar4-range fs-4 pe-2"></i> Delivers
                  in: 3-7 Working Days{" "}
                  <Link to={"#"} className="text-dark">
                    Shipping & Return
                  </Link>
                </p>
              </div>
              <p className="mt-4">
                Category: <span className="fw-bold">{category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default ProductDetail;
