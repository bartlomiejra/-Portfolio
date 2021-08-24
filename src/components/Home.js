import React from "react";
import "../App.css";
import Hero from "./Hero/Hero";
import Cards from "./Cards/Cards";
import WhoIam from "./WhoIam/WhoIam";
import Skills from "./Skills/Skills";
import ContactMe from "./Contactme/ContactMe";
import PlaySound from "./sound";

function Home() {
  return (
    <>
      <Hero />
      <WhoIam />
      <Skills />
      <Cards />
      <ContactMe />
      {/* <PlaySound /> */}
    </>
  );
}

export default Home;
