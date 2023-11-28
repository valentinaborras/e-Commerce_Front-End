import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import TermsModal from "./TermsModal";
import "./SignUp.css";
import { useSelector } from "react-redux";

const SignUp = () => {
  const BACK_URL = import.meta.env.VITE_BACK_URL;
  const navigate = useNavigate();

  const userIsLoggedIn = useSelector((state) => state.login);

  const [showModal, setShowModal] = useState(false);

  const [error, setError] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [fileName, setFileName] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    try {
      await axios({
        method: "post",
        url: BACK_URL + "customers",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setError(false);
      navigate("/login", {
        state: { message: "You have successfully signed up. Please login." },
      });
    } catch (error) {
      setError(true);
    }
  }

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (userIsLoggedIn) {
      navigate("/");
    }
  }, [userIsLoggedIn]);

  return (
    <div className="container sign-Up">
      <div className="row w-100">
        <div className="d-none d-md-block col-md-4 col-lg-6 pe-md-0">
          <div className="bg-Img-Sign-Up"></div>
        </div>
        <div className="col ps-md-0">
          <div className="d-flex flex-column border-black border width p-5">
            <h1 className="mt-0 title text-center mb-3">
              <span className="border-bottom border-black border-3 px-3 pb-1">
                <i className="bi bi-person me-2"></i>
                Sign Up
              </span>
            </h1>
            {error && (
              <div className="alert alert-danger mt-4">
                Error signing up. Please try again later.
              </div>
            )}
            <form
              action=""
              onSubmit={handleSubmit}
              method="post"
              encType="multipart/form-data"
            >
              <label className="p-Size fw-bold mt-3" htmlFor="firstname">
                First name
              </label>
              <input
                name="firstname"
                type="text"
                id="firstname"
                className="form-control rounded-0 p-Size"
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
                required
              />

              <label className="p-Size fw-bold mt-3" htmlFor="lastname">
                Last name
              </label>
              <input
                name="lastname"
                type="text"
                id="lastname"
                className="form-control rounded-0 p-Size"
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
                required
              />

              <label className="p-Size fw-bold mt-3" htmlFor="email">
                Email address
              </label>
              <input
                name="email"
                type="email"
                id="signup-email"
                className="form-control rounded-0 p-Size"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <label className="p-Size fw-bold mt-3" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control rounded-0 p-Size"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              <div className="d-flex justify-content-between">
                <label
                  htmlFor="avatar"
                  className="custom-file-upload mt-3 btn color-Secondary rounded-0 border fw-bold p-Size"
                >
                  Upload Avatar
                </label>
                <input
                  style={{ display: "none" }}
                  name="avatar"
                  type="file"
                  className="form-control rounded-0 p-Size"
                  id="avatar"
                  onChange={(event) => {
                    setAvatar(event.target.files[0]);
                    setFileName(
                      event.target.files[0] ? event.target.files[0].name : ""
                    );
                  }}
                />
                {fileName && (
                  <p className="p-Size fw-bold mt-3">
                    File to upload:{" "}
                    <span className="text-success">{fileName}</span>
                  </p>
                )}
              </div>

              <div className="form-group mb-4 mt-3 d-flex">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="me-2"
                  required
                />
                <label htmlFor="terms" className="terms-label">
                  I agree to the{" "}
                  <a href="#" onClick={handleShowModal}>
                    terms and conditions
                  </a>
                </label>
                {showModal && <TermsModal onClose={handleCloseModal} />}
              </div>
              <button
                type="submit"
                className="btn btn-dark mb-4 w-100 rounded-0 btn-Sign-Up"
              >
                Sign up
              </button>
            </form>
            <div className="mt-3 ms-auto">
              <span className="p-Size">Already have an account? </span>
              <NavLink
                className="my-Link ms-1 pt-1 border-bottom border-black border-1 p-Size"
                to="/login"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
