import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function ResetPassword() {
  const BACK_URL = import.meta.env.VITE_BACK_URL;
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = new URLSearchParams(window.location.search).get("token");

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios({
        method: "post",
        url: BACK_URL + "tokens/" + "resetpassword",
        data: { token, newPassword },
      });

      if (response.data.message) {
        toast.success(response.data.message);
      } else if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.error("Error sending email. Please try again.");
      }
    } catch (error) {
      toast.error("Error sending email. Please try again.");
    } finally {
      setIsLoading(false);
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
      <div className="container mt-2">
        <p>Please enter a new password</p>
        <div>
          <label htmlFor="newPassword" className="fw-semibold p-Size">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border mb-3 mt-1 p-2 w-100 p-Size"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="fw-semibold p-Size">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border mb-3 mt-1 p-2 w-100 p-Size"
          />
        </div>
        <div className="d-flex justify-content-end mb-5">
          <Button
            variant=""
            className="btn-dark rounded-0"
            onClick={handleResetPassword}
            disabled={isLoading}
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </Button>
        </div>
        <div className="d-flex justify-content-end mb-5">
          <span className="p-Size">Back to </span>
          <Link
            className="text-decoration-none p-Size text-dark border-bottom border-black border-1 ms-1 p-Size"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
