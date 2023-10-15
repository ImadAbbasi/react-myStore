import React from "react";

const Trusted = () => {
  return (
    <div className="bg-gray-100 p-10">
      <h3 className="text-center my-5 text-xl md:text-2xl font-semibold text-gray-500">
        Trusted By 1000+ Companies
      </h3>
      <div className="flex justify-center md:justify-between items-center mb-5 mt-10 md:mx-20">
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
            alt="trusted-brands"
            className="w-[10rem] md:min-w-[5rem]"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
            alt="trusted-brands"
            className="w-[10rem] md:min-w-[5rem]"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
            alt="trusted-brands"
            className="w-[10rem] md:min-w-[5rem]"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
            alt="trusted-brands"
            className="w-[10rem] md:min-w-[5rem]"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
            alt="trusted-brands"
            className="w-[10rem] md:min-w-[5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
