import React from 'react';
import './WhoIam.css';
// import ScrollEffect from 'react-scroll-effects';
import { default as instagram } from '../../../assets/svg/instagram.svg';
import { default as goodreads } from '../../../assets/svg/goodreads.svg';
import { default as linkedin } from '../../../assets/svg/linkedin.svg';
import { default as twitter } from '../../../assets/svg/twitter.svg';
import { default as github } from '../../../assets/svg/github.svg';

import { motion } from 'framer-motion';
import {
  headerAnimation,
  imageAnimation,
  textAnimation,
} from '../../../assets/Animation';
import { useScroll } from '../../../assets/useScroll';
function WhoIam() {
  const [element, controls] = useScroll();
  return (
    <div className="whoiam-container" id="whoiam" ref={element}>
      <motion.img
        animate={controls}
        transition={{ dalay: 0.2, type: 'tween' }}
        ref={element}
        variants={headerAnimation}
        className="photo"
        src="images/avatar4.webp"
        alt="profil"
      ></motion.img>
      <motion.section
        animate={controls}
        transition={{ dalay: 0.2, type: 'tween' }}
        variants={textAnimation}
        ref={element}
        className="whoiam-text"
      >
        <p>
          I think the value of a human being is how they helps mankind. I want
          to create websites and an applications that will be both beautiful and
          functional. From my point of view the most important things in
          development is <mark className="brandcolor">pragmatism</mark> and
          <mark className="brandcolor"> accessibility</mark>.
        </p>
      </motion.section>
      {/* </ScrollAnimation> */}
      <span className="dot"></span>
      <section className="social-media">
        <div className="social-media-wrap">
          <motion.div
            animate={controls}
            transition={{ dalay: 0.2, type: 'spring' }}
            variants={imageAnimation}
            ref={element}
            className="social-icons"
          >
            <a
              rel="noreferrer"
              target="_blank"
              href={'https://github.com/bartlomiejra'}
              className="social-icon-link github"
              aria-label="Github"
            >
              <img
                height="60px"
                width="60px"
                src={github}
                alt="linkedin-logo"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              className="social-icon-link linkedin"
              href={
                'https://www.linkedin.com/in/bart%C5%82omiej-racha%C5%84ski-5aa782137/'
              }
              aria-label="Goodreads"
            >
              <img
                height="50px"
                width="50px"
                src={linkedin}
                alt="linkedin-logo"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href={'https://www.instagram.com/mitchofminify/'}
              className="social-icon-link instagram"
              aria-label="Instagram"
            >
              <img
                src={instagram}
                height="60px"
                width="60px"
                alt="instagram-logo"
              />
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              className="social-icon-link twitter"
              href={'https://twitter.com/rachanski_b'}
              aria-label="Twitter"
            >
              <img
                height="60px"
                width="60px"
                src={twitter}
                alt="twitter-logo"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              className="social-icon-link goodreads"
              href={
                'https://www.goodreads.com/user/show/111194458-mitchofminify'
              }
              aria-label="Goodreads"
            >
              <img
                height="70px"
                width="70px"
                src={goodreads}
                alt="goodreads-logo"
              />

              <i className="fab fa-goodreads" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default WhoIam;
