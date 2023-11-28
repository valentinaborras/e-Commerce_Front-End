import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

function ProductRecommendations({ currentProduct }) {
  const [products, setProducts] = useState([]);
  const BACK_URL = import.meta.env.VITE_BACK_URL;
  const IMG_URL = import.meta.env.VITE_STORAGE_URL;
  const AMOUNT_OF_PRODUCTS = 4;
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

      setProducts(randomTrendingProducts);
    };
    getTrendingProducts();
  }, [currentProduct]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="container mb-5 pb-5">
      <h2 className="text-center my-5 pt-5">More Favorites</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 col-sm-6 mt-3" key={product.id}>
            <div className="card custom-card p-0 rounded-0">
              <div className="img-container">
                <img
                  src={IMG_URL + product.image}
                  alt={product.name}
                  className="img-fluid img-favorites"
                />
              </div>
              <div className="px-3 py-3">
                <h5
                  className="mt-2 fw-bolder subTitle clickable"
                  onClick={() => navigate(`/product/${product.slug}`)}
                >
                  {product.name}
                </h5>
                <p className="fw-light mySize text-secondary">
                  {product.description.length > 120
                    ? `${product.description.slice(0, 120)}...`
                    : product.description}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-dark d-flex justify-content-between w-100 rounded-0 py-2 px-3 btn-add-cart"
                >
                  <span className="subTitle">
                    <i className="bi bi-cart-plus text-white me-2"></i>
                    Add to cart
                  </span>{" "}
                  <span className="subTitle fw-bold">US$ {product.price}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductRecommendations;
