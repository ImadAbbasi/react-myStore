import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="relative w-full bottom-0">
        <div className=" outline-none">
          <section className="w-72 md:min-w-[60vw] bg-gray-100 m-auto py-10 px-5 md:px-16 rounded-lg shadow-lg my-5 md:my-0 md:translate-y-[50%]">
            <div className="md:flex justify-between items-center text-center">
              <div className="mb-4">
                <h3 className="md:text-lg">Ready to get started?</h3>
                <h3 className="md:text-lg">Talk to us today</h3>
              </div>

              <div>
                <NavLink to="/contact">
                  <button className="bg-blue-500 text-white py-2 px-6 text-md font-semibold uppercase shadow-md hover:scale-95 transition duration-300">
                    Get Started
                  </button>
                </NavLink>
              </div>
            </div>
          </section>

          <footer className="bg-blue-900 text-white pt-8 md:pt-[8rem] pb-[5rem]">
            <div className="md:flex justify-evenly mx-4 md:mx-24">
              <div className="md:w-40">
                <h3 className="text-lg font-semibold">My Store</h3>
                <p className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
                  ratione.
                </p>
              </div>

              <div className="md:w-40 mt-4 md:mt-0">
                <h3 className="text-lg font-semibold">
                  Subscribe to get important updates
                </h3>
                <form action="#" className="mt-2 md:mt-5">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="p-2 text-black"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="py-2 px-6 bg-blue-500 mt-2 uppercase font-semibold"
                  />
                </form>
              </div>

              <div className="mt-4 md:mt-0 md:w-40">
                <h3 className="text-lg font-semibold">Follow us</h3>
                <div className="mt-2 flex gap-3">
                  <div>
                    <a href="https://discord.com/">
                      <FaDiscord
                        size={35}
                        className="icons border-2 border-white rounded-full p-2"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/?hl=en">
                      <FaInstagram
                        size={35}
                        className="icons border-2 border-white rounded-full p-2"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.youtube.com/">
                      <FaYoutube
                        size={35}
                        className="icons border-2 border-white rounded-full p-2"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-40 mt-4 md:mt-0">
                <h3 className="text-lg font-semibold">Call Us</h3>
                <a className="call" href="tel:+92 012 3456789">
                  +92 012 3456789
                </a>
              </div>
            </div>

            {/* bottom footer */}

            <div className="pt-14">
              <hr className="mb-3 md:mb-[2rem]" />
              <div className="px-5 md:px-0 md:flex justify-around items-center">
                <p>@{new Date().getFullYear()} MyStore. All Rights Reserved</p>
                <div className="mt-5 md:mt-0">
                  <p>PRIVACY POLICY</p>
                  <p>TERMS & CONDITIONS</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
