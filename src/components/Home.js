import React from 'react';
import '../App.css';
import Hero from './Hero/Hero';
import Cards from './Cards/Cards';
import WhoIam from './WhoIam/WhoIam';
import Skills from './Skills/Skills';
import ContactMe from './Contactme/ContactMe';
import PlaySound from './footer/footer';
import { motion } from 'framer-motion';

function Home() {
    // const [element, controls] = useScroll;
    return (
        <motion.div
            initial="hidden"
            animate="show"
            // ref={element}
        >
            <Hero />
            <WhoIam />
            <Skills />
            <Cards />
            <ContactMe />
            <PlaySound />
        </motion.div>
    );
}

export default Home;
