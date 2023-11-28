import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import About from "./components/pages/AboutThisPr";
import NotFound from "./components/pages/NotFound";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ProductDetail from "./components/partials/product/ProductDetail";
import Products from "./components/pages/Products";
import CheckOut from "./components/pages/CheckOut";
import Cart from "./components/pages/Cart";
import OrderDetails from "./components/pages/OrderDetails";
import OrderTracking from "./components/pages/OrderTracking";
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";
import { useLocation } from "react-router-dom";
import Profile from "./components/pages/Profile";
import HistoryOrders from "./components/pages/HistoryOrders";
import { useDispatch } from "react-redux";
import { showWelcome } from "./components/redux/welcomeSlice";
import { useNavigate } from "react-router-dom";
import RotatingAnimation from "./components/pages/RotatingAnimation";
import "./App.css";
import ResetPassword from "./components/pages/ResetPassword";
import ForgotPassword from "./components/pages/ForgotPassword";
import ScrollToTopBtn from "./components/partials/ScrollToTopBtn";

function App() {
  const location = useLocation();
  const showNavbar = !["/login", "/signup", "/terms", "/orderdetails"].includes(
    location.pathname
  );
  const showScrollToTopBtn = ![
    "/login",
    "/signup",
    "/terms",
    "/orderdetails",
  ].includes(location.pathname);
  const showFooter = ![
    "/login",
    "/signup",
    "/terms",
    "/orderdetails",
    "/aboutthisproject",
  ].includes(location.pathname);
  const showAboutBtn = !["/login", "/signup", "/aboutthisproject"].includes(
    location.pathname
  );

  const [flagLogin, setFlagLogin] = useState(false);

  const dispatch = useDispatch();

  const welcomeReset = () => {
    dispatch(showWelcome());
  };

  useEffect(() => {
    window.addEventListener("beforeunload", welcomeReset);
    return () => window.removeEventListener("beforeunload", welcomeReset);
  }, []);

  return (
    <>
      {showNavbar && <Navbar flagLogin={flagLogin} />}
      <div>
        {showAboutBtn && <RotatingAnimation />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutthisproject" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/ordertracking" element={<OrderTracking />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route
            path="/profile/:id"
            element={
              <Profile flagLogin={flagLogin} setFlagLogin={setFlagLogin} />
            }
          />
          <Route
            path="/customers/customerOrders/:id"
            element={<HistoryOrders />}
          />
        </Routes>

        {showScrollToTopBtn && <ScrollToTopBtn />}
      </div>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
