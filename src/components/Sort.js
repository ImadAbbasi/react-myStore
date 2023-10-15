import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const isNotActive = "bg-gray-200 p-2";
  const isActive = "bg-gray-700 text-white p-2";

  const { sort, grid_view, setGridView, setListView, filter_products } =
    useFilterContext();

  return (
    <div className="flex justify-between items-center my-5 mt-10 lg:mt-5">
      <div className="flex flex-col md:flex-row">
        <button className="" onClick={setGridView}>
          <BsFillGridFill
            size={35}
            className={grid_view ? isActive : isNotActive}
          />
        </button>
        <button className="mt-3 md:mt-0 md:mx-3" onClick={setListView}>
          <BsList size={35} className={!grid_view ? isActive : isNotActive} />
        </button>
      </div>

      <div className="w-auto mx-4">
        <p className="text-sm text-center lg:text-lg">{`${filter_products.length} Products Available`}</p>
      </div>

      <div>
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="border-2 p-1 text-sm"
            onClick={sort}
          >
            <option value="lowest">Price (lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price (highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price (a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price (z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
