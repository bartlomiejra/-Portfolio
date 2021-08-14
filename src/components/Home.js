import React from "react";
import "../App.css";
import Hero from "./Hero/Hero";
import Cards from "./Cards/Cards";
import WhoIam from "./WhoIam/WhoIam";
import Skills from "./Skills/Skills";

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
