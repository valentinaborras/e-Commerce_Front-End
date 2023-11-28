import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./HistoryOrders.css";
import axios from "axios";

function HistoryOrders() {
  const user = useSelector((state) => state.login.user);
  const [orders, setOrders] = useState("");
  const IMG_URL = import.meta.env.VITE_STORAGE_URL;
  const navigate = useNavigate();
  const params = useParams();
  const BACK_URL = import.meta.env.VITE_BACK_URL;

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios({
        method: "GET",
        url: `${BACK_URL + "customers/customerOrders/" + params.id}`,
        headers: { Authorization: `Bearer ${user.token}` },
      });

      let orderedOrders = response.data.orders.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      setOrders(orderedOrders);
    };
    getOrder();
  }, [params]);

  return (
    <>
      <div className="container">
        <h3 className="mt-5 mb-3">Order history</h3>
        <p>
          Check the status of recent orders, manage returns, and discover
          similar products.
        </p>
        {orders &&
          orders.map((order) => {
            const date = new Date(order.createdAt);
            const formattedDate = date.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });
            return (
              <Card key={order.id} className="rounded-0 my-4">
                <Card.Header>
                  <div className="d-flex px-3 pt-3">
                    <dl className="me-5">
                      <dt>Order id:</dt>
                      <dd>{order.id}</dd>
                    </dl>
                    <dl className="me-5">
                      <dt>Date placed:</dt>
                      <dd>{formattedDate}</dd>
                    </dl>
                    <dl>
                      <dt>Total amount:</dt>
                      <dd>US$ {order.total}</dd>
                    </dl>
                  </div>
                </Card.Header>
                <Card.Body>
                  {order.cart.length > 0 &&
                    order.cart.map((product) => {
                      return (
                        <div key={product.id}>
                          <div className="row border-bottom">
                            <div className="col-2 mt-3 mb-3 d-none d-sm-block">
                              <img
                                className="img-fluid"
                                src={IMG_URL + product.image}
                                alt=""
                              />
                            </div>
                            <div className="col-9 mt-5 ">
                              <div className="d-flex justify-content-between pb-3 responsive-1">
                                <h5>{product.name}</h5>
                                <h5 className="text-end">
                                  {" "}
                                  US$ {Number(product.price) * product.count}
                                </h5>
                              </div>
                              <p className="text-secondary  d-none d-lg-block ">
                                {product.description.slice(0, 300) + "..."}
                              </p>
                              <p>Quantity:{product.count}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default HistoryOrders;
