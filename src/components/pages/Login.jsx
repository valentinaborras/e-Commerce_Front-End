import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { login } from "../redux/logSlice";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const BACK_URL = import.meta.env.VITE_BACK_URL;
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("1234");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const notify = (firstname, lastname) =>
    toast.success(`Welcome ${firstname} ${lastname}`);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: BACK_URL + "tokens",
        method: "POST",
        data: { password, email },
      });
      if (response.data.token) {
        dispatch(login(response.data));
        setTimeout(function () {
          notify(response.data.user.firstname, response.data.user.lastname);
        }, 2000);

        navigate(-1);
      } else if (response.data.error) {
        navigate(`/error404/${response.data.error}`);
      }
    } catch (error) {
      setEmail("");
      setPassword("");
      setError(true);
      location.state = undefined;
    }
  };

  return (
    <div className="container login">
      <div className="row w-100">
        <div className="d-none d-md-block col-md-4 col-lg-6 pe-md-0">
          <div className="bg-Img"></div>
        </div>
        <div className="col ps-md-0">
          <div className="d-flex flex-column border-black border width p-5">
            <h1 className="mt-0 title text-center ">
              <span className="border-bottom border-black border-3 px-3 pb-1">
                <i className="bi bi-person me-2"></i>
                Login
              </span>
            </h1>
            {error && (
              <div className="alert alert-danger mt-4">
                Invalid email or password
              </div>
            )}
            {location.state && (
              <div className="alert alert-success mt-4">
                {location.state.message}
              </div>
            )}

            <form action="/login" method="post" onSubmit={handleSubmit}>
              <label className="p-Size fw-bold mt-3" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control rounded-0 p-Size"
                required
              />
              <label className="p-Size fw-bold mt-3" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control rounded-0 my-Size"
                required
              />
              <div className="d-flex mt-3">
                <input
                  type="checkbox"
                  name="rememberme"
                  id="rememberme"
                  value="forever"
                />
                <label className="p-Size fw-semibold ms-1" htmlFor="rememberme">
                  Remember me
                </label>
                <Link
                  className="ms-auto border-black border-bottom p-Size my-Link"
                  to="/forgotpassword"
                >
                  Lost your password?
                </Link>
              </div>
              <button
                type="submit"
                className=" w-100 btn btn-dark me-auto px-4 py-2 mt-3 rounded-0"
              >
                Login
              </button>
            </form>
            <div className="mt-3 ms-auto">
              <span className="p-Size">Don't have an account? </span>
              <Link
                className="my-Link p-Size ms-1 pt-1 border-bottom border-black border-1"
                to="/signup"
              >
                Sign Up!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
