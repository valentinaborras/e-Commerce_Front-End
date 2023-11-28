import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./FeatureProducts.css";
import soldOut from "../../../../public/soldOut.png";
import trendingLogo from "../../../../public/star.png";

function FeatureProducts() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const BACK_URL = import.meta.env.VITE_BACK_URL;
  const IMG_URL = import.meta.env.VITE_STORAGE_URL;
  const AMOUNT_OF_PRODUCTS = 3;

  useEffect(() => {
    const getTrendingProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${BACK_URL}products?trending=true`,
      });

      let randomNumbers = [];
      while (randomNumbers.length < AMOUNT_OF_PRODUCTS) {
        let randomNumber = Math.floor(Math.random() * response.data.length);
        if (!randomNumbers.includes(randomNumber))
          randomNumbers.push(randomNumber);
      }
      const randomTrendingProducts = randomNumbers.map(
        (index) => response.data[index]
      );
      setFavoriteProducts(randomTrendingProducts);
    };
    getTrendingProducts();
  }, []);

  return (
    <>
      <div className="col mt-5 d-none d-lg-block">
        <h5 className="title mb-4 mt-5 ms-0">Feature Products</h5>
        {favoriteProducts.map((product) => (
          <div key={product.id}>
            {/*  <div className="card"> */}
            <div className="row ">
              <div className="image-div col-4 mb-2">
                <div className="position-relative">
                  <img
                    src={IMG_URL + product.image}
                    alt={product.name}
                    className="img-fluid"
                  />
                  {product.stock < 1 && (
                    <img
                      src={soldOut}
                      alt="Sold Out Product Tag"
                      className="img-fluid position-absolute"
                      style={{ top: "0%", left: "5%", width: "40px" }}
                    />
                  )}
                  {product.trending === true && (
                    <img
                      src={trendingLogo}
                      alt="Trending Product Tag"
                      className="img-fluid position-absolute"
                      style={{ top: "5%", right: "5%", width: "20%" }}
                    />
                  )}
                </div>
              </div>
              <div className="col-8 ">
                <Link
                  to={`/product/${product.slug}`}
                  className="text-decoration-none"
                >
                  <p className="media-Text fw-light fs-8 text-secondary">
                    {product.name}
                  </p>
                </Link>
                <p className="fw-light media-Text">US$ {product.price}</p>
              </div>
            </div>
          </div>
          /* </div> */
        ))}
      </div>
    </>
  );
}

export default FeatureProducts;
