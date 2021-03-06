import React from 'react';
import '../../App.css';
// import  { Component } from 'react';
import './Skills.css';
import { default as html } from './svg/html.svg';
import { default as sass } from './svg/sass.svg';
import { default as javascript } from './svg/javascript.svg';
import { default as figma } from './svg/figma.svg';
import { default as git } from './svg/git.svg';
import { default as react } from './svg/react.svg';
import { default as pwa } from './svg/pwa.svg';
import { default as php } from './svg/php.svg';
import { default as mysql } from './svg/mysql.svg';
import { default as linux } from './svg/linux.svg';
import { default as webpack } from './svg/webpack.svg';
import { default as ajax } from './svg/ajax.svg';
import { default as typescript } from './svg/typescript.svg';
import { default as graphql } from './svg/graphql.svg';
import { default as gatsby } from './svg/gatsby.svg';
import { default as bash } from './svg/bash.svg';
import { default as vim } from './svg/vim.svg';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll.js';

import {
    imageAnimation,
    fromRightAnimation,
    fromLeftAnimation,
} from '../../Animation';

function Skills() {
    const [element, controls] = useScroll();
    return (
        <div className="skills__container" ref={element}>
            <motion.h2
                //  ref={element}

                animate={controls}
                transition={{ dalay: 0.1, type: 'tween' }}
                variants={imageAnimation}
            >
                Tech Stack
            </motion.h2>
            <motion.h3
                animate={controls}
                transition={{ dalay: 0.5, type: 'tween' }}
                variants={fromRightAnimation}
            >
                I am proficient in
            </motion.h3>
            <motion.div
                animate={controls}
                transition={{ dalay: 0.5, type: 'tween' }}
                variants={fromLeftAnimation}
                className="skills"
            >
                <img src={html} alt="html" className="techlogo" />
                <img src={sass} alt="sass" className="techlogo" />
                <img src={javascript} alt="js" className="techlogo" />
                <img src={figma} alt="figma" className="techlogo" />
                <img src={git} alt="git" className="techlogo" />
                <img src={vim} alt="vim" className="techlogo" />
                <img src={react} alt="react" className="techlogo" />
                <img src={pwa} alt="pwa" className="techlogo" />
            </motion.div>
            <motion.h3
                animate={controls}
                transition={{ dalay: 0.5, type: 'tween' }}
                ref={element}
                variants={fromRightAnimation}
            >
                Familaiar with{' '}
            </motion.h3>
            <motion.div
                animate={controls}
                transition={{ dalay: 0.5, type: 'tween' }}
                variants={fromLeftAnimation}
                className="skills"
            >
                <img src={php} alt="php" className="techlogo" />
                <img src={mysql} alt="myslq" className="techlogo" />
                <img src={linux} alt="linux" className="techlogo" />
                <img src={ajax} alt="ajax" className="techlogo" />
                <img src={bash} alt="bash" className="techlogo" />
                <img src={webpack} alt="webpack" className="techlogo" />
            </motion.div>
            <motion.h3
                animate={controls}
                transition={{ dalay: 0.5, type: 'tween' }}
                variants={fromRightAnimation}
            >
                Exploring
            </motion.h3>

            <motion.div
                animate={controls}
                transition={{ dalay: 1, type: 'tween' }}
                variants={fromLeftAnimation}
                className="skills"
            >
                <img src={typescript} alt="typescript" className="techlogo" />
                <img src={graphql} alt="graphql" className="techlogo" />
                <img src={gatsby} alt="gatsby" className="techlogo" />
            </motion.div>
        </div>
    );
}

export default Skills;
