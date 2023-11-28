import React, { useState } from "react";
import { addItem, subItem, inputChange } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function MyInput({ count, id }) {
  const [countState, setCountState] = useState(count);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function handleChangeCountItem(value) {
    setCountState(value);
    dispatch(inputChange({ value, id }));
  }
  useEffect(() => {
    setCountState(count);
  }, [count]);
 
  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        className="text-center fw-bold py-0 px-2"
        id="quantityBtn"
        size="3"
        onChange={(e) => handleChangeCountItem(e.target.value)}
        value={countState}
      />
    </>
  );
}

export default MyInput;
