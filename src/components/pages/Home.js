import React from "react";
import "../../App.css";
import Hero from "../Hero/Hero";
import Cards from "../Cards/Cards";
import WhoIam from "../WhoIam";
import Skills from "../Skills";

function Home() {
  return (
    <>
      <Hero />
      <WhoIam />
      <Skills />
      <Cards />
    </>
  );
}

export default Home;
