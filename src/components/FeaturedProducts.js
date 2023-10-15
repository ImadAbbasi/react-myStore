import React from "react";
import { useProductContext } from "../context/productContext";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const { isLoading, featuredProducts } = useProductContext();
  return (
    <div className="bg-gray-100 py-5">
      <div>
        <div className="p-10 text-center ">
          <p className="text-blue-500 text-sm md:ml-20 md:text-left">
            Check Now!
          </p>
          <h3 className="text-2xl md:text-4xl font-bold md:ml-20 md:text-left">
            Our Feature Products
          </h3>
          <div className="mx-auto md:flex justify-center gap-28 m-10">
            {featuredProducts.map((curElem) => {
              return <ProductCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
