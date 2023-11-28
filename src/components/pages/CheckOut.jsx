import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Ticket from "../partials/checkout/Ticket";
import CartNavbar from "../partials/CartNavbar";
import BillingDetails from "../partials/checkout/BillingDetails";
import "./CheckOut.css";
import axios from "axios";
import { addOrder } from "../redux/orderSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Toaster, toast } from "react-hot-toast";

function CheckOut() {
  const BACK_URL = import.meta.env.VITE_BACK_URL;
  const cart = useSelector((state) => state.cart);
  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [billingDetails, setBillingDetails] = useState({
    firstname: `${login ? login.user.firstname : ""} `,
    lastname: `${login ? login.user.lastname : ""}`,
    email: `${login ? login.user.email : ""}`,
    phone: `${login ? login.user.phone : ""}`,
    country: `${login ? login.user.country : ""}`,
    city: `${login ? login.user.city : ""}`,
    address: `${login ? login.user.address : ""}`,
    zipcode: `${login ? login.user.zipcode : ""}`,
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePlaceOrder = async () => {
    // User should be logged in to place an order
    if (!login) {
      // toast with react hot toast:
      navigate("/login");
      toast.error("You must be logged in to place an order.");
      return;
    }

    // Ask database for stock of each product in cart
    // Promise.all() will wait for all promises to resolve
    const products = await Promise.all(
      cart.map(async (item) => {
        const response = await axios.get(BACK_URL + "products/" + item.slug);
        return response.data;
      })
    );

    // Check if there is enough stock for each product
    const outOfStock = products.filter((product, index) => {
      return product.stock < cart[index].count;
    });

    // If there is not enough stock, show toast and return
    if (outOfStock.length > 0) {
      for (let i = 0; i < outOfStock.length; i++) {
        toast.error(
          `There is not enough stock for the selected products.You can buy up to ${outOfStock[i].stock} units of ${outOfStock[i].name}.`
        );
      }
      return;
    }

    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.count;
    });

    let uniqueId = uuidv4();

    const order = {
      cart: cart,
      payment: paymentMethod,
      billing: billingDetails,
      customerId: login.user.id,
      total: total,
      orderStatusId: 1,
      id: uniqueId,
    };

    const response = await axios.post(BACK_URL + "orders", order);
    dispatch(addOrder(order));
    navigate("/orderdetails");
  };

  return (
    <>
      <div className="container flex-grow-1 py-4">
        <div className="row">
          <h2 className="text-center">
            <span className="border-bottom border-black border-4">
              CheckOut
            </span>
          </h2>
          <div className="col-sm-12 col-lg-6 col-xl-7">
            <BillingDetails
              billingDetails={billingDetails}
              setBillingDetails={setBillingDetails}
            />
          </div>
          <div className="col-sm-12 col-lg-6 col-xl-5">
            <div className="p-4 pb-5">
              <Ticket
                setPaymentMethod={setPaymentMethod}
                handlePlaceOrder={handlePlaceOrder}
              />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default CheckOut;
