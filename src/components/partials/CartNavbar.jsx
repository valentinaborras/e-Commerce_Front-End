import React from "react";
import { NavLink } from "react-router-dom";
import "./CartNavbar.css";

function CartNavbar() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <ul className="d-flex list-unstyled">
          <li className="ms-2">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "active my-Btn-Cart cart-Nav"
                  : "my-Btn-Cart cart-Nav"
              }
            >
              Cart
            </NavLink>
          </li>
          <li className="ms-2">
            <NavLink
              to="/checkout"
              className={({ isActive }) =>
                isActive
                  ? "active my-Btn-Cart cart-Nav"
                  : "my-Btn-Cart cart-Nav"
              }
            >
              Checkout
            </NavLink>
          </li>
          <li className="ms-2">
            <NavLink
              to="/ordertracking"
              className={({ isActive }) =>
                isActive
                  ? "active my-Btn-Cart cart-Nav"
                  : "my-Btn-Cart cart-Nav"
              }
            >
              Order Tracking
            </NavLink>
          </li>
          <li className="ms-2">
            <NavLink
              to="/orderdetails"
              className={({ isActive }) =>
                isActive
                  ? "active my-Btn-Cart cart-Nav"
                  : "my-Btn-Cart cart-Nav"
              }
            >
              Order Details
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CartNavbar;
