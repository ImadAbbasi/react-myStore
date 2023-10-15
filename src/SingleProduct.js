import React, { useEffect } from "react";
import { useProductContext } from "./context/productContext";
import { useParams } from "react-router-dom";
import AllImages from "./components/AllImages";
import Stars from "./components/Stars";
import FormatPrice from "./helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import AddTocart from "./components/AddTocart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const { name, company, price, description, image, stock, reviews, stars } =
    singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  return (
    <div className="mt-20 px-5 lg:px-20 lg:py-10 flex justify-center items-center">
      <div className="grid lg:grid-cols-2 container mx-auto">
        {/* Images Section */}
        <div className="m-auto">
          <AllImages images={image} />
        </div>
        {/* Product Details Section */}
        <div className="lg:p-5">
          <h2 className="text-3xl mb-3 font-semibold">{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <p className="mt-3 text-sm font-semibold">
            <del>
              <FormatPrice price={price + 250000} />
            </del>
          </p>
          <p className="mb-3 text-sm text-blue-500 font-bold">
            <FormatPrice price={price} />
          </p>
          <p className="text-sm">{description}</p>

          <div className="flex justify-between my-5 border-gray-300 border-b">
            <div className="flex flex-col items-center">
              <TbTruckDelivery
                size={40}
                className="bg-gray-100 shadow-md p-2 rounded-full"
              />
              <p className="my-1 text-sm">Free Delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <TbReplace
                size={40}
                className="bg-gray-100 shadow-md p-2 rounded-full"
              />
              <p className="my-1 text-sm">30 Days Replacement</p>
            </div>
            <div className="flex flex-col items-center">
              <TbTruckDelivery
                size={40}
                className="bg-gray-100 shadow-md p-2 rounded-full"
              />
              <p className="my-1 text-sm">Fast Delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <MdSecurity
                size={40}
                className="bg-gray-100 shadow-md p-2 rounded-full"
              />
              <p className="my-1 text-sm">6 Months Waranty</p>
            </div>
          </div>
          <div className="border-b-2 border-gray-300 py-2">
            <p className="text-sm">
              Availability:{" "}
              <span className="font-semibold">
                {stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p className="text-sm">
              Brand: <span className="font-semibold">{company}</span>
            </p>
          </div>

          {stock > 0 && <AddTocart product={singleProduct} />}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
