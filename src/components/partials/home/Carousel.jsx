import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../../assets/img/slider1.jpg";
import slider2 from "../../../assets/img/slider2.jpg";
import slider3 from "../../../assets/img/slider3.jpg";
import { Link } from "react-router-dom";
import "./Carousel.css";

function Carousel_home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={slider1} alt="slider 1" className="img-Slider" />
          <Carousel.Caption className="info-Slider d-block container">
            <h2 className="title-Carousel">Color and Design in the Garden</h2>
            <Link
              to="/products"
              rel="stylesheet"
              href=""
              className="btn btn-Carousel "
            >
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={slider2} alt="slider 2" className="img-Slider" />
          <Carousel.Caption className="info-Slider d-block">
            <h2 className="title-Carousel">Best Plants for your Home</h2>
            <Link
              to="/products"
              rel="stylesheet"
              href=""
              className="btn btn-Carousel "
            >
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slider3} alt="slider 3" className="img-Slider" />
          <Carousel.Caption className="info-Slider d-block">
            <h2 className="title-Carousel">Best Gifts for Plants Lovers</h2>
            <Link
              to="/products"
              rel="stylesheet"
              href=""
              className="btn btn-Carousel "
            >
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel_home;
