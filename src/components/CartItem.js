import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import { FaTrash } from "react-icons/fa";
import CartQuantityToggle from "./CartQuantityToggle";
import { useCartContext } from "../context/cartContext";

const CartList = ({ id, name, image, price, color, quantity, maxqty }) => {
  const { removeItem, quantityDecrement, quantityIncrement } = useCartContext();

  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-5 text-center py-5">
        <div className="item flex items-center gap-2">
          <figure>
            <img src={image} alt={id + name} className="w-14" />
          </figure>
          <div>
            <p className="capitalize text-sm">{name}</p>
            <div className="flex justify-start items-center gap-2 mt-1">
              <p className="text-xs md:text-md">Color:</p>
              <div
                style={{ backgroundColor: color, color: color }}
                className="rounded-full w-4 h-4"
              ></div>
            </div>
          </div>
        </div>
        <div className="price hidden md:block">
          <FormatPrice price={price} />
        </div>
        {/* quantity */}
        <div className="quantity mx-auto">
          <CartQuantityToggle
            quantity={quantity}
            quantityDecrement={() => quantityDecrement(id)}
            quantityIncrement={() => quantityIncrement(id)}
            stock={maxqty}
          />
        </div>
        {/* subtotal */}
        <div className="subtota hidden md:block">
          <FormatPrice price={price * quantity} />
        </div>
        {/* remove Itme */}
        <div className="remove">
          <FaTrash
            className="text-red-500 mx-auto cursor-pointer"
            onClick={() => removeItem(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartList;
