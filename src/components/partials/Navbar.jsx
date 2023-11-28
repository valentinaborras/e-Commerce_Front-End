import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import logo from "../../assets/img/logo5.png";
import CartCanvas from "./cartcanvas/CartCanvas";
import { Link, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/logSlice";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import "./Navbar.css";
import ModalLogin from "../pages/ModalLogin";
import axios from "axios";
import { useRef } from "react";

function NavbarComponent({ flagLogin }) {
  const login = useSelector((state) => state.login);
  const STORAGE_URL = import.meta.env.VITE_STORAGE_URL;
  const ref = useRef(null);

  const CUSTOMERS_URL = import.meta.env.VITE_BACK_URL + "customers/";

  const [user, setUser] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const notify = () => toast.error("Logged out successfully");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    notify();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    const adminId = `${login ? login.user.id : ""}`;
    const getUser = async () => {
      const res = await axios.get(CUSTOMERS_URL + adminId, {
        // headers: {
        //   Authorization: `Bearer ${isLoggedIn}`,
        // },
      });
      setUser(res.data);
    };
    getUser();
  }, [flagLogin, login, CUSTOMERS_URL]);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "unset";
  };
  const [openModal, setOpenModal] = useState(false);
  const [navSize, setNavSize] = useState(100);
  const handleNavSize = () => {
    const scrollValue = window.scrollY;
    setNavSize((prev) => 100 - scrollValue / 30);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleNavSize);
    return () => window.removeEventListener("scroll", handleNavSize);
  });

  const handleClickProfile = () => {
    if (login) {
      navigate(`/profile/${login.user.id}`);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div
        className="d-flex justify-content-center my-Navbar  bg-black text-white navbar p-0"
        style={{ height: navSize, minHeight: "55px" }}
      >
        {/* Icon PANEL */}
        <div className="container">
          <div className="icon-Panel ms-auto">
            <ul className="d-flex mb-0 menu">
              <li className="mx-2  li-Nav">
                <Button
                  variant=""
                  className="myBtn fs-4 text-white"
                  onClick={() => {
                    toast.error("Function not available");
                  }}
                >
                  <i className="bi bi-search"></i>
                </Button>
              </li>

              <li className="mx-2  d-flex align-items-center justify-content-center  li-Nav">
                {login ? (
                  <NavDropdown
                    className=""
                    title={
                      <img
                        src={STORAGE_URL + user.avatar}
                        className="my-Icon"
                        alt="User Avatar"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item onClick={handleClickProfile}>
                      My Profile
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to={`/customers/customerOrders/${
                        login ? login.user.id : ""
                      }`}
                    >
                      My Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Link to="/login">
                    <i className="bi bi-person my-Icon"></i>
                  </Link>
                )}
              </li>

              <li className="mx-2 li-Nav my-Btn">
                <CartCanvas handleOpenModal={handleOpenModal} />
                <ModalLogin
                  openModal={openModal}
                  handleCloseModal={handleCloseModal}
                />
              </li>
            </ul>
          </div>
          <Toaster />
        </div>
        <Navbar
          expand="lg"
          expanded={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          className=" bg-black my-Navbar"
          style={{ height: navSize, minHeight: "55px" }}
          ref={ref}
        >
          <Container>
            <Navbar.Brand to="/" className="ms-0">
              <img
                src={logo}
                alt="Logo"
                className="plant-Logo img-fluid"
                style={{ height: navSize - 45 + "px", minHeight: "40px" }}
              />
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav "
              className="bg-white ms-0 me-auto rounded-0"
            />

            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="d-flex justify-content-start w-100 special-Padding mt-lg-0 position-fixed position-lg-relative">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "active my-Btn text-white space-Navbar a-Nav mt-1 mt-lg-0"
                      : "my-Btn text-white space-Navbar a-Nav"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "active my-Btn text-white space-Navbar a-Nav"
                      : "my-Btn text-white space-Navbar a-Nav"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  SHOP
                </NavLink>

                {/* About This Project */}

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "active my-Btn text-white space-Navbar a-Nav"
                      : "my-Btn text-white space-Navbar a-Nav"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </NavLink>
                <NavLink
                  to="/aboutthisproject"
                  className={({ isActive }) =>
                    isActive
                      ? "active my-Btn text-white space-Navbar a-Nav about-Nav"
                      : "my-Btn text-white space-Navbar a-Nav about-Nav"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <span className="rotate-center d-none d-lg-flex">
                    <i className="fa-solid fa-leaf text-success ms-2 me-1  "></i>
                  </span>
                  ABOUT THIS PROJECT
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarComponent;
