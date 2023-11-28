import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./ProductCards.css";
import CardProduct from "../products/CardProduct";
import NotFound from "../../pages/NotFound";

function ProductsCards({ selectedCategory, priceRange, products }) {

  return (
    <div className="col-lg-9">
      {products.length === 0 ? (
        <NotFound myBottom={"-6.88rem"} />
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-4 col-sm-6 mb-4" key={product.id}>
              <CardProduct product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsCards;
