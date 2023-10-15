import React from "react";
import { NavLink } from "react-router-dom";

const Hero = ({ data }) => {
  const { name } = data;
  return (
    <div className="w-full">
      {/* <div className="flex flex-col md:flex-row"></div> */}
      <div className="z-20">
        <div className="w-full">
          <img
            src="./images/hero.jpg"
            alt="hero-section"
            className="z-10 w-[100vw] h-[96vh]"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 w-full h-[96vh] bg-black opacity-80"></div>
          {/* <div className="absolute top-0 left-0 w-full h-[96vh] bg-gradient-to-r from-black via-black to-gray-900 opacity-70"></div> */}
          <div className="absolute top-[10.5rem] md:px-20 z-20 w-full">
            <div className="p-5 text-center">
              <p className="text-xl text-blue-500">Welocme to</p>
              <h2 className="text-5xl font-semibold pb-2 text-white">{name}</h2>
              <p className="my-4 text-white text-lg w-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                voluptatem impedit officia et magnam distinctio voluptatum
                veritatis blanditiis laboriosam eius unde, voluptas tenetur
              </p>
              <NavLink to={"/products"}>
                <button className="bg-blue-500 text-white mt-5 py-2 px-6 uppercase font-semibold hover:scale-95 transition duration-300">
                  SHOP Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
