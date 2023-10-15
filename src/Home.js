import React from "react";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "My Store",
  };

  return (
    <div>
      <Hero data={data} />
      <FeaturedProducts />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
