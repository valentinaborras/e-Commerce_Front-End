import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderProducts.css";

function HeaderProducts({ categories }) {
  const BACK_IMG_URL = import.meta.env.VITE_STORAGE_URL;
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    const encodedCategoryName = encodeURIComponent(categoryName);
    navigate(`/products?categoryName=${encodedCategoryName}`);
  };

  return (
    <div className="container-fluid header-Container p-5 mb-4">
      <h1 className="text-center">Shop</h1>
      <div className="text-center">
        <Link to="/" className="text-decoration-none text-secondary">
          <span className="font-Heather-Links">Home</span>
        </Link>{" "}
        <i className="bi bi-chevron-right me-1"></i>
        <Link to="/products" className="text-decoration-none text-secondary">
          <span className="font-Heather-Links">Shop</span>
        </Link>
      </div>
      <div
        className="d-flex flex-row justify-content-center mt-5"
        style={{ gap: "70px" }}
      >
        {categories.map((category) => (
          <div
            className="text-center link-div"
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              src={BACK_IMG_URL + category.image}
              className="img-fluid rounded-circle img-Heather-Categories img-sm"
              alt={`${category.name} Category`}
            />
            <div className="card-body">
              <h5
                className={`card-title mt-4 font-sm clickable ${
                  selectedCategory === category.name ? "selected-Category" : ""
                }`}
              >
                {category.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderProducts;
