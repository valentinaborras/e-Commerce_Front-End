import React, { useState } from "react";
import { useSelector } from "react-redux";

function BillingDetails({ billingDetails, setBillingDetails }) {
  const handleChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mb-5 pb-5">
      <h2 className="secondary-Font my-4">Billing Details</h2>
      <div>
        <form>
          <label htmlFor="firstname" className="text-Form fw-semibold">
            First name
          </label>
          <input
            type="text"
            name="firstname"
            className="form-control-plaintext border-bottom mb-4 text-Form"
            onChange={handleChange}
            value={billingDetails.firstname}
          />

          <label htmlFor="lastname" className="text-Form fw-semibold">
            Last name
          </label>
          <input
            type="text"
            name="lastname"
            className="form-control-plaintext border-bottom mb-4 text-Form"
            onChange={handleChange}
            value={billingDetails.lastname}
          />

          <label htmlFor="email" className="text-Form fw-semibold">
            Email address
          </label>
          <input
            type="text"
            name="email"
            className="form-control-plaintext border-bottom mb-4 text-Form"
            onChange={handleChange}
            value={billingDetails.email}
          />

          <label htmlFor="phone" className="text-Form fw-semibold">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="form-control-plaintext border-bottom mb-4 text-Form"
            onChange={handleChange}
            value={billingDetails.phone}
          />

          <label htmlFor="country" className="text-Form fw-semibold">
            Country
          </label>
          <input
            type="text"
            name="country"
            className="form-control-plaintext border-bottom mb-4 text-Form"
            onChange={handleChange}
            value={billingDetails.country}
          />

          <label htmlFor="city" className="text-Form fw-semibold">
            City
          </label>
          <input
            type="text"
            name="city"
            className="form-control-plaintext border-bottom mb-4 text-Form"
            onChange={handleChange}
            value={billingDetails.city}
          />

          <label htmlFor="address" className="text-Form fw-semibold">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="form-control-plaintext border-bottom mb-4 text-Form"
            onChange={handleChange}
            value={billingDetails.address}
          />

          <label htmlFor="zipcode" className="text-Form fw-semibold">
            ZIP code
          </label>
          <input
            type="text"
            name="zipcode"
            className="form-control-plaintext border-bottom mb-4 text-Form"
            onChange={handleChange}
            value={billingDetails.zipcode}
          />
        </form>
      </div>
    </div>
  );
}

export default BillingDetails;
