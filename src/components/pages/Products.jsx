import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import HeaderProducts from "../partials/products/HeaderProducts";
import ProductsCards from "../partials/products/ProductsCards";
import SideBarProducts from "../partials/products/SideBarProducts";

function Products() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const selectedCategory = searchParams.get("categoryName");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const BACK_URL = import.meta.env.VITE_BACK_URL;

  useEffect(() => {
    const getProducts = async () => {
      let url = BACK_URL + "products";
      const params = {};
      params.stock = true;
      if (selectedCategory) {
        params.categoryName = selectedCategory;
      }
      const response = await axios({
        method: "GET",
        url: url,
        params: params,
      });
      setProducts(response.data);
    };
    getProducts();
  }, [selectedCategory, priceRange]);

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
  
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <HeaderProducts categories={categories} />
      <div className="container mt-5">
        <div className="row">
          <SideBarProducts
            categories={categories}
            selectedCategory={selectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          <ProductsCards priceRange={priceRange} products={products} />
        </div>
      </div>
    </>
  );
}

export default Products;
