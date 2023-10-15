const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, quantity, product } = action.payload;

    // Checking if the item already exists in the cart

    const existingItem = state.cart.find(
      (curElem) => curElem.id === id + color
    );

    if (existingItem) {
      let updatedCart = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newQuantity = curElem.quantity + quantity;
          if (newQuantity >= curElem.maxqty) {
            newQuantity = curElem.maxqty;
          }
          return {
            ...curElem,
            quantity: newQuantity,
          };
        } else {
          return curElem;
        }
      });

      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        quantity,
        image: product.image[0].url,
        price: product.price,
        maxqty: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  //   To increment or decrement the quantity in the cart
  if (action.type === "SET_QTY_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incrementQty = curElem.quantity + 1;
        if (incrementQty >= curElem.maxqty) {
          incrementQty = curElem.maxqty;
        }
        return {
          ...curElem,
          quantity: incrementQty,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }
  if (action.type === "SET_QTY_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incrementQty = curElem.quantity - 1;
        if (incrementQty <= 1) {
          incrementQty = 1;
        }
        return {
          ...curElem,
          quantity: incrementQty,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  //   Remove a particular item from the cart
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload.id
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  //   Clear the cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_ITEM_TOTAL") {
    let totalPrice = state.cart.reduce((accum, curElem) => {
      let { price, quantity } = curElem;
      accum = accum + price * quantity;

      return accum;
    }, 0);
    return {
      ...state,
      total_amount: totalPrice,
    };
  }

  return state;
};

export default cartReducer;
