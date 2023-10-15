import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const cartContext = createContext();

const getCartData = () => {
  let newCart = localStorage.getItem("MY_STORE_CART");
  // if (!newCart || newCart === "null" || newCart === "undefined") {
  //   return [];
  // } else {
  //   return JSON.parse(newCart);
  // }
  const parsedCart = JSON.parse(newCart);
  if (!Array.isArray(parsedCart)) return [];
  return parsedCart;
};

const initialState = {
  //   cart: [],
  cart: getCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, quantity, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, quantity, product },
    });
  };

  // increment and decrement the product
  const quantityIncrement = (id) => {
    dispatch({ type: "SET_QTY_INCREMENT", payload: id });
  };
  const quantityDecrement = (id) => {
    dispatch({ type: "SET_QTY_DECREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //   to add the data in localstorage
  useEffect(() => {
    dispatch({ type: "CART_ITEM_TOTAL" });
    localStorage.setItem("MY_STORE_CART", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <cartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        quantityIncrement,
        quantityDecrement,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
