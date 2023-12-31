const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORT_PRODUCTS":
      let newSortedData;

      const { filter_products, sorting_value } = state;
      let tempPeoducts = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortedData = tempPeoducts.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortedData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTERED_PRODUCTS":
      let { all_products } = state;
      let tempProducts = [...all_products];
      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempProducts = tempProducts.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (curElem) => curElem.category === category
        );
      }

      if (company !== "all") {
        tempProducts = tempProducts.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (color !== "all") {
        tempProducts = tempProducts.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }

      return {
        ...state,
        filter_products: tempProducts,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
