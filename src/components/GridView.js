import React from "react";
import ProductCard from "./ProductCard";

const GridView = ({ products }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 flex-wrap">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
