import React from 'react';
import CardItem from '../Cards/CardItem';
import '../Cards/Cards.css';
import { motion } from 'framer-motion';
import { fromUp } from '../../Animation';
import { useScroll } from '../useScroll';

function Cards() {
    const [element, controls] = useScroll();
    return (
        <div className="cards" id="project">
            <motion.h1
                animate={controls}
                transition={{ dalay: 0.2, type: 'spring' }}
                variants={fromUp}
                ref={element}
            >
                Check out some of my projects and blog posts!
            </motion.h1>

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Pomodoro App"
                            label="Project"
                            href="https://todopomodoro-7384d.web.app/"
                            githublink="https://github.com/bartlomiejra/toDoPomodoro"
                            tags="javascript"
                        />
                        <CardItem
                            src="images/img-6.png"
                            text="Travel Agencies page "
                            label="Project"
            href="https://restor.net.pl/"
                            tags="wordpress"
                        />

                        {/* <CardItem
              src="images/img-3.jpg"
              text="My system implementing PARA Method"
              label="Project"
              href="https://dev.to/"
            /> */}
            
                        <CardItem
                                                    
                                                    
                                                    
                                                    src="images/img-33.png"
                            text="This Portfolio"
                            label="Project"
                            githublink="https://github.com/bartlomiejra/-Portfolio"
                            href="https://kind-saha-d01763.netlify.app/"
                            tags="reactjs"
                        />

                        <CardItem
                            src="images/img-3.jpg"
                            text="Start managing your projects, notes and every aspect of your life with the Notion and PARA method "
                            label="Blog Post"
                            href="https://dev.to/mitchofminify/start-managing-your-projects-notes-and-every-aspect-of-your-life-with-the-notion-and-para-method-441p"
                            tags="blog post"
                        />
                        <CardItem
                            src="images/img-7.jpg"
                            text="Recommendation of the best books, fiction and non-fiction"
                            label="Blog Post"
                            href="https://dev.to/"
                            tags="blog post"
                        />
                    </ul>
                    <h3> </h3>
                </div>
            </div>
        </div>
    );
}

export default Cards;
