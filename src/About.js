import React from "react";
import Hero from "./components/Hero";

const About = () => {
  const data = {
    name: "Ecommerce Store",
  };

  return (
    <div>
      <Hero data={data} />
    </div>
  );
};

export default About;
