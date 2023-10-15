import React from "react";
import { useCartContext } from "./context/cartContext";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "./helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_amount, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="mt-40 flex flex-col items-center gap-14">
        <h3 className="text-4xl text-center">No item in the cart 🛒</h3>
        <NavLink to={"/products"}>
          <button className="py-2 px-6 bg-blue-500 text-white uppercase font-semibold hover:scale-95 transition duration-300">
            Start Shopping
          </button>
        </NavLink>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-20 container mx-auto px-5 py-10 lg:px-20">
        <div className="grid grid-cols-3 md:grid-cols-5 p-1 text-center border-b-2 border-gray-300">
          <p>Item</p>
          <p className="hidden md:block">Price</p>
          <p>Quantity</p>
          <p className="hidden md:block">Subtotal</p>
          <p>Remove</p>
        </div>

        <div className="border-b-2 border-gray-300">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <div className="mt-5 flex justify-between">
          <NavLink to={"/products"}>
            <button className="py-2 px-6 bg-blue-500 text-white text-xs uppercase md:text-base hover:scale-95 transition duration-300">
              Continue Shopping
            </button>
          </NavLink>
          <button
            className="py-2 px-6 bg-red-500 text-white text-xs md:text-base uppercase hover:scale-95 transition duration-300"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        </div>

        {/* Order Total */}
        <div className="mt-10">
          <div className="bg-gray-100 ml-auto md:w-72 p-10 shadow-md">
            <div className="border-b-2 border-gray-400">
              <div className="flex justify-between">
                <p>Subtotal:</p>
                <p className="font-semibold">
                  <FormatPrice price={total_amount} />
                </p>
              </div>
              <div className="flex justify-between my-4">
                <p>Shipping Fee:</p>
                <p className="font-semibold">
                  <FormatPrice price={shipping_fee} />
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <p>Order Total:</p>
              <p className="font-semibold">
                <FormatPrice price={total_amount + shipping_fee} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
