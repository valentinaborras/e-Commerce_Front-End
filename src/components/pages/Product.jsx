import ProductDetail from "../partials/product/ProductDetail";
import ProductRecommendations from "../partials/product/ProductRecommendations";
import ProductDescription from "../partials/product/ProductDescription";
import "./product.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalLogin from "./ModalLogin";

function Product() {
  const BACK_URL = import.meta.env.VITE_BACK_URL;
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(BACK_URL + "products/" + slug);
      setProduct(res.data);
      if (res.data.category) {
        setCategory(res.data.category.name);
      }
      setLoading(false);
    };
    getProduct();
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div>
      <ProductDetail
        product={product}
        category={category}
        handleOpenModal={handleOpenModal}
      />
      <ProductDescription description={product.description} />
      <ProductRecommendations currentProduct={product.name} />
      <ModalLogin openModal={openModal} handleCloseModal={handleCloseModal} />
    </div>
  );
}

export default Product;
