import React, { useEffect, useState } from "react";

const AllImages = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);

  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-3 items-center lg:p-5">
      <div className="flex flex-row lg:flex-col gap-3">
        {images &&
          images.map((curElem, index) => {
            return (
              <figure key={index}>
                <img
                  src={curElem.url}
                  alt={curElem.filename}
                  className="w-36 h-24 cursor-pointer"
                  onClick={() => setMainImage(curElem)}
                />
              </figure>
            );
          })}
      </div>
      <div className="">
        <figure>
          <img
            src={mainImage.url}
            alt={mainImage.filename}
            className="w-96 h-64"
          />
        </figure>
      </div>
    </div>
  );
};

export default AllImages;
