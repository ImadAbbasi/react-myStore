import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 md:px-10 bg-gray-100 h-14 shadow-md fixed top-0 z-50 w-full">
      <NavLink to={"/"}>
        <div className="p-1 border-2 border-black">
          <p className="text-2xl text-gray-800 font-bold border-[1px] border-black p-[0.1rem]">
            My<span className="text-blue-500">Store</span>
          </p>
        </div>
      </NavLink>
      <Nav />
    </div>
  );
};

export default Header;
