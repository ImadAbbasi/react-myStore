import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";

const ProductCard = (curElem) => {
  const { id, name, category, image, price } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className=" mt-10 md:mt-4 w-auto bg-gray-100 rounded-md shadow-md outline-none">
        <div className="overflow-hidden p-2">
          <figure className="w-auto flex justify-center items-center relative overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-auto h-36 hover:scale-125 transition duration-500"
            />
          </figure>
        </div>
        <div className="flex justify-around w-auto items-center pb-2 ">
          <div>
            <h3 className="text-sm w-auto md:font-semibold uppercase">
              {name}
            </h3>
            <p className="hidden lg:block uppercase text-xs">{category}</p>
          </div>
          <p className="text-sm">
            <FormatPrice price={price} />
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
