import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cartContext";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const { cart } = useCartContext();

  const isNotActiveStyle = "hover:text-sky-600 duration-300";
  const isActiveStyle = "text-sky-500";
  return (
    <div>
      <div className="">
        <ul className="hidden md:flex gap-6 text-lg items-center">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>
              <div className="flex">
                <FiShoppingCart
                  size={21}
                  className="relative"
                  onClick={() => setMenuIcon(false)}
                />
                <span
                  className="bg-blue-500 w-5 h-5 flex justify-center
                items-center text-[0.9rem] text-white leading-4 absolute top-2 right-7 rounded-full"
                >
                  {cart.length}
                </span>
              </div>
            </NavLink>
          </li>
        </ul>

        {/* _____________________________________________________________ */}
        {/* Mobile Navbar */}
        {/* _____________________________________________________________ */}

        <div>
          <CgMenu
            name="menu-outline"
            onClick={() => setMenuIcon(true)}
            className="md:hidden"
            size={30}
          />
          {menuIcon && (
            <div className="absolute flex justify-center p-2 items-center text-center top-0 right-0 bg-black text-white opacity-80 w-full h-[100vh]">
              <div>
                <CgClose
                  name="close-outline"
                  className="absolute top-5 right-5"
                  onClick={() => setMenuIcon(false)}
                  size={30}
                />
              </div>
              <div>
                <ul className="text-lg items-center mt-10">
                  <li className="my-4 text-3xl">
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive ? isActiveStyle : isNotActiveStyle
                      }
                      onClick={() => setMenuIcon(false)}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="my-4 text-3xl">
                    <NavLink
                      to={"/about"}
                      className={({ isActive }) =>
                        isActive ? isActiveStyle : isNotActiveStyle
                      }
                      onClick={() => setMenuIcon(false)}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="my-4 text-3xl">
                    <NavLink
                      to={"/products"}
                      className={({ isActive }) =>
                        isActive ? isActiveStyle : isNotActiveStyle
                      }
                      onClick={() => setMenuIcon(false)}
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="my-4 text-3xl">
                    <NavLink
                      to={"/contact"}
                      className={({ isActive }) =>
                        isActive ? isActiveStyle : isNotActiveStyle
                      }
                      onClick={() => setMenuIcon(false)}
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="my-4">
                    <NavLink to={"/cart"}>
                      <div className="flex justify-center">
                        <FiShoppingCart
                          size={31}
                          className=""
                          onClick={() => setMenuIcon(false)}
                        />
                        <span className="bg-blue-500 w-6 h-6 flex justify-center text-white items-center text-[1rem] leading-3 relative rounded-full">
                          {cart.length}
                        </span>
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
