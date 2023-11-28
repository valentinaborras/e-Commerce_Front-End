import React from "react";
import { Link } from "react-router-dom";
import adminDashboardImg from "../../../assets/img/AdminDashboard.jpg";

function AdminDashboard() {
  return (
    <div className="container-fluid tech-Container">
      <div className="">
        <div>
          <div className="background-About-Admin tech-Container p-0 justify-content-center align-items-center row">
            <div className="content-Tech-Container">
              <div className="align-self-center mb-2 col-lg-8 col-md-10 col-12">
                <h2 className="fw-bolder title-About">ADMIN DASHBOARD</h2>
                <p className="mt-3">
                  Within our e-commerce platform, we provide an{" "}
                  <strong>administrator panel dashboard</strong> that allows the
                  user to{" "}
                  <strong>
                    delete, update, or create products, categories, and
                    customers.
                  </strong>{" "}
                  Additionally, they can <strong>monitor the status</strong> of
                  orders and make necessary <strong>modifications.</strong>
                </p>
              </div>
              <div className="p-0 col-12 mt-3">
                <Link
                  to="https://seedling-admin.vercel.app/"
                  className="d-flex justify-content-center"
                >
                  <img
                    src={adminDashboardImg}
                    alt="Admin Dashboard Image"
                    className="img-fluid img-Admin-Dashboard"
                  />
                </Link>
              </div>
              <div className="align-self-center mt-5 col-lg-8 col-md-10 col-12">
                <h5 className="text-center fw-bold">
                  To test our Admin dashboard, you can follow these steps:
                </h5>
                <div className="d-flex justify-content-center">
                  <ol>
                    <li>
                      Visit our{" "}
                      <span>
                        <Link
                          to="https://seedling-admin.vercel.app/"
                          target="_blank"
                        >
                          admin
                        </Link>
                      </span>{" "}
                      login page.
                    </li>
                    <li>
                      Use the email address{" "}
                      <span className="bold-Letter">"test@example.com"</span> as
                      your Email Address.
                    </li>
                    <li>
                      Input <span className="bold-Letter">"1234"</span> as the
                      password.
                    </li>
                    <li>Click on the login button.</li>
                  </ol>
                </div>
                <p className="text-center pb-5">
                  <strong>Now you can access the admin dashboard!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;
