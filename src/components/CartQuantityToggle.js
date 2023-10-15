import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartQuantityToggle = ({
  quantity,
  quantityDecrement,
  quantityIncrement,
  stock,
}) => {
  return (
    <div>
      <div className="flex gap-3">
        <button type="button" onClick={() => quantityDecrement()}>
          <FaMinus />
        </button>
        <div>{quantity}</div>
        <button type="button" onClick={() => quantityIncrement()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartQuantityToggle;
