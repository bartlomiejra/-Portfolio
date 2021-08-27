import React from 'react';
// import { Button } from "../Button/Button";
import './WhoIam.css';
// import ScrollEffect from "react-scroll-effects";
import { motion } from 'framer-motion';
import {
    headerAnimation,
    imageAnimation,
    textAnimation,
} from '../../Animation';
import { useScroll } from '../useScroll';
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
                src="images/avatar4.png"
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
                    I think the value of a human being is how he helps mankind.
                    I want to create websites and an application that will be
                    both beautiful and functional. I create my projects with
                    pragmatism and attach great importance to accessibility.
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
                            <i className="fab fa-github" />
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
                            <i className="fab fa-linkedin" />
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.instagram.com/mitchofminify/'}
                            className="social-icon-link instagram"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram" />
                        </a>

                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="social-icon-link twitter"
                            href={'https://twitter.com/rachanski_b'}
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter" />
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
                            <i className="fab fa-goodreads" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default WhoIam;
