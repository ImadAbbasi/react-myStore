import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const filterContext = createContext();

const initialState = {
  all_products: [],
  filter_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //   Set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  //   Set list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // Function to sort by price ot alphabetically
  const sort = (e) => {
    let sortVal = e.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: sortVal });
  };

  // Update filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  // to clear the filters
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  // to sort the products
  useEffect(() => {
    dispatch({ type: "FILTERED_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS", payload: products });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <filterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sort,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(filterContext);
};
