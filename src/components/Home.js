import React from "react";
import "../App.css";
import Hero from "./Hero/Hero";
import Cards from "./Cards/Cards";
import WhoIam from "./WhoIam/WhoIam";
import Skills from "./Skills/Skills";
import ContactMe from "./Contactme/ContactMe";

function Home() {
  return (
    <>
      <Hero />
      <WhoIam />
      <Skills />
      <Cards />
      <ContactMe />
    </>
  );
}

export default Home;
