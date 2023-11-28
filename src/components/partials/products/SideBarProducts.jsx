import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FeatureProducts from "./FeatureProducts";
import "./SideBarProducts.css";
import { Seekbar } from "react-seekbar";
import { useState } from "react";

function SideBarProducts({
  categories,
  selectedCategory,
  priceRange,
  setPriceRange,
}) {
  const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  // const [position, setPosition] = useState(100);

  const handleSeek = (position, e) => {
    // console.log("E");
    // console.log(position.target.value);
    // console.log("position");
    // console.log(position);
    // setPosition(position);
    // const newRange = {
    //   min: parseInt(e.target.value),
    //   max: priceRange.max,
    // };
    // setPriceRange(position);
  };

  const handleCategoryClick = (categoryName) => {
    const encodedCategoryName = encodeURIComponent(categoryName);
    if (selectedCategory === encodedCategoryName) {
      navigate("/products");
    } else {
      navigate(`/products?categoryName=${encodedCategoryName}`);
    }
  };

  const isCategorySelected = (categoryId) => {
    return selectedCategory === categoryId;
  };

  const handlePriceRange = (e) => {
    const newRange = {
      min: parseInt(e.target.value),
      max: priceRange.max,
    };
    setPriceRange(newRange);
  };

  return (
    <div className="mb-5 mb-lg-0 col-lg-3">
      <div>
        <h5 className="title">Categories</h5>
        {categories.map((category) => (
          <div
            key={category.id}
            className="d-flex justify-content-between mt-3"
          >
            <p
              onClick={() => handleCategoryClick(category.name)}
              className={`fw-light subtitle clickable ${
                isCategorySelected(category.name) ? "selected-Category" : ""
              }`}
            >
              {category.name}
            </p>
            {isCategorySelected(category.name) ? (
              <i
                onClick={() => handleCategoryClick("")}
                className={`bi bi-x-circle text-danger custom-icon clickable`}
              ></i>
            ) : (
              <i
                onClick={() => handleCategoryClick(category.name)}
                className="bi bi-plus-circle custom-icon clickable"
              ></i>
            )}
          </div>
        ))}
        {/* <div className="mt-5">
          <h2>La barra esta en : {position}</h2>
          <Seekbar
            position={priceRange}
            duration={100}
            width={"100%"}
            innerColor={"black"}
            onSeek={handleSeek}
          />
          <h5 className="title">Price</h5>
          <Form.Label></Form.Label>
          <Form.Range
            className="mt-4"
            min={0}
            max={100}
            value={priceRange.min}
            onChange={handlePriceRange}
            style={{
              background: "transparent",
              border: "none",
              height: "2px",
              appearance: "none",
            }}
          />
          <div className="mt-3">
            <span className="subtitle text-secondary">Range:</span>{" "}
            <span className="range-Text subtitle">
              US$ {priceRange.min} - US$ {priceRange.max}
            </span>
          </div> */}
        {/* </div> */}
        <FeatureProducts />
      </div>
    </div>
  );
}

export default SideBarProducts;
