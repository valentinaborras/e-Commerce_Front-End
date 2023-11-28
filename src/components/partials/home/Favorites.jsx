import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Favorites.css";
import CardProduct from "../products/CardProduct";
import NotFound from "../../pages/NotFound";

function Favorites() {
  const [products, setProducts] = useState([]);
  const BACK_URL = import.meta.env.VITE_BACK_URL;

  const AMOUNT_OF_PRODUCTS = 4;

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
  }, []);

  return products.length > 0 ? (
    <>
      <div className="container favorite-Container mt-5">
        <h6 className="text-center mb-3">
          <span className="badge bg-success px-3 py-2">Free Shipping</span>
        </h6>
        <h3 className="text-center">Our Favorites Plants</h3>
        <p className="text-end d-none d-sm-block ">
          <Link to="/products" className="text-decoration-none see-More">
            See more
          </Link>
          <i className="bi bi-arrow-right-short"></i>
        </p>
        <div className="row mt-4 mb-4 g-5">
          {products.map((product) => (
            <div
              className="col-xl-3 col-lg-4 col-sm-6 mt-3 mb-4"
              key={product.id}
            >
              <CardProduct product={product} />
            </div>
          ))}
        </div>
        <p className="text-end d-block d-sm-none ">
          <Link className="text-decoration-none see-More">See more</Link>
          <i className="bi bi-arrow-right-short"></i>
        </p>
      </div>
    </>
  ) : (
    <NotFound myBottom={"-6.6rem"} />
  );
}

export default Favorites;
