import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function ForgotPassword() {
  const BACK_URL = import.meta.env.VITE_BACK_URL;
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "post",
        url: BACK_URL + "tokens/" + "forgotpassword",
        data: { email },
      });

      if (response.data.message) {
        toast.success(response.data.message);
      } else {
        toast.error("Error sending email. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Error sending email. Please try again.");
      }
    }
  };

  return (
    <div>
      <Toaster />
      <div className="container-fluid header-Container p-5 mb-4">
        <h1 className="text-center my-3">My Profile</h1>
        <div className="text-center">
          <Link to="/" className="text-decoration-none text-secondary">
            <span className="font-Heather-Links">Home</span>
          </Link>{" "}
          <i className="bi bi-chevron-right me-1"></i>
          <Link to="#" className="text-decoration-none text-secondary">
            <span className="font-Heather-Links">My Profile</span>
          </Link>
        </div>
      </div>
      <div className="container mt-5">
        <p>
          Lost your password? Please enter your email address. You will receive
          a link to create a new password via email.
        </p>
        <div className="pt-2">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="fw-semibold p-Size">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              value={email}
              className="border mt-1 p-2 w-100 p-Size"
              placeholder="example@example.com"
            />
            <div className="d-flex justify-content-end mt-3 mb-5">
              <Button variant="" className="btn-dark rounded-0" type="submit">
                Reset Password
              </Button>
            </div>
          </form>
          <div className="d-flex justify-content-end mt-3 mb-5">
            <span className="p-Size">Back to </span>
            <Link
              className="text-decoration-none text-dark border-bottom border-black border-1 ms-1 p-Size"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
