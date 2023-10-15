import React from "react";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";

const Products = () => {
  return (
    <div className="">
      <div className="mt-20 lg:grid grid-cols-3 container mx-auto px-5 lg:px-20">
        <div className="col-span-1">
          <FilterSection />
        </div>

        <section className="product-view--sort col-span-2">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
