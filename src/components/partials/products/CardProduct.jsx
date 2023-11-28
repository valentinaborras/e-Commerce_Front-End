import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import "./CardProduct.css";
import soldOut from "../../../../public/soldOut.png";
import trendingLogo from "../../../../public/star.png";

function CardProduct({ product }) {
  const BACK_IMG_URL = import.meta.env.VITE_STORAGE_URL;
  const dispatch = useDispatch();

  const notify = () => toast.success("Product added to the cart!");
  //

  const handleAddToCart = (product) => {
    notify();
    product.count = 1;
    dispatch(addItem(product));
  };

  return (
    <>
      <div className="card custom-Card p-0 rounded-0 d-flex flex-column">
        <div className="img-Container">
          <Link
            to={`/product/${product.slug}`}
            className="text-decoration-none text-dark text-center position-relative"
          >
            <img
              src={BACK_IMG_URL + product.image}
              alt={product.name}
              className="img-fluid img-Favorites"
            />
            {product.stock < 1 && (
              <img
                src={soldOut}
                alt="Sold Out Product Tag"
                className="img-fluid position-absolute"
                style={{ top: "-500%", left: "5%", width: "80px" }}
              />
            )}
            {product.trending === true && (
              <img
                src={trendingLogo}
                alt="Trending Product Tag"
                className="img-fluid position-absolute"
                style={{ top: "-500%", right: "5%", width: "30px" }}
              />
            )}
          </Link>
        </div>
        <div className="px-3 py-3 flex-fill d-flex flex-column">
          <Link
            to={`/product/${product.slug}`}
            className="text-decoration-none text-dark text-center"
          >
            <h5 className="mt-2 fw-bolder subtitle">{product.name}</h5>
          </Link>
          <p className="fw-light my-Size text-secondary">
            {product.description.length > 90
              ? `${product.description.slice(0, 90)}...`
              : product.description}
          </p>
          <Toaster />
          <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-dark d-flex justify-content-between w-100 rounded-0 py-2 px-3 btn-Add-Cart mt-auto"
          >
            <span className="subtitle">
              <i className="bi bi-cart-plus text-white me-2"></i>
              Add to cart
            </span>
            <span className="subtitle fw-bold">US$ {product.price}</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
