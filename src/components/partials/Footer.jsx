import React from "react";
import Button from "react-bootstrap/Button";

import "./Footer.css";
function Footer() {
  return (
    <div className=" bg-dark text-white footer mt-auto">
      <div className="container bg-dark ">
        <div className="row pb-5">
          <div className="col-5 text-start">
            <form action="d-flex flex-column justify-content-center align-items-center ">
              <h5 className="mt10 title-Footer-2 ">
                Sign Up To Our Newsletter
              </h5>
              <p className="p-Footer ps-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                rem explicabo incidunt voluptates repudiandae illo perferendis?
              </p>
              <label htmlFor="email" hidden>
                Email
              </label>
              <div className="d-flex">
                <input
                  type="text"
                  id="emailFooter"
                  name="emailFooter"
                  className="border-0 bg-secondary-subtle opacity-75 flex-grow-1 ps-3 me-3"
                  placeholder="Enter your email address..."
                />
                <Button className="btn-Suscribe border-0 mb-1 py-2" variant="">
                  Subscribe &#8594;
                </Button>
              </div>
            </form>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <h5 className="mt10 title-Footer-2">My Account</h5>
            <ul className="p-0 p-Footer">
              <li>Career at Eldy</li>
              <li>About us</li>
              <li>Sustainability</li>
              <li>Press</li>
              <li>Corporate Orders</li>
            </ul>
          </div>
          <div className="col-3">
            <h5 className="mt10 title-Footer-2">Help</h5>
            <ul className="p-0 p-Footer">
              <li className="text-decoration-none">FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Order Status</li>
              <li>Track Your Order</li>
            </ul>
          </div>
        </div>
        <div className="d-flex border-top border-white pt-2">
          <p className="me-auto p-Footer">Copyright @ 2023 Plants Theme</p>
          <p className="p-Footer ms-2">Terms of Use</p>
          <p className="p-Footer ms-2">Copyright & Trademark</p>
          <p className="p-Footer ms-2">Policy</p>
          <p className="p-Footer ms-2">Sitemap</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
