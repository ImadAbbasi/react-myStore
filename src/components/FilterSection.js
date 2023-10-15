import React from "react";
import { useFilterContext } from "../context/filterContext";
import { FaCheck } from "react-icons/fa";

const FilterSection = () => {
  const isActive =
    "mr-auto capitalize text-blue-500 underline decoration-black underline-offset-4 font-semibold";
  const isNotActive = "mr-auto capitalize hover:text-blue-500";

  const colorIsActiveStyle =
    "rounded-full w-5 h-5 capitalize flex justify-center items-center font-semibold underline decoration-black underline-offset-4 text-blue-500";
  const colorIsNotActiveStyle =
    "rounded-full w-5 h-5 capitalize flex justify-center items-center font-semibold opacity-50 hover:opacity-100 duration-300";

  const {
    filters: { text, category, color },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  // To get unique data of each filter
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    // if (property === "colors") {
    //   return [...new Set([].concat(...newVal))];
    // } else {
    //   return (newVal = ["all", ...new Set(newVal)]);
    // }
    if (property === "colors") {
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");
  return (
    <div className="my-5">
      {/* Search Product */}
      <div className="mb-5">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search 🔍"
            className="py-2 px-4 border w-full lg:w-fit border-gray-300 shadow-sm"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="flex justify-around items-center lg:block">
        {/* filterCategory */}
        <div className="my-5">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <div className="flex flex-col gap-3">
            {categoryOnlyData.map((curElem, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className={curElem === category ? isActive : isNotActive}
                  name="category"
                  onClick={updateFilterValue}
                  value={curElem}
                >
                  {curElem}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Company */}
        <div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Companies</h3>
            <form action="#">
              <select
                name="company"
                id="company"
                className="border-2 p-1 text-sm capitalize"
                onClick={updateFilterValue}
              >
                {companyOnlyData.map((curElem, index) => {
                  return (
                    <option key={index} value={curElem}>
                      {curElem}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>

          {/* filter Colors */}
          <div className="my-5">
            <h3 className="text-lg font-semibold mb-4">Colors</h3>
            <div className="flex gap-2">
              {colorsOnlyData.map((curElem, index) => {
                if (curElem === "all") {
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
                      onClick={updateFilterValue}
                    >
                      {color === curElem ? (
                        <FaCheck size={10} className="text-white" />
                      ) : null}
                      All
                    </button>
                  );
                }
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
                    onClick={updateFilterValue}
                  >
                    {color === curElem ? (
                      <FaCheck size={10} className="text-white" />
                    ) : null}
                  </button>
                );
              })}
            </div>

            <div className="pt-7">
              <button
                className="py-2 px-6 bg-red-500 text-white outline-none uppercase font-semibold hover:scale-95 transition duration-300"
                onClick={() => clearFilters()}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
