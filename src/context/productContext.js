import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

// Create Context
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

// Provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   For All products
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_PRODUCTS_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "SET_API_ERROR" });
    }
  };

  // For Single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT_DATA", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
