import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div>
      <div className="grid my-5">
        {products.map((product) => {
          const { id, name, image, price, description } = product;
          return (
            <div
              key={id}
              className="grid grid-cols-3 items-center p-5 border my-2 gap-8 shadow-md bg-gray-100"
            >
              <figure className="w-auto flex col-span-1">
                <img
                  src={image}
                  alt={name}
                  className="cursor-pointer w-auto h-44"
                />
              </figure>
              <div className="col-span-2">
                <h3 className="text-lg lg:text-xl font-semibold uppercase mb-2">
                  {name}
                </h3>
                <p className="mt-5 font-semibold text-md text-gray-600">
                  <FormatPrice price={price} />
                </p>
                <p className="mb-3 text-md text-gray-600">
                  {description.slice(0, 70)}...
                </p>
                <NavLink to={`/singleproduct/${id}`}>
                  <button className=" py-2 px-6 bg-gray-100 border-[1.5px] uppercase border-blue-500 hover:bg-blue-500 hover:text-white hover:scale-95 transition duration-300 relative bottom-">
                    Read More
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListView;
