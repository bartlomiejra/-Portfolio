import React from 'react';
import '../../Styles/App.css';
import Hero from '../organisms/Hero/Hero';
import Cards from '../organisms/Cards/Cards';
import WhoIam from '../organisms/WhoIam/WhoIam';
import Skills from '../organisms/Skills/Skills';
import ContactMe from '../organisms/Contactme/ContactMe';
import PlaySound from '../organisms/footer/footer';
import { motion } from 'framer-motion';
import ScrollButton from '../atoms/ScrollButton.js/ScrollButton';
function Home() {
  // const [element, controls] = useScroll;
  return (
    <motion.div
      initial="hidden"
      animate="show"
      //  ref={element}
    >
      <Hero />
      <ScrollButton />
      <WhoIam />
      <Skills />
      <Cards />
      <ContactMe />
      <PlaySound />
    </motion.div>
  );
}

export default Home;
