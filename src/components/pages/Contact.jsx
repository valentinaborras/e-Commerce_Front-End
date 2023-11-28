import React from "react";
import "./Contact.css";

import { useSelector } from "react-redux";

function Contact() {
  const login = useSelector((state) => state.login);
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div>
      <div className="container contact mb-4">
        <div className="row mt-5">
          <div className="col-12 col-md-7 pe-5 me-3">
            <h2 className="fw-bold mb-3">Get in touch</h2>
            <form className="d-flex flex-column my-Size" action="">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column me-4">
                  <label className="fw-bold" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="form-control rounded-0 my-Size"
                  />
                </div>
                <div className="d-flex flex-column  me-4">
                  <label className="fw-bold" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="mail"
                    name="mail"
                    type="text"
                    placeholder="Email address"
                    className="form-control rounded-0 my-Size"
                  />
                </div>
                <div className="d-flex flex-column">
                  <label className="fw-bold" htmlFor="phone">
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    className="form-control rounded-0 my-Size"
                  />
                </div>
              </div>
              <label className="mt-3" htmlFor="message">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Comment or Message *"
                className="form-control rounded-0 my-Size"
              ></textarea>
              <div className="d-flex justify-content-end">
                <button className="btn btn-dark px-4 py-2 mt-3 rounded-0">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="mt-5 mt-md-0 col-6 col-md-4">
            <div className="my-Tags border-bottom mb-3">
              <h6 className="fw-bold">Address</h6>
              <p className="my-Size">
                Av. Uruguay 1989 esq. Republica, Montevideo, Uruguay 11800CP
              </p>
            </div>
            <div className="my-Tags border-bottom mb-3">
              <h6 className="fw-bold">Phone</h6>
              <p className="my-Size">(+598) 091744653</p>
            </div>
            <div className="my-Tags border-bottom mb-3">
              <h6 className="fw-bold">Email</h6>
              <p className="my-Size">support@hackplants.com</p>
            </div>
            <div className="my-Tags border-bottom mb-3">
              <h6 className="fw-bold">Opening Time</h6>
              <p className="my-Size">8:00 am – 10:00 pm, Sunday Close</p>
            </div>
            <div className="my-Tags border-bottom mb-3">
              <h6 className="fw-bold">Follow Us On</h6>
              <p className="mt-3 my-Size">
                <i className="bi bi-github me-2"></i>
                <i className="bi bi-instagram me-2"></i>
                <i className="bi bi-twitter"></i>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
