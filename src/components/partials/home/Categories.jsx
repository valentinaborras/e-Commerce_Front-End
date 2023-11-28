import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import NotFound from "../../pages/NotFound";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const BACK_URL = import.meta.env.VITE_BACK_URL;
  const BACK_IMG_URL = import.meta.env.VITE_STORAGE_URL;

  useEffect(() => {
    const getCategories = async () => {
      let url = BACK_URL + "categories";
      const response = await axios({
        method: "GET",
        url: url,
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    const encodedCategoryName = encodeURIComponent(categoryName);
    navigate(`/products?categoryName=${encodedCategoryName}`);
  };

  return (
    <>
      <div className="container">
        <div className="row text-center" style={{ marginTop: "50px" }}>
          <div className="col">
            <h6>Our Plants</h6>
            <h3>Find Your Perfect Plant</h3>
          </div>
        </div>
        {categories.length > 0 ? (
          <div className="row mt-4">
            {categories.map((category) => (
              <div className="col-md-4 mt-3" key={category.id}>
                <div
                  onClick={() => handleCategoryClick(category.name)}
                  className="link-div"
                >
                  <img
                    src={BACK_IMG_URL + category.image}
                    alt={category.name}
                    className="img-fluid img-Categories w-100"
                  />
                  <h4
                    className={`mt-2 text-center clickable ${
                      selectedCategory === category.name
                        ? "selected-Category"
                        : ""
                    }`}
                  >
                    {category.name}
                  </h4>
                  <p className="fw-light">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NotFound myBottom={"-6.6rem"} />
        )}
      </div>
    </>
  );
}

export default Categories;
