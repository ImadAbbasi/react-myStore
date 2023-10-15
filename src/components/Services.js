import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="bg-white w-full  px-10 py-10 flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row md:gap-28 md:justify-center">
        <div className="bg-gray-100 p-10 flex flex-col justify-center items-center h-48 rounded-lg w-auto">
          <TbTruckDelivery
            size={44}
            className="bg-white p-2 rounded-full text-blue-500"
          />
          <h3 className="text-sm text-center md:text-md font-semibold py-1">
            Super Fast and Free Delivery
          </h3>
        </div>

        <div className="h-45 w-auto my-10 md:my-0">
          <div className="bg-gray-100 p-5 flex gap-4 justify-center items-center rounded-lg">
            <MdSecurity
              size={44}
              className="bg-white p-2 rounded-full text-blue-500"
            />
            <h3 className="text-sm text-center md:text-md font-semibold py-1">
              No Contact Shipping
            </h3>
          </div>

          <div className="bg-gray-100 p-5 flex gap-4 justify-center items-center rounded-lg mt-6">
            <GiReceiveMoney
              size={44}
              className="bg-white p-2 rounded-full text-blue-500"
            />
            <h3 className="text-sm text-center md:text-md font-semibold py-1">
              Money-back Guaranted
            </h3>
          </div>
        </div>

        <div className="bg-gray-100 p-10 flex flex-col justify-center items-center h-48 rounded-lg w-auto">
          <RiSecurePaymentLine
            size={44}
            className="bg-white p-2 rounded-full text-blue-500"
          />
          <h3 className="text-sm text-center md:text-md font-semibold py-1">
            Super Secure Payment System
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
