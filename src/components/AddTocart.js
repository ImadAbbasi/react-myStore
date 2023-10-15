import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartQuantityToggle from "./CartQuantityToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const AddTocart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();

  const quantityIncrement = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };
  const quantityDecrement = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const colorIsActiveStyle =
    "rounded-full w-5 h-5 capitalize flex justify-center items-center  font-semibold underline decoration-black underline-offset-4 text-blue-500";
  const colorIsNotActiveStyle =
    "rounded-full w-5 h-5 capitalize flex justify-center items-center font-semibold opacity-50 hover:opacity-100 duration-300";

  return (
    <div>
      <div>
        <p className="my-3 text-sm flex gap-3 items-center">
          Colors:{" "}
          {colors &&
            colors.map((curElem, index) => {
              return (
                <button
                  key={index}
                  value={curElem}
                  name="color"
                  style={{ backgroundColor: curElem }}
                  type="button"
                  className={
                    color === curElem
                      ? colorIsActiveStyle
                      : colorIsNotActiveStyle
                  }
                  onClick={() => setColor(curElem)}
                >
                  {color === curElem ? (
                    <FaCheck size={10} className="text-white" />
                  ) : null}
                </button>
              );
            })}
        </p>
      </div>
      {/* Quantity toggle */}
      <CartQuantityToggle
        quantity={quantity}
        quantityIncrement={quantityIncrement}
        quantityDecrement={quantityDecrement}
        stock={stock}
      />
      <p className="text-red-500 text-sm h-5 mb-2">
        {quantity >= stock ? `only ${stock} left in stock` : null}
      </p>

      <NavLink
        to={"/cart"}
        onClick={() => addToCart(id, color, quantity, product)}
      >
        <button className="py-2 px-6 bg-blue-500 text-white uppercase hover:scale-95 transition duration-300 outline-none">
          Add To Cart
        </button>
      </NavLink>
    </div>
  );
};

export default AddTocart;
